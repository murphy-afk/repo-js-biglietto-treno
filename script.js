// Chiedere all'utente il numero di chilometri da percorrere e l'età
// moltiplicare il numero di chilometri per la tariffa (0.21)
// se l'età dell'utente è tra i 18 e i 65 stampare prezzo biglietto
// se l'utente ha meno di 18 anni calcolare lo sconto del 20% e poi stampare il prezzo del biglietto
// se l'utente ha più di 65 anni calcolare lo sconto del 40% e poi stampare il prezzo del biglietto


const distance = parseInt(prompt("Inserisci il numero di chilometri da percorrere"));
const age = parseInt(prompt("Inserisci la tua età"));


if (isNaN(distance) || isNaN(age) || age < 0 || age > 100) {
  console.log("errore: inserire valori validi");
}

else {
  // variables
  const minorDiscount = 20;
  const elderDiscount = 40;
  const kmPrice = 0.21;
  let price = distance * kmPrice;
  let discount;

  if (age < 18) {
    discount = price * (minorDiscount / 100);
    price = price - discount;
  }

  else if (age > 65) {
    discount = price * (elderDiscount / 100);
    price = price - discount;
  }

  console.log(`Il costo del biglietto è ${price.toFixed(2)}€`);
}





