<?php
require_once 'Controller/formulaire_verif.php'
?>
  <p> MAJ du 13/08/2020, Date standard FR, selection d'une Date de Debut et Fin </p>
  
    <div class="contenaire-grid-commentaire">
        <div class="itemFormAjoutCommentaires">
            <form class="fizzup" action="#" method="post" enctype="multipart/form-data">
                <p class="alert"><?=$attention?></p>
                <p class="alert"><?=$message?></p>
                <input type="email" placeholder="Votre email" name="email" id="email " required>
                <input type="text" placeholder="Votre pseudo" name="pseudo" id="pseudo" required>
                <div class="contenaireNbStars">
                    <span class="starNombre">1
                        <img class="star" src="asset/users/star.png">
                        <input type="checkbox" name="note1" unchecked value="1">
                    </span>

                    <span class="starNombre">2
                        <img class="star" src="asset/users/star.png">
                        <input type="checkbox" name="note1" unchecked value="2">
                    </span>

                    <span class="starNombre">3
                        <img class="star" src="asset/users/star.png">
                        <input type="checkbox" name="note1" unchecked value="3">
                    </span>

                    <span class="starNombre">4
                        <img class="star" src="asset/users/star.png">
                        <input type="checkbox" name="note1" unchecked value="4">
                    </span>

                    <span class="starNombre">5
                        <img class="star" src="asset/users/star.png">
                        <input type="checkbox" name="note1" unchecked value="5">
                    </span>

                </div>
                <label for="imageAjout">
                    <p>Taille de l'image 500ko max</p>
                </label>
                <input type="file" name="imageAjout" required>
                <textarea name="commentaire" placeholder="Vos commentaires" id="commentaire" cols="30" rows="10"
                    size="25" maxlength="255"></textarea>
                <input type="submit" value="Envoyez" required>
            </form>

            <form class="fizzup"action="#" method="POST">
                <label for="date">Filtre : </label>
                <label for="date">A partir de la date : </label>
                <input type="date" name="date">
                <label for="date2">A la date : </label>
                <input type="date" name="date2">
                <label for="ordreMinMax">Classement par nombre étoile : </label>
                <select name="ordreMinMax" id="ordreMinMax">
                    <option value=""></option>
                    <option value="maximum">Max</option>
                    <option value="minimum">Min</option>
                </select>
                <label for="justeNbEtoile">Sélectioner seulement les notes avec : </label>
                <select name="justeNbEtoile" id="justeNbEtoile">
                    <option value=""></option>
                    <option value="Tout">Tout</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input name="GO" type="submit" value="GO">
            </form>

        </div>
        <!--fin item formulaire-->
        <div class="itemResultatsCommentaires">

            <div class="contenaireFlexCommentaires">
                <?php while ($donnees = $obj->fetch()) {?>
                <div class="itemFlexCommentaires">
                    <div id="avatar">
                        <img class="avatar" src="asset/users/<?=$donnees['image']?>">
                    </div>
                    <p><b>Note de : </b><strong id="pseudo"><?=$donnees['pseudo']?></strong></p>
                    <p id="note">
                        <?php  //les etoiles selon notes
                   for ($index=1;$index<=$donnees['note'];$index++){
                    echo'<img class="star" src="asset/users/star.png">';
                   }?>
                    </p>
                    <p id="ddate"><?=$donnees['ddate']?></p>
                    <p id="email"><?=$donnees['email']?></p>
                    <p id="commentaire"><?=$donnees['commentaire']?></p>
                </div>
                <?php  }?>
            </div>
            <!--fin contenaire flex-->
        </div>
        <!--fin item resultat-->
    </div>
    <!--contenairere-->
