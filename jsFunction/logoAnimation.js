export function logoRotation() {
    let number=0;
    let d=0;
    let elem1 = document.querySelectorAll(".logo");
    let elem2 = elem1.item(number);

let id =setInterval(()=>{
    if (d>=360) {
        d=0;
        if (number<=elem1.length-2){number++;}else{number=0;}
    }else{
        elem1.item(number).style.transform = "rotateY("+d+"deg)";
        d++;
    }

    },0)



}




