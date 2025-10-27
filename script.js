// Chiedere all'utente il numero di chilometri da percorrere e l'età
// moltiplicare il numero di chilometri per la tariffa (0.21)
// se l'età dell'utente è tra i 18 e i 65 stampare prezzo biglietto
// se l'utente ha meno di 18 anni calcolare lo sconto del 20% e poi stampare il prezzo del biglietto
// se l'utente ha più di 65 anni calcolare lo sconto del 40% e poi stampare il prezzo del biglietto


let distance = parseInt(prompt("Inserisci il numero di chilometri da percorrere"));
let age = parseInt(prompt("Inserisci la tua età"));
const kmPrice = 0.21;
let price;
let discount;

price = distance * kmPrice;

if (age < 18) {
  discount = (price / 100) * 20;
  price = price - discount;
}

else if (age > 65) {
  discount = (price / 100) * 40;
  price = price - discount;

}

console.log(`il costo del biglietto è ${price.toFixed(2)}€`);






