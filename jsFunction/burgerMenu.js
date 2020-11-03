const leMenu = document.querySelector ( '#leMenu' );


let valeurMenu;
export function burgerMenu ( selectors = "#burger",menuAffiche1=false ) {

    document.querySelector ( selectors ).addEventListener ( "click" ,() => {
        if ( menuAffiche1 ) {

            jeCacheLeMenu ();
        } else {
            if ( window.matchMedia ( "(orientation: portrait)" ).matches ) {/*media query*/
                afficheLeMenu ( 80 );

            } else {

                afficheLeMenu ( 80 );

            }
        }
    } )
}

function jeCacheLeMenu ( ) {

    let inc = 0;

    setInterval ( () => {
            if ( inc <= 80 ) {
                leMenu.style.right = ( - inc ) + "%";
                inc += 4;
            }
        } ,
        10 );
    burgerMenu('#burger',false)
}

function afficheLeMenu ( number ) {
    let inc = 0;
    setInterval ( () => {
            if ( inc <= number ) {
                leMenu.style.right = ( ( - number ) + inc ) + "%";
                inc += 4;
            }
        },
        10 );

    burgerMenu('#burger',true)

}

