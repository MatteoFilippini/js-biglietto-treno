console.log('JS OK');

/* 
    Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

    Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.

    L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

/*
    ROAD MAP
    1- chiedere numero chilometri
    2- chiedere eta passeggero
    3- calcolare tariffa chilometri
    4- calcolare sconto
    5- calcolare tariffa totale
*/

// 1-
const Nchilometri = prompt('quanti chilometri vuoi fare?', '2');
console.log(`Vuoi percorrere ${Nchilometri} chilometri`);

// 2-
const age = prompt('quanti anni hai?', '8');
console.log(`Hai ${age} anni`);

// 3-
let rate = Nchilometri * 0.21;
console.log(rate);

// 4-

if (age < 18) {
    rate *= 2 / 100;
}
console.log(rate);

