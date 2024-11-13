// 04-DOM : DONNEZ DU STYLE À VOS ÉLÉMENTS
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
DOM - PREPA 9 : « Infos » : informations sur un élément
Récupérez la largeur et la hauteur de la section d'id "contenu"
et affichez les deux informations dans une liste
(un item pour la largeur et un item pour la hauteur)
que vous insérez dans la section d'id "infos" après le titre
que vous insérez dans la section d'id "infos" après le titre
*/

const taille = document.querySelector('#contenu');
const largeur = window.getComputedStyle(taille).width;
const hauteur = window.getComputedStyle(taille).height;

const sectionElt = document.getElementById('infos');
sectionElt.insertAdjacentHTML('beforeend', '<ul></ul>');
const ulElt = document.querySelector('ul');

ulElt.insertAdjacentHTML('beforeend', `<li>Largeur = ${largeur}</li>`);
ulElt.insertAdjacentHTML('beforeend', `<li>hauteur = ${hauteur}</li>`);