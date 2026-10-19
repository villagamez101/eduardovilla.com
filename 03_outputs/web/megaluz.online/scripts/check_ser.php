<?php
// diagnostico: prueba unserialize de args en jet_post_types
$db = new mysqli('db', 'megaluz', 'megaluzpass', 'megaluz');
$res = $db->query("SELECT slug, args FROM VNygc50WF_jet_post_types");
while ($row = $res->fetch_assoc()) {
    $v = unserialize($row['args']);
    echo ($v === false ? 'BAD ' : 'OK  ') . $row['slug'] . " (len " . strlen($row['args']) . ")\n";
}
