// chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. Sulla base di queste informazioni calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km)va applicato uno sconto del 20% per i minorenniva applicato uno sconto del 40% per gli over 65.L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

//INPUT E DICHIARAZIONE DEI DATI
const kmPrice = 0.21;
const juniorDiscount = 0.20;
const seniorDiscount = 0.40;


// Chiedere all'utente il numero di kilometri che vuole percorrere
const kmNumber =parseInt(prompt ("Quanti kilometri devi percorrere?"));
console.log(kmNumber, typeof kmNumber);

// Chiedere l'etá dell'utente
const userAge = parseInt(prompt ("Quanti anni hai?"));
console.log(userAge, typeof userAge);


// calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km)va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65. 

//PREZZO BIGLIETTO 

let ticketPrice = "";
if (userAge < 18) {
     ticketPrice = kmNumber * kmPrice - juniorDiscount;
} else if (userAge > 65) {
        ticketPrice = kmNumber * kmPrice - seniorDiscount;
} else {
     ticketPrice = kmNumber * kmPrice;
}
console.log(ticketPrice);


// const ticketPrice = kmNumber * kmPrice;
//  console.log(ticketPrice);

//sconto Junior
// const juniorDiscount = ticketPrice * 0.20;
// console.log(juniorDiscount);

//sconto Senior
// const seniorDiscount = ticketPrice * 0.40;
// console.log(seniorDiscount);



// 

