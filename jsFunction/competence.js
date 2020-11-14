export function competence (){
    const niveaux = document.querySelectorAll(".item>ul>li");
    niveaux.forEach(niv =>{
        let index =0;
        let taille = niv.dataset.niveaux;
        let id = setInterval(()=>{
            if (index>=taille){
                clearInterval(id)
            }else{
                index++;
                niv.style.width = index+"%";
            }
        },1)

    })
}
