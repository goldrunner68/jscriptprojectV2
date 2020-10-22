
export function rollContent () {
    let image = 0  ;

    const data = '{"tableaux":['
        +
        '{ "texte":"Résultat d un projet de groupe, l\'objectif était de réaliser selon ' +
        'un cahier des charges le site web d\'un club, sur le projet j\'avais deux fonctions chef de projet et integrateur." , "fichier":"hbck.jpg" },'
        +
        '{ "texte":"Réalisation du site internet du restaurant BHV Mulhouse, ' +
        'la partie admin contient l\'ajout, supression, organisation et activation ' +
        '/désactivation des articles " , "fichier":"bhv-samsung.jpg"} ' +
        ']}';

let obj = JSON.parse(data);/*convertion du string en objet*/
let affichageDesProjets = document.querySelector("#roll-picture");
affichageDesProjets.setAttribute('src', 'asset/images/travaux/'+ obj.tableaux[image].fichier);
    document.querySelector('#roll-text').innerHTML = obj.tableaux[image].texte;
/*********************************************************************************************************/
/* rollContent des travaux */
setInterval(()=> {
    if (image <= 1) {
        affichageDesProjets.setAttribute('src', 'asset/images/travaux/'+ obj.tableaux[image].fichier);
        document.querySelector('#roll-text').innerHTML = obj.tableaux[image].texte;
        image++;
    } else {
        image = 0;
    }
   
}, 4000);
}
