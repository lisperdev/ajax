<?php
header('Content-Type:text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
echo '<response>';
$name = $_GET['name'];
$userNames = array("CRISTIAN", "SLAVA", "YODA");
if(in_array(strtoupper($name), $userNames))
    echo 'Здравствуйте, тастер ' . htmlentities($name);
else if(trim($name) == '')
    echo 'Как Ваше имя?';
else
    echo htmlentities($name) . ', не знакомое имя';
echo '</response>';