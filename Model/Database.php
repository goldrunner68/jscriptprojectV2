<?php
class Database{
protected $bdd;
/////Teste si executé en lacalhost ou herbergeur/////////
function __construct()
{
 try
{
  if ($_SERVER["SERVER_ADDR"]=='::1') { //analyse si l execution est local ::1
    $this->bdd = new PDO('mysql:host=127.0.0.1;dbname=fizzup;charset=utf8','root','');

    }else{// sinon chez l hebergeur
      $this->bdd = new PDO('mysql:host=legenieomw68100.mysql.db;dbname=legenieomw68100;charset=utf8','legenieomw68100','MOTHERdu68');
  }
}
catch (Exception $e)
{
        printf('Erreur : ' . $e->getMessage());
}
return $this->bdd;
}
function __destruct(){
}


}

