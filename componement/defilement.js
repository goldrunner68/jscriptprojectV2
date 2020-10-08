var defilement = () => {
    var image = 0  ;
    const tab = '{"tableaux":['+
'{ "texte":"Ceci est le site réalisé pour le BHV" , "fichier":"bhv-samsung.jpg" },'+
'{ "texte":"Résultat d un projet de groupe, l\'objectif était de réaliser selon un cahier des charges le site web d\'un club." , "fichier":"hbck.jpg" },'+
'{ "texte":"Réalisation du site internet du restaurant BHV Mulhouse, la partie admin contient l\'ajout, supression, organisation et activation désactivation des articles " , "fichier":"bhv-samsung.jpg"} ]}';
const obj = JSON.parse(tab);/*convertion du string en objet*/
const affichageDesProjets = document.querySelector("#item-grid-10");
affichageDesProjets.setAttribute('src', 'asset/images/travaux/'+ obj.tableaux[image].fichier);
/*********************************************************************************************************/
/* defilement des travaux */
setInterval(()=> {
    if (image <= 2) {
        affichageDesProjets.setAttribute('src', 'asset/images/travaux/'+ obj.tableaux[image].fichier);
        document.querySelector('#texteSousGrid10').innerHTML = obj.tableaux[image].texte;
        image++;
    } else {
        image = 0;
    }
   
}, 8000);
}
export {defilement};