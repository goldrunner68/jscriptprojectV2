let el = document.getElementById("contact");
let sect = document.querySelectorAll("section");
let contact =()=> document.getElementById('boutonContact').addEventListener("click",()=>{

     if(el.classList.contains("desActiveForm")){
 el.classList.remove("desActiveForm");
 el.classList.add("activeForm");
 sect[0].style.opacity = "0.2";
 sect[1].style.opacity = "0.2"
     }else{
         el.classList.remove("active");
 el.classList.add("desActiveForm");
 sect[0].style.opacity = "1.0";
 sect[1].style.opacity = "1.0";
     }
 });
// pour le bouton fermer du contact//
document.getElementById("fermer").addEventListener("click",()=>{
    el.classList.remove("active");
    el.classList.add("desActiveForm");
    sect[0].style.opacity = "1.0";
    sect[1].style.opacity = "1.0";
})
 export {contact};