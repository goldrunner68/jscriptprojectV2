let val = 0;
let itemGridGauche;
let itemGridDroite;
let gaucheOffside;// taille de l element complet
let droiteOffside;// taille de l element complet

function hiddenItem() {

        for (val;val<=2;val++){
        itemGridGauche = document.querySelectorAll(".itemlGridLeft")[val];
        itemGridDroite = document.querySelectorAll(".itemGridRight")[val];
        gaucheOffside = -(itemGridGauche.offsetWidth);
        droiteOffside = -(itemGridDroite.offsetWidth);
        itemGridGauche.style.left = gaucheOffside + "px";//Hors ecran a gauche
        itemGridDroite.style.right = droiteOffside + "px";//Hors ecran a droite
                console.log(val);
}

}

export {hiddenItem};