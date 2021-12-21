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
        1a- deve essere un numero
        1b- compreso da 1<x>100
    2- chiedere eta passeggero
        2a- deve essere un numero
        2b- compreso da 4<x>89
    3- calcolare tariffa chilometri
    4- calcolare sconto
        4a- per i minorenni
        4b- per gli anziani
    5- calcolare tariffa totale
        5a- 2 numeri dopo la virgola
*/

// 1-
const Nchilometri = parseInt(prompt('Quanti chilometri vuoi fare? (tra 1 e 100)').trim()); //1a-
console.log(`Vuoi percorrere ${Nchilometri} chilometri`);

// -1a
if (isNaN(Nchilometri)) {
    alert('Deve essere un numero!');
}

// 1b-
if (Nchilometri < 1 || Nchilometri > 100) {
    alert('Il numero dei chiloemtri deve essere compreso tra 1 e 100');
}

// 2-
const age = parseInt(prompt('quanti anni hai?').trim()); //2a-
console.log(`Hai ${age} anni`);

// 2a-
if (isNaN(age)) {
    alert('Deve essere un numero!');
}

// 2b-
if (age < 4 || age > 89) {
    alert('Per viaggiare devi avere un eta compesa tra i 4 e gli 89 anni');
}

// 3-
let rate = Nchilometri * 0.21;
console.log(`Tariffa chilometri normale: ${rate}`);

// 4-5
if (age < 18) {   //4a-
    rate *= 20 / 100;
    rate = rate.toFixed(2);  //5a-
} else if (age > 65) {   //4b-
    rate *= 40 / 100;
    rate = rate.toFixed(2);
}


console.log(rate);

