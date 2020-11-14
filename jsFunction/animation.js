import * as competence from './competence.js';
export function animation() {

    let winScroll;
    let maxHauteur;

    let bool0 = false;
    let bool1 = false;

    // detection du scanAllItem de la page web

    //************************************
    let id1 = setInterval(()=>{
        winScroll = scrollY;
        maxHauteur = innerHeight;
        let total = ( winScroll * 100 ) / maxHauteur;
        console.log ( "scroll " + total );

        if ((bool0 !==true ) ) {
            scan ( 0 );
            bool0=true;

        }
        if ((bool1 !==true && total>125 && total <300 ) ) {
            scan ( 1 );
            scan ( 2 );
            scan ( 3 );
            competence.competence();
            bool1=true;
            clearInterval(id1);
        }
    } ,0)




    let scan = function scanAllItem ( val = 0 ) {//stage
        let inc = 0;
        let lesItemsRight = document.querySelectorAll ( ".isInvisibleRight" )[0];
        let lesItemsLeft = document.querySelectorAll ( ".isInvisibleLeft" )[val];
        let id = setInterval ( () => {
            let number = 200;
            if ( inc >= number ) {
                clearInterval ( id );
            } else {

                inc += 5;
                //console.log("inc "+inc+" val "+val);

                lesItemsLeft.style.left = - ( number - inc ) + "%";
               lesItemsRight.style.right = -(number-inc) + "%";

            }
        },10 );

    }

}