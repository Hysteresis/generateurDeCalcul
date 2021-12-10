"use strict";
// variable necessaire pour le calcul
// 2 variables qui donne un nombre aleatoire compris entre 0 et 100
let nombre1 = Math.floor(Math.random() * 100) + 1;
let nombre2 = Math.floor(Math.random() * 100) + 1;
// tableau qui stocke + / * -
const OPERATEURS = ['+', '-', '*', '/'];
//récupérer aleatoirment un seul symbole du tableau
let symbole = OPERATEURS[Math.floor(Math.random() * OPERATEURS.length)];
// recuperer des elements du DOM (document)
let formule = document.getElementById('formule');
// afiicher sur la page le calcul
formule.innerHTML = nombre1 + " " + symbole + " " + nombre2 + " = ";
//faire le calcul et le stocker le resultat
let resultat = 0;
if (symbole === '+') {
    resultat = nombre1 + nombre2;
}
if (symbole === '-') {
    resultat = nombre1 - nombre2;
}
if (symbole === '/') {
    resultat = nombre1 / nombre2;
}
if (symbole === '*') {
    resultat = nombre1 * nombre2;
}
console.log(resultat.toFixed(1));
// les fonctions
//  retry
function recommencer() {
    location.reload();
}
function tentative() {
    // recuperer la saisie
    let reponseUtilisateur = document.getElementById('reponseUtilisateur').value;
    // console.log(reponseUtilisateur);
    // comparer la saisie utilisateur avec le resultat attendu
    let textIndication = "";
    if ((reponseUtilisateur) == resultat.toFixed(1)) {
        textIndication = "GG!!";
        window.setTimeout("recommencer()", 1500);
    }
    else if ((reponseUtilisateur) < resultat.toFixed(1)) {
        textIndication = "trop petit eh non !!!!!!!!!!!!";
    }
    else if ((reponseUtilisateur) > resultat.toFixed(1)) {
        textIndication = "trop grand meuh non !!!!!!!!!!!!";
    }
    else {
        textIndication = "mauvaise saisie";
    }
    let indication = document.getElementById('indication');
    indication.innerHTML = textIndication;
}
// afficher
