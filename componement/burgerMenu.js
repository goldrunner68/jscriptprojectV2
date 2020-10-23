const leMenu = document.querySelector('#leMenu');
let htmlTag = document.querySelector("html");
let menuAffiche = false;
export function burgerMenu ()  {
    document.querySelector("#burger").addEventListener("click", () => {
        if (menuAffiche) {

            jeCacheLeMenu();
        } else {
            if (window.matchMedia("(orientation: portrait)").matches) {/*media query*/
                afficheLeMenu(80);
            }else{
                afficheLeMenu(80);
            }
        }
    })

    function jeCacheLeMenu() {
        let inc=0;
        setInterval(()=>{
                if ( inc<=80){
                    leMenu.style.right = (-inc)+ "%";
                    inc+=4;
                }
            },
            10);
        return menuAffiche = false;
    }
    function afficheLeMenu(number) {
        let inc=0;
        setInterval(()=>{
                if ( inc<=number){
                    leMenu.style.right = ((-number)+inc)+ "%";
                    inc+=4;
                }
            },
            10);
        return menuAffiche = true;
    }
}





