<div class="bottom">
    <div class="itemFormAjoutCommentaires">
        <form  action="#" method="post" enctype="multipart/form-data">
            <p class="alert"><?= $attention ?></p>
            <p class="alert"><?= $message ?></p>
            <label for="email" >Email</label>
            <input type="email" placeholder="Votre email" name="email" id="email " required>
            <label for="pseudo">Pseudo</label>
            <input type="text" placeholder="Votre pseudo" name="pseudo" id="pseudo" required>
            <span class="avertis">Une note SVP</span>
            <div class="contenaireNbStars">

                <div class="itemNotationDuFormulaire"><p>1</p>
                    <img class="starForm" src="asset/users/star.png">
                    <input type="checkbox" name="note1" unchecked value="1">
                </div>
                <div class="itemNotationDuFormulaire"><p>2</p>
                    <img class="starForm" src="asset/users/star.png">
                    <input type="checkbox" name="note1" unchecked value="2">
                </div>
                <div class="itemNotationDuFormulaire"><p>3</p>
                    <img class="starForm" src="asset/users/star.png">
                    <input type="checkbox" name="note1" unchecked value="3">
                </div>
                <div class="itemNotationDuFormulaire"><p>4</p>
                    <img class="starForm" src="asset/users/star.png">
                    <input type="checkbox" name="note1" unchecked value="4">
                </div>
                <div class="itemNotationDuFormulaire"><p>5</p>
                    <img class="starForm" src="asset/users/star.png">
                    <input type="checkbox" name="note1" unchecked value="5">
                </div>

            </div>
            <label for="imageAjout">
                <p>Taille de l'image 500ko max</p>
            </label>
            <input type="file" name="imageAjout" required>
            <label for="commentaire">Commentaire</label>
            <textarea name="commentaire" placeholder="Vos commentaires" id="commentaire" rows="10"
                      size="25" maxlength="255"></textarea>
            <input type="submit" value="Envoyez" required>
        </form>

        <form id="form2" action="#" method="POST">
            <label for="date">date debut :</label>
            <input type="date" name="date">
            <label for="date2">date fin :</label>
            <input type="date" name="date2">
            <label for="ordreMinMax">Max & min :</label>
            <select name="ordreMinMax" id="ordreMinMax">
                <option value=""></option>
                <option value="maximum">Max</option>
                <option value="minimum">Min</option>
            </select>
            <label for="justeNbEtoile">Par note :</label>
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
</div>
