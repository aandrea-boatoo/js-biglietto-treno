// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca 

// OBIETTIVO
// mostrare il prezzo del biglietto

// VARIABILI
// chilometri da percorrere chiesto all'utente
// eta' chiesta all'utente
// prezzo a km
// sconto eta min
// sconto eta sen
// totale

const prezzo = 0.21;
const km = parseInt(prompt("quanti km desidera percorrere?"));
const eta = parseInt( prompt("indichi la sua eta'"));
const tariffaMinore = 0.8;
const tariffaSenior = 0.6;
let totale = prezzo * km;

if(eta <= 17){
    totale = totale * tariffaMinore
}

if(eta >= 65){
    totale = totale * tariffaSenior
}

totale = totale.toFixed(2)

console.log("il prezzo del biglietto e' di", totale, "$");
 