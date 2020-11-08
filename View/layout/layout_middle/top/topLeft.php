<?php

require_once './Controller/formulaire_verif.php'
?>
<div class="middle_topLeft">
        <!--fin item formulaire-->
            <div class="contenaireFlexCommentaires">
                <?php while ($donnees = $obj->fetch()) { ?>
                    <div class="itemFlexCommentaires">
                        <div id="avatar">
                            <img src="asset/users/<?= $donnees['image'] ?>">
                        </div>
                        <div>
                            <p>
                                Note de : <?= $donnees['pseudo'] . ' ' . $donnees['ddate'] ?>
                            </p>
                            <span id="note">
                                <?php //les etoiles selon notes
                                for ($index = 1; $index <= $donnees['note']; $index++) {
                                    echo '<img class="star" src="asset/users/star.png">';
                                } ?>
                            </span>
                        </div>
                        <div>
                            <!-- <p id="email"><?= $donnees['email'] ?></p>-->
                            <p id="commentaire"><?= $donnees['commentaire'] ?></p>
                        </div>
                    </div>
                <?php } ?>
            </div>
            <!--fin contenaire flex-->
        </div>
        <!--fin item resultat-->


