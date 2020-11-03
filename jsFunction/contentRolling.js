
export function contentRolling () {
    let image = 0  ;

    let data = '{"tableaux":['+
        '{ "texte":"Résultat d un projet d\'étude de groupe, l\'objectif était de le réaliser selon un cahier des charges." , "fichier":"hbck2.png" },' +
        '{ "texte":"Réalisation du site internet du restaurant BHV Mulhouse." , "fichier":"bhv2.png"},' +
        '{ "texte":"Maquette d\'un portfolio d\'après un design vu sur Youtube." , "fichier":"portfolio.png"},' +
        '{ "texte":"Exemple d\'une maquette réalisé sous photoshop avec MokUp sous XD Adobe.", "fichier":"fitBooster.png"}]}';



let obj = JSON.parse(data);/*convertion du string en objet*/
let affichageDesProjets = document.querySelector("#roll-picture");
affichageDesProjets.setAttribute('src', 'asset/images/travaux/'+ obj.tableaux[image].fichier);
    document.querySelector('#roll-text').innerHTML = obj.tableaux[image].texte;
/*********************************************************************************************************/
/* rollContent des travaux */
setInterval(()=> {

    if (image < obj.tableaux.length) {
        affichageDesProjets.setAttribute('src', 'asset/images/travaux/'+ obj.tableaux[image].fichier);
        document.querySelector('#roll-text').innerHTML = obj.tableaux[image].texte;
        image++;
    } else {
        image = 0;
    }
   
}, 4000);
}
