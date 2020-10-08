let itemGridGauche;
let itemGridDroite;
let gaucheOffside;// taille de l element complet
let droiteOffside;// taille de l element complet
let inc;
let id;


function animation(val = 0) {

    itemGridGauche = document.querySelectorAll(".item-grid-gauche").item(val);
    itemGridDroite = document.querySelectorAll(".item-grid-droite").item(val);
    gaucheOffside = -(itemGridGauche.offsetWidth);// taille de l element complet
    droiteOffside = -(itemGridDroite.offsetWidth);// taille de l element complet

//*********************************************
    function scroll(item) {
        id = setInterval(frame, 0);
        inc = 0;

        function frame() {
            if ((gaucheOffside + inc) >= 0) {
                clearInterval(id);
            } else {
                inc += 8;
                itemGridGauche.style.left = (gaucheOffside + inc) + "px";
                itemGridDroite.style.right = (droiteOffside + inc) + "px";
            }
        }

    }

    onload = () => {
        scroll(0);
    }

}

export {animation};