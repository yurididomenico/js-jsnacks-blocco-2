// JAVASCRIPT //

console.log("Ciao!");

/*
*Snack2*
Generatore di “nomi cognomi” casuali del grande gatsby:
-Lista di nomi 
-Lista di cognomi
-Generare una "falsa" lista di invitati
-Ogni invitato nella lista, è l'unione di un "nome" e un "cognome" delle liste precedentemente dette scelti in modo casuale.
*/

let listaNomi = ["Giuseppino", "Alfonsetto", "Rodolfuccio"];
let listaCognomi = ["Giuri", "Cimarra", "Scaletta"];
let listaInvitati = [];
let randomUsciti = [];


for(let i=0; i<3 ;i++)
{   
    let randomNome = Math.round(Math.random() * 2);
    let randomCognome = Math.round(Math.random() * 2);

    

    listaInvitati.push(`${listaNomi[randomNome]} ${listaCognomi[randomCognome]}`);
    
    console.log(listaInvitati[i]);
}




























// ----- FINE :) -----