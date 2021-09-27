<?php

 require_once('config.php');

 if (!isset($conid)) {

  function dbconnect() {
   $mysql=mysql_connect(DB_HOST, DB_USER, DB_PASS); //хост, логин, пароль
   mysql_select_db(DB_NAME); //имя базы данных
   return $mysql;
  }

  function dbquery ($sql) { return mysql_query($sql,get_conid()); }
  function dbrows ($result) { return mysql_num_rows($result); }
  function dbfree ($result) { mysql_free_result($result); }
  function dbclose ($conid) { mysql_close(get_conid()); }

  function dbfetcha ($result) {
   if ($row=mysql_fetch_assoc ($result)) return $row;
   else return false;
  }

  function dbfetch ($result){
   if ($row=mysql_fetch_array($result)) return $row;
   else return false;
  }
 
  function get_conid () {
   static $conid=0;
   if ($conid==0) {
    $conid=dbconnect();
    mysql_set_charset (DB_ENCODING,$conid);
   }
   return $conid;
  }

  get_conid ();
 }

 function get_ip () {
  if( getenv('HTTP_X_FORWARDED_FOR') != '' ) {
   $client_ip = ( !empty($_SERVER['REMOTE_ADDR']) ) ? $_SERVER['REMOTE_ADDR'] : 
    ( ( !empty($_ENV['REMOTE_ADDR']) ) ? $_ENV['REMOTE_ADDR'] : $REMOTE_ADDR );
   $entries = explode(',', getenv('HTTP_X_FORWARDED_FOR'));
   reset($entries);
   while (list(, $entry) = each($entries)) {
    $entry = trim($entry);
    if ( preg_match("/^([0-9]+\.[0-9]+\.[0-9]+\.[0-9]+)/", $entry, $ip_list) ) {
     $private_ip = array('/^0\./', '/^127\.0\.0\.1/', '/^192\.168\..*/', 
      '/^172\.((1[6-9])|(2[0-9])|(3[0-1]))\..*/', '/^10\..*/', '/^224\..*/', '/^240\..*/');
     $found_ip = preg_replace($private_ip, $client_ip, $ip_list[1]);
     if ($client_ip != $found_ip) {
      $client_ip = $found_ip;
      break;
     }
    }
   }
  }
  else {
   $client_ip = ( !empty($_SERVER['REMOTE_ADDR']) ) ? $_SERVER['REMOTE_ADDR'] : 
    ( ( !empty($_ENV['REMOTE_ADDR']) ) ? $_ENV['REMOTE_ADDR'] : $REMOTE_ADDR );
  }
  return $client_ip;
 }
?>