<?php
// activa debug temporal
$cfg = file_get_contents('/var/www/html/wp-config.php');
$lines = "<?php\ndefine('WP_DEBUG', true);\ndefine('WP_DEBUG_LOG', true);\ndefine('WP_DEBUG_DISPLAY', true);\ndefine('SCRIPT_DEBUG', true);\n";
file_put_contents('/var/www/html/wp-config-debug.php', $lines);
// inserta requires en wp-config justo antes de stop editing
$cfg = str_replace("/* That's all, stop editing!", "require_once __DIR__ . '/wp-config-debug.php';\n/* That's all, stop editing!", $cfg);
file_put_contents('/var/www/html/wp-config.php', $cfg);
echo "debug on\n";
