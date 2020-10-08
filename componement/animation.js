function animation(val) {
    let sectionTag = document.querySelectorAll("section");
    let itemGridGauche = document.querySelectorAll(".item-grid-gauche").item(val);
    let itemGridDroite = document.querySelectorAll(".item-grid-droite").item(val);
    let gaucheOffside = -(itemGridGauche.offsetWidth);// taille de l element complet
    let droiteOffside = -(itemGridDroite.offsetWidth);// taille de l element complet
    let inc = 0;
    let id;
//*********************************************
    function scroll(item) {
        id = setInterval(frame, 0);

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
export{animation};