const langages = ['C++', 'Java', 'C#', 'PHP']; // déclaration d'un tableau indicé avec des chaines de caractères
console.log(langages[0]); // le [0] est l'opérateur d'accession du tableau !

const ulElements = document.querySelector('#langages');
ulElements.style.background = 'Lightgrey';

/*ANCIENNE METHODE */
/*const liElements = document.createElement('li');
liElements.textContent = 'Python';
ulElements.appendChild(liElements); // C'est ca qu'on utilise !!!*/

/*NOUVELLE METHODE*/
ulElements.innerHTML = '<li>C++</li>'; // Insert une balise li dans le ul dans le code HTML ; innerHTML représente le contenu de l'élément HTML

for (const Langage of langages) {
    ulElements.insertAdjacentHTML('beforeend', `<li>${Langage}</li>`); // beforeend pour aller dans l'ordre du tableau
    ulElements.insertAdjacentHTML('afterbegin', `<li>${Langage}</li>`); // afterbegin pour aller dans l'ordre inverse du tableau
}/*BIEN FAIRE ATTENTION DE insertAdjacentHTML ET PAS insertAdjacentELEMENT !!!!*/

const liElements = document.querySelectorAll('#langages li'); // document, c'est le DOM, ca représente le DOM, permet de modifier tout le DOM; querySelectorAll retourne un tableau(réellement c'est une node list)
for (const liElement of liElements) { // Structure de controle itératives mais aussi un objet de type HTML Element
    liElement.classList.add('toto'); // le nom de la constante, une propriété puis une methode qui contient un opérateur d'appel de fonctions
}

const inputElement = document.querySelector('#firstName'); // Opérattions d'affectations de valeurs
console.log(inputElement.value); // Avoir la valeur de l'input dans la console
inputElement.value = 'Moi'; // Changer la valeur de l'input ; value est un propriété
inputElement.type = 'password'; // Changer le type de l'input

/*

className

classList nous donne accès à .remove, .add, .toggle

*/