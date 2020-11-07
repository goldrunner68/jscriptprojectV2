<?php
// prend la valeur qui n est pas vide
$message = "";
$attention="";
$today = date("m.d.y");
require_once "Model/Database.php";
require_once "Model/EcritureBDD.php";
require_once "Controller/enrBddControler.php";
require_once "Model/LectureBDD.php";
if (@$_POST['GO']=="GO"){
    if (empty($_POST['date'])|| empty($_POST['date2'])){
        $resultat = new LectureBDD();
        $obj = $resultat->byDate($_POST['date'],$_POST['date2']);
      
    }
if ($_POST['ordreMinMax']=="maximum"){
    $resultat = new LectureBDD();
    $obj = $resultat->byNote('DESC');
}
if ($_POST['ordreMinMax']=="minimum"){
    $resultat = new LectureBDD();
    $obj = $resultat->byNote('ASC');
}
    if ($_POST['justeNbEtoile']){
        $resultat = new LectureBDD();
        $obj = $resultat->justeNote($_POST['justeNbEtoile']);
    }
    if ($_POST['justeNbEtoile']=="Tout"){
        $resultat = new LectureBDD();
        $obj = $resultat->lect();
    }
    $_POST['GO']="";
}else{
    $resultat = new LectureBDD();
    $obj = $resultat->lect();
}
