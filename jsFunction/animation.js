export function animation() {

    let winScroll;
    let maxHauteur;
    let item = document.querySelectorAll(".isInvisibleLeft");
    let bool0=false;
    let bool1=false;
    let bool2=false;
    // detection du scanAllItem de la page web

    let id2 = setInterval(() => {
        winScroll = scrollY;
        maxHauteur = innerHeight;


        if ((bool0 !== true && winScroll > -1 && winScroll <(maxHauteur / 3))) {
            bool0=true;
            scan(0);
        }
        if ((bool1 !== true && winScroll > (maxHauteur / 3) && winScroll < (maxHauteur))) {
            scan(0);
            scan(1);
            scan(2);
            scan(3);
            bool0=true;
            bool1=true
            clearInterval(id2);//oblige a sortir de l'interval pour plus securité
        }

    }, 0)




    let scan = function scanAllItem(val=0) {//stage
        let inc = 0;

        let itemGridGauche = document.querySelectorAll(".isInvisibleLeft").item(val);
        let itemGridDroite = document.querySelectorAll(".isInvisibleRight").item(0);

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


