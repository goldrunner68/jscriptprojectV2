

export function formulaire(){

    let i = 0.1;
    const leMenu = document.querySelector('#leMenu');


    let pos = window.scrollY;

    document.querySelector('#boutonContact').addEventListener("click",()=>{


        leMenu.style.right ='-80%';
        let el = document.querySelector(".contact");
        el.style.top = "20%";
        el.style.left ="0";
        el.style.display ="block";
        el.style.zIndex = "80";

let id1 = setInterval(()=>{
    if (i>=0.99999){
        clearInterval(id1);
    }
    else{
        i=i+0.1;
        el.style.transform = "scale("+i+")";
        console.log(i);
    }
},0)
    })
}

export function btnFermer (){
    document.querySelector('#close').addEventListener('click',()=>{
        let el = document.querySelector('.contact');
        el.style.display ="none";

    })
}