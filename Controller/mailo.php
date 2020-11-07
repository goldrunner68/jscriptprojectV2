<?php
//on vérifie si le champs existe
if (isset($_POST['Message'])) {
    $entete = 'MIME-Version: 1.0' . "\r\n";
    // Envoie du message en html
    $entete .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $entete .= 'From: ' . $_POST['Email'] . "\r\n";
    $message = '<h1>Message envoyé depuis la page Contact</h1>
        <p>
        <b>Nom : </b>' . htmlspecialchars($_POST['Nom']) . '<br>
        <b>Prenom : </b>' . htmlspecialchars($_POST['Prenom']) . '<br>
        <b>Email : </b>' . htmlspecialchars($_POST['Email']) . '<br>
        <b>Message : </b>' . htmlspecialchars($_POST['Message']) . '</p>';
    //on attribue une variable à $_POST['Nom'],$_POST['Prenom'],$_POST['Email'],$_POST['Message']
    $retour = mail('pilouweb2000@gmail.com', 'Envoi depuis page Contact', $message, $entete);
    if ($retour) {
        echo '<script>alert("Votre message a bien été envoyé.")</script>';
        /*$delai = 1;
        header("Refresh: $delai");*/
    } else {
        echo '<script>alert("Probleme ! votre message n a pas été envoyé.")</script>';
    }
}
?>