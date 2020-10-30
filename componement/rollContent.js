
export function rollContent () {
    let image = 0  ;

    const data = '{"tableaux":['
        +
        '{ "texte":"Résultat d un projet de groupe, l\'objectif était de réaliser selon ' +
        'un cahier.' +
        'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu\'il est prêt ou que la mise en page est achevée.' +
        ' Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum" , "fichier":"hbck.png" },'
        +
        '{ "texte":"Réalisation du site internet du restaurant BHV Mulhouse, ' +
        'Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu\'il est prêt ou que la mise en page est achevée.' +
        ' Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum ' +
        '" , "fichier":"bhv.png"} ' +
        ']}';

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
