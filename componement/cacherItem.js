
function cacherItem(val) {

    let itemGridGauche = document.querySelectorAll(".item-grid-gauche").item(val);
    let itemGridDroite = document.querySelectorAll(".item-grid-droite").item(val);
    let gaucheOffside = -(itemGridGauche.offsetWidth);// taille de l element complet
    let droiteOffside = -(itemGridDroite.offsetWidth);// taille de l element complet
    itemGridGauche.style.left = gaucheOffside + "px";//Hors ecran a gauche
    itemGridDroite.style.right = droiteOffside + "px";//Hors ecran a droite

}
export{cacherItem};