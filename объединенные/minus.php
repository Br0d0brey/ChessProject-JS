<?php
 require_once 'functions.php';
 $balM = intval(strip_tags(trim($_POST['balM'])));
 $mov = mysql_real_escape_string(strip_tags(trim($_POST['move'])));
 $ip = get_ip();
 $result = dbquery('select * from '.DB_TABLE.' where ip="'.$ip.'" limit 0,1');
 if ($result and dbrows($result)) {
  $note = dbfetcha($result);
  $note['cnt'] -= $balM;
  if ($note['mov']!=$mov) { //не минусовать повторно за неверные
   $result = dbquery('update '.DB_TABLE.' set cnt = "'.$note['cnt'].'", mov = "'.$mov.'" where ip = "'.$ip.'"');
   if (!$result) die ('Invalid query 1: ' . mysql_error());
  }
 }
 else {
  $result = dbquery('insert into '.DB_TABLE.' (ip, cnt) values ("'.$ip.'", "'.(0-$balM).'")');
  if (!$result) die ('Invalid query 2: ' . mysql_error());
 }
?>