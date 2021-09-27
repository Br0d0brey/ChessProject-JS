<html><head>
 <meta http-equiv="Content-Type" content="text/html; charset=windows-1251">
 <title>Решалка: весь рейтинг</title>
</head>
<body bgcolor="white">
<?php
 require_once 'functions.php';
 $result = dbquery('select * from '.DB_TABLE.' order by cnt desc');
 echo '<table align="center" width="100%" border="1" cellpadding="4" cellspacing="0">';
 if ($result and dbrows($result)) {
  while ($note = dbfetcha($result)) {
   echo '<tr><td width="50%">'.$note['ip'].'</td><td>'.$note['cnt'].'</td></tr>';
  }
 }
 else { echo '<tr><td>Нет данных</td></tr>'; }
 echo '</table><div align="center"><a href="list.php">Обновить</a></div>';
?>
</body></html>