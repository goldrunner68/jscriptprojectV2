const leMenu = document.querySelector('#leMenu');
let navTag = document.querySelector("nav");
let menuAffiche = false;

let slideBurger = () => {
    document.querySelector("#burger").addEventListener("click", () => {
        if (menuAffiche) {
            jeCacheLeMenu();
        } else {
            if (window.matchMedia("(orientation: portrait)").matches) {/*media query*/
                afficheLeMenu(50);
            }else{
                afficheLeMenu(85)
            }


        }
    })
}

function jeCacheLeMenu() {
    leMenu.style.left = 100 + "%";
    return menuAffiche = false;

}

function afficheLeMenu(number) {
    leMenu.style.left = number + "%";
    return menuAffiche = true;
}

export {slideBurger};

