// console.log(document.body);
//
// console.log(document.head);
//
// console.log(document.body.childNodes); // Nous dit le nombre d'élément qu'il y a dans le body (avec les retour à la ligne donc c'est pas ouf !)

for (const childNode of document.body.childNodes) { // On parcours tout les éléments du body dans HTML (C'est déconseillé d'utiliser des childNodes)
    if (Node.ELEMENT_NODE === childNode.nodeType){
    console.log(childNode);
    }
}

console.log(document.getElementById('test')); // Nous liste tout les éléments qui ont un ID qui est test (Pas mettre le # dans les parenthèses)

console.log(document.getElementsByClassName('toto')); // Nous liste tout les éléments qui ont une class qui est toto (Faire attention au 's' de elements, il est obligatoire)

console.log(document.getElementsByTagName('h1')); // Nous liste tout les h1 du body dans HTML

console.log(document.querySelector('body p')); // Permet de récupérer une seule balise HTML (si il y en a plusieurs, il nous renvoie seulement le premier) sous forme de sélécteurs CSS (Super utile)

console.log(document.querySelectorAll('body>p, h1')); // Si on met le All après, ca nous donnera toute les balises référencé dans les parenthèses

console.log(document.querySelector('#test').id); // Le .id permet de récupérer la valeur de l'attribut

console.log(document.querySelector('#test').textContent); // Permet de récupérer le contenu de la balise

document.querySelector('#test').style.background = 'pink'; // Viens ajouter un arrière plan rose au H1 d'ID 'test'

console.log(document.querySelector('#test').id = 'OUI'); // Change la valeur de l'ID
console.log(document.querySelector('#OUI').textContent = 'Bonjour'); // Change le contenu du h1 d'ID OUI



/*   CAS PARTICULIER POUT LES CLASS   */

const h1Element = document.querySelector('#OUI');
h1Element.style.color = 'green'; // Stocké un élément dans une constanste
h1Element.className = 'Bonjour test1'; // Faire référence à ce qui est la class (ici, on remplace le nom de la class pour lui en donner deux nouvelles, 'Bonjour' et 'test1'
h1Element.classList.remove('Bonjour'); // Retire une class dans le code HTML
h1Element.classList.add('test2'); // Ajoute une class dans le code HTML
h1Element.classList.toggle('test'); // Ajoute si la class n'existe pas et si elle existe, il la supprime

