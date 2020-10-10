
let id;
let winScroll = window.scrollY;
let hauteur = window.innerHeight;
let total;

let id2;
let un = false;
let deux = false;
let trois = false;
function animation() {

    // detection du scanAllItem de la page web

    total = (winScroll * 100) / hauteur;//donne la valeur en pourcentage
    total = (total / 100);// arrondi le pourcentage en entier

            for (let i=0;i<=2;i++){
            if (scanAllItem(i) !==true){
                console.log('true');
                scanAllItem(i);

            }
}




    function scanAllItem(val=0) {//stage 1
        let inc = 0;
        console.log("val "+val);
        let itemGridGauche = document.querySelectorAll(".item-grid-gauche").item(val);
        let itemGridDroite = document.querySelectorAll(".item-grid-droite").item(val);
        id = setInterval(()=>{//stage 2
            if (inc===100) {

                clearInterval(id);
            } else {
                inc += 10;
                itemGridGauche.style.left = -(100-inc) + "%";
                itemGridDroite.style.right = -(100-inc) + "%";

            }
        }, 10);
        inc = 0;
        return true;

    }
}


export {animation};