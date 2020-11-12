<?php

$target_dir = "asset/users/";
$target_file = $target_dir . basename($_FILES["imageAjout"]["name"]);
$uploadOk = 1;
$delai = 0;
$imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
// regarde si l image est vrai ou un fake
if (isset($_POST["submit"])) {
    $check = getimagesize($_FILES["imageAjout"]["tmp_name"]);
    if ($check !== false) {
        $message="Le fichier est bien une image! - " . $check["mime"] . ".";
        $uploadOk = 0;
    } else {
        $message="Le fichier n'est pas une image.";
        $uploadOk = 0;

    }
}
// teste si l'image existe deja si oui elle est supprimée
if (file_exists($target_file)) {
    unlink($target_file);

    $message="l acien fichier a été supprimé.";

}
// teste la taille
if ($_FILES["imageAjout"]["size"] > 30000) {
    $_SESSION['petitProb']="Desolé le poids de l'image est trop grande.";
    $uploadOk = 0;

}
// limite la taille
if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
    && $imageFileType != "gif") {
    $message="Desolé, seul des JPG, JPEG, PNG & GIF fichiers sont authorisés.";
    $uploadOk = 0;

}
// verifie si upload est ok
if ($uploadOk == 0) {
    $message ="Desolé, votre fichier n'a pas été télechargé.";
// si tout est ok alors le fichier est uploadé

} else {
    if (move_uploaded_file($_FILES["imageAjout"]["tmp_name"], $target_file)) {
        $message= "Le fichier " . basename($_FILES["imageAjout"]["name"]) . " a bien été been envoyé.";
// envoie vers la class bdd
       $fichierNom =basename($_FILES["imageAjout"]["name"]);

        $b = new EcritureBDD();
        $b->setEmail($_POST["email"]);
        $b->setPseudo($_POST["pseudo"]);
        $b->setNote($notation);
        $b->setImage($fichierNom);
        $b->setCommentaire($_POST["commentaire"]);
        $b->insert();

    } else {
        $message= "Oups! il y'a eu un petit probleme.";
        $go=(false);


    }
    
}
