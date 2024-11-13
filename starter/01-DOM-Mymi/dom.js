/*
Exercices qui accompagnent le tuto en anglais de Christian Heilmann :
« The essentials of DOM scripting in 10 minutes »,
http://icant.co.uk/articles/domessentials/
=> voir traduction française sur transparents (js-cours-DOM.pdf)
*/

/* 1. Cibler l'élément d'id nav */
console.log(document.getElementById('nav'));

/* 2. Récupérer tous les li */
console.log(document.querySelectorAll('li'));

/* 3. Cibler le 4e li */
console.log(document.getElementById('li4'));

/* 4. Compter le nombre de li dans la page */

console.log(document.querySelectorAll('li').length);

/* 5. Cibler le premier li pair */
console.log(document.querySelector('li.pair'));

/* 6. Récupérer tous les li de classe impair */

const liElements = document.querySelectorAll('li.impair');
/* a) afficher ce qu'on obtient */
console.log(liElements);

/* b) afficher le 2e li de classe impair */
console.log(document.querySelector('li.impair:nth-of-type(2)'));

/* c) afficher chacun des li impair */
console.log(document.querySelectorAll('li.impair'));


/* d) compter le nombre de li de classe impair dans la page */
console.log(document.querySelectorAll('.impair').length);


/* 7. Cibler le 4e li puis, à partir de là, cibler son frère juste avant lui */
const liFourthElement = document.querySelector('li:nth-of-type(4)');
const liThreeElement = liFourthElement.previousElementSibling;

console.log(liThreeElement);


/* 8. Cibler le 4e li puis, à partir de là, cibler le suivant */
const liFourth= document.querySelector('li:nth-of-type(4)');
const liThree = liFourth.nextElementSibling;

console.log(liThree);


/* 9. Cibler le parent du 4e li */
const liParent = document.querySelector('li:nth-of-type(4)').parentNode;
console.log(liParent);


/* 10. Récupérer tous les enfants de l'ul */
const ulElements = document.querySelector('ul').children;

/* a) afficher ce qu'on obtient */
console.log(ulElements);

/* b) cibler le 1er enfant de l'ul */
console.log(document.querySelector('ul').firstElementChild);

/* c) cibler le dernier enfant de l'ul */
console.log(document.querySelector('ul').lastElementChild);


/* c) cibler le 4e enfant de l'ul */
console.log(document.querySelector('ul').children[3]);


/* 11. Chaînage de méthodes - que retournent les expressions suivantes ? */
/* a) document.getElementById("nav").getElementsByTagName("li")[3].firstChild */
//  Retourne le premièr enfant du 4éme <li> dans une balise d'ID 'nav'

/* b) document.getElementsByTagName("li")[2].childNodes[3].firstChild */
// Retourne le premier enfant du 4ème enfant de la 3ème balise <li>

/* c) document. getElementsByTagName("li")[2].firstChild.firstChild */
// Retourne le premier enfant du premier enfant de la 3ème balise <li>


/* 12. Afficher les propriétés (nom du nœud, type de nœud, valeur du nœud) d'un nœud
*/
/* a) du noeud document.getElementById("nav").getElementsByTagName("li")[3].firstChild */
const nodes = document.getElementById("nav").getElementsByTagName("li")[3].firstChild;

console.log(nodes.nodeName);
console.log(nodes.nodeType);
console.log(nodes.nodeValue);


/* b) du noeud document.getElementById("nav").getElementsByTagName("a")[2].firstChild */
const node = document.getElementById("nav").getElementsByTagName("a")[2].firstChild;

console.log(node.nodeName);
console.log(node.nodeType);
console.log(node.nodeValue);


/* 13. Changer le texte "Photos" en "Visuals" */
//const aElement = document.getElementById("nav").getElementsByTagName("a")[2].firstChild;

//aElement.textContent = 'Visuals';

/* 14. Modifier les attributs d'un élément */
/* a) Changer la valeur de l'attribut href du lien "Photos" en "photos.php" */

//nodes.setAttribute('href', 'photos.php');

/* a) Lui ajouter un attribut title avec la valeur "voir mes photos" */

//nodes.setAttribute('title', 'voir mes photos');

/* 15. Supprimer le dernier li du menu
       (faites-le en utilisant la méthode querySelector pour cible l'ul
        et querySelectorAll pour cibler les li)
*/

/*
const o = document.querySelector('ul');
p = document.querySelectorAll('li')[5]
o.parentNode.removeChild(p);
*/

/* 16. Ajouter un li à la fin de la liste */

/*const liAjout = document.querySelector('ul');
liAjout.insertAdjacentHTML("beforeend", `<li>Contact</li>`);*/



/* 17. Ajouter un lien dans le menu. Ce lien doit
	- venir avant "photos",
	- afficher le texte "Bibliographie",
	- pointer vers la page "biblio.html" et
	- afficher au survol la boîte de dialogue avec le texte "consulter ma bibliographie"  */

/*const aAjout = document.querySelector('ul>#li4');
aAjout.insertAdjacentHTML("beforebegin", `<a href="biblio.html" title="consulter ma bibliographie">Bibliographie</a>`);*/





/* 18. Modifier le lien "Photos" 
	  - changer son libellé en "Visuals" 
	  - ajouter une boîte de dialogue au survol avec le texte "voir la galerie" 
	  - changer la cible du lien en "visuals.html " */
/*const a_PhotosElement = document.querySelector('li#li4>a');

a_PhotosElement.textContent = 'Visuals';
a_PhotosElement.setAttribute('title', 'voir la galerie');
a_PhotosElement.setAttribute('href', 'visuals.html');*/




/* 19. Dupliquer le li "Photos" et s'en servir pour ajouter un lien
	   - juste après le lien "Photos"
	   - dont le libellé est "Visuals" 
	   - avec une boîte de dialogue au survol qui affiche le texte "voir la galerie" 
	   - qui pointe vers la page "visuals.html " */

a = document.getElementById('nav');
b = a.getElementsByTagName('li')[3];
c = b.cloneNode(true);
a.insertBefore(c, b);




/* 20. Remplacer le dernier lien par le texte (non cliquable) "Contact : monmail@gmail.com"*/

const d = document.querySelector('li#li6');
e = d.querySelector('a')
const newtext = document.createTextNode('Contact : monmail@gmail.com')
d.replaceChild(newtext, e);