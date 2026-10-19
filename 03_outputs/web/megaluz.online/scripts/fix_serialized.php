<?php
/**
 * Repara valores serializados con longitudes incorrectas (chars vs bytes)
 * en todas las tablas/columnas de texto del esquema.
 */
class SerFix {
    public static function emit(&$i, $n, $s, &$out) {
        if ($i >= $n) return;
        $t = $s[$i];
        if ($t === 's') {
            $j = strpos($s, ':', $i + 2);
            $k = strpos($s, '"', $j + 1);
            $p = $k + 1; $raw = '';
            while ($p < $n) {
                if ($s[$p] === '\\') { $raw .= substr($s, $p, 2); $p += 2; continue; }
                if ($s[$p] === '"') break;
                $raw .= $s[$p]; $p++;
            }
            $out .= 's:' . strlen($raw) . ':"' . $raw . '";';
            $i = $p + 2;
        } elseif ($t === 'a') {
            $j = strpos($s, ':', $i + 2);
            $c = (int) substr($s, $i + 2, $j - $i - 2);
            $i = $j + 2; // {
            $out .= 'a:' . $c . ':{';
            for ($x = 0; $x < $c; $x++) { self::emit($i, $n, $s, $out); self::emit($i, $n, $s, $out); }
            if ($i < $n && $s[$i] === '}') $i++;
            $out .= '}';
        } elseif ($t === 'O') {
            // O:len:"ClassName":count:{props...}
            $j = strpos($s, ':', $i + 2);
            $i = $j + 1; // apunta a "ClassName"
            self::emit($i, $n, $s, $out); // emite s:len:"ClassName";
            $j = strpos($s, ':', $i + 1);
            $c = (int) substr($s, $i + 1, $j - $i - 1);
            $i = $j + 2; // {
            $out .= $c . ':{';
            for ($x = 0; $x < $c * 2; $x++) { self::emit($i, $n, $s, $out); }
            if ($i < $n && $s[$i] === '}') $i++;
            $out .= '}';
        } else {
            $j = strpos($s, ';', $i);
            $out .= substr($s, $i, $j - $i + 1);
            $i = $j + 1;
        }
    }

    public static function repair(string $s): ?string {
        $i = 0; $n = strlen($s); $out = '';
        self::emit($i, $n, $s, $out);
        if (unserialize($out) === false && $out !== $s) return null;
        return $out;
    }
}

$db = new mysqli('db', 'megaluz', 'megaluzpass', 'megaluz');
$db->set_charset('utf8mb4');

$tables = [];
$res = $db->query("SELECT table_name FROM information_schema.tables WHERE table_schema='megaluz'");
while ($r = $res->fetch_assoc()) $tables[] = $r['table_name'];

$fixed = 0; $bad = 0; $scanned = 0;
foreach ($tables as $table) {
    $cols = $db->query("SHOW COLUMNS FROM `$table`");
    $textcols = []; $pk = null;
    while ($c = $cols->fetch_assoc()) {
        $t = strtoupper($c['Type']);
        if (str_contains($t, 'TEXT') || str_contains($t, 'BLOB')) $textcols[] = $c['Field'];
        if ($c['Key'] === 'PRI') $pk = $c['Field'];
    }
    if (!$pk || !$textcols) continue;
    foreach ($textcols as $col) {
        $q = $db->query("SELECT `$pk` AS pk, `$col` AS v FROM `$table` WHERE `$col` LIKE 'a:%' OR `$col` LIKE 's:%' OR `$col` LIKE 'O:%' LIMIT 500000");
        if (!$q) continue;
        while ($row = $q->fetch_assoc()) {
            $scanned++;
            $v = $row['v'];
            if (unserialize($v) !== false) continue;
            $r2 = SerFix::repair($v);
            if ($r2 !== null) {
                $st = $db->prepare("UPDATE `$table` SET `$col` = ? WHERE `$pk` = ?");
                $st->bind_param('ss', $r2, $row['pk']);
                $st->execute();
                $fixed++;
            } else {
                $bad++;
            }
        }
    }
}
echo "scanned: $scanned, fixed: $fixed, unrecoverable: $bad\n";
