let bool=null;
function animation() {

    // detection du scanAllItem de la page web





    let id2 = setInterval(() => {
        let winScroll = window.scrollY;
        let maxHauteur = window.innerHeight;


        if ((bool !== 0 && winScroll >= -1 && winScroll <= (maxHauteur / 3))) {
            console.log(bool);
            scan(0);

        }
        if ((bool !== 1 && winScroll >= (maxHauteur / 3) && winScroll <= (maxHauteur / (2 / 3)))) {
            console.log(bool);
            scan(1);

        }
        if ((bool !== 2 && winScroll >= (maxHauteur / (2 / 3)) && winScroll >= maxHauteur)) {
            console.log(bool);
            scan(2);

        }
    }, 0)




    let scan = function scanAllItem(val) {//stage

        let inc = 0;

        let itemGridGauche = document.querySelectorAll(".item-grid-gauche").item(val);
        let itemGridDroite = document.querySelectorAll(".item-grid-droite").item(val);
        let id = setInterval(()=>{//stage 2
            if (inc===100) {

                clearInterval(id);


            } else {
                inc += 10;
                itemGridGauche.style.left = -(100-inc) + "%";
                itemGridDroite.style.right = -(100-inc) + "%";

            }
        }, 10);
return bool=val;



    }

}


export {animation};