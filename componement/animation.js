export function animation() {

    let winScroll;
    let maxHauteur;
    let item = document.querySelectorAll(".gauche");
    let bool0=false;
    let bool1=false;
    let bool2=false;
    // detection du scanAllItem de la page web

    let id2 = setInterval(() => {
        winScroll = window.scrollY;
        maxHauteur = window.innerHeight;


        if ((bool0 !== true && winScroll >= -1 && winScroll <= (maxHauteur / 3))) {
            bool0=true;
            scan(0);
        }
        if ((bool1 !== true && winScroll >= (maxHauteur / 3) && winScroll <= (maxHauteur / (2 / 3)))) {
            scan(1);
            bool1=true
        }
        if ((bool2 !== true && winScroll >= (maxHauteur / (2 / 3)) && winScroll >= maxHauteur)) {
            bool2 = true
            scan(2);
            clearInterval(id2);//oblige a sortir de l'interval pour plus securité
        }
    }, 0)




    let scan = function scanAllItem(val=0) {//stage
        let inc = 0;

        let itemGridGauche = document.querySelectorAll(".gauche").item(val);
        let itemGridDroite = document.querySelectorAll(".droite").item(val);

        let id = setInterval(()=>{//stage 2
            let number = 200;
            if (inc>=number) {
                clearInterval(id);
            } else {

                inc +=5;
                //console.log("inc "+inc+" val "+val);
                itemGridGauche.style.left = -(number-inc) + "%";
                itemGridDroite.style.right = -(number-inc) + "%";


            }
        }, 10);


    }
}


