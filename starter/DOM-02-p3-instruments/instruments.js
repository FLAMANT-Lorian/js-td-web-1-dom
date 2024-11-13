// 02-DOM : PARCOUREZ LE DOM
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
 DOM - PREPA 3 : « Instruments » : attributs et classes
- Créez une fonction getInfosLiens qui doit afficher :
    - le nombre total de liens dans la page web ;
    - la cible du premier et du dernier lien.
    N.B. Cette fonction doit afficher un résultat correct, quel que soit le nombre de liens présents dans la page.
- Ajoutez un nouvel instrument à la page web, puis vérifiez le nouveau résultat de votre programme.
    <li id="clavecin" class="cordes pincees">
        Le <a href="https://fr.wikipedia.org/wiki/Clavecin">clavecin</a>
    </li>
- Écrivez la fonction possede qui vérifie qu'un élément avec un certain id possède une classe
- Testez grâce à cette foncion 
    - si l'élément d'id "saxophone" possède la classe "bois" (doit afficher true)
    - si l'élément d'id "saxophone" possède la classe "cuivre" (doit afficher false)
    - si l'élément d'id "trompette" possède la classe "cuivre" (doit afficher true)
    - si l'élément d'id "contrebasse" possède la classe "cordes" (doit afficher "Aucun élément ne possède l'id contrebasse")
*/

function getInfosLiens() {
    const nbrAElt = document.getElementsByTagName('a').length;
    if (nbrAElt > 0) {
        console.log(nbrAElt)
    } else {
        console.log('Votre page ne contient pas de lien');
    }
    console.log(document.querySelector('li:first-of-type>a'));
    console.log(document.querySelector('li:last-of-type>a'));
}

getInfosLiens();

const ulElt = document.querySelector('ul');
ulElt.insertAdjacentHTML('beforeend', '<li id="clavecin" class="cordes pincees">Le <a href="https://fr.wikipedia.org/wiki/Clavecin">clavecin</a></li>');

function possede(idElement, classElt) {
    const eltClass = document.getElementById(idElement);
    if (eltClass) {
        if (eltClass.classList.contains(classElt)) {
            return true;
        } else if (!(eltClass.classList.contains(classElt))) {
            return false;
        }
    } else {
        return `Aucun élément ne possède l'id '${idElement}' !`;
    }
}

console.log(possede('saxophone', 'bois'));
console.log(possede('saxophone', 'cuivre'));
console.log(possede('trompette', 'cuivre'));
console.log(possede('contrebasse', 'cordes'));
