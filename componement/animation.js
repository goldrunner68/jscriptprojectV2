let itemGridGauche;
let itemGridDroite;
let gaucheOffside;// taille de l element complet
let droiteOffside;// taille de l element complet
let inc;
let id;
let winScroll = window.scrollY;
let hauteur = window.innerHeight;
let vertical = -1;
let total;
let index = 0;
let elem;
let id2;
function animation() {

    // detection du scanAllItem de la page web

    total = (winScroll * 100) / hauteur;//donne la valeur en pourcentage
    total = (total / 100);// arrondi le pourcentage en entier
    id2 = setInterval(function() {
        if (window.scrollY !== vertical) {
            vertical=window.scrollY;
            if (index>=2){clearInterval(id2)}
            index++;
        scanAllItem(index-1);
            console.log("window.scrollY="+index);

        }
    }, 1000);


    function scanAllItem(val=0) {//stage 1
        itemGridGauche = document.querySelectorAll(".item-grid-gauche").item(val);
        itemGridDroite = document.querySelectorAll(".item-grid-droite").item(val);
        gaucheOffside = -(itemGridGauche.offsetWidth);// taille de l element complet
        droiteOffside = -(itemGridDroite.offsetWidth);// taille de l element complet


        id = setInterval(returnAllPositionInitial, 0);
        inc = 0;

        function returnAllPositionInitial() {//stage 2
            if ((gaucheOffside + inc) >= 0) {
                clearInterval(id);
            } else {
                inc += 8;
                itemGridGauche.style.left = (gaucheOffside + inc) + "px";
                itemGridDroite.style.right = (droiteOffside + inc) + "px";
            }
        }
    }
}


export {animation};