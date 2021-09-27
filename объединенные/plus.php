<?php
 require_once 'functions.php';
 $balP = intval(strip_tags(trim($_POST['balP'])));
 $ip = get_ip();
 $result = dbquery('select * from '.DB_TABLE.' where ip="'.$ip.'" limit 0,1');
 if ($result and dbrows($result)) {
  $note = dbfetcha($result);
  $note['cnt'] += $balP;
  $result = dbquery('update '.DB_TABLE.' set cnt = "'.$note['cnt'].'" where ip = "'.$ip.'"');
  if (!$result) die ('Invalid query 1: ' . mysql_error());
 }
 else {
  $result = dbquery('insert into '.DB_TABLE.' (ip, cnt) values ("'.$ip.'", "'.(0+$balP).'")');
  if (!$result) die ('Invalid query 2: ' . mysql_error());
 }
?>