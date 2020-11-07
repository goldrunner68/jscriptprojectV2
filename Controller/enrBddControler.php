<?php

$notation = (!empty($_POST['note1'])) ? $notation = $_POST['note1'] : null;
// verifier que tous les champs soient remplis
if (
((!empty($_POST['note1']))
&&(!empty($_POST['email']))
&&(!empty($_POST['pseudo']))
&&(!empty($_POST['commentaire']))

)
){
include_once 'upload.php';
}
else{
$attention ="Vous devez remplir tous les champs, merci !";
}


