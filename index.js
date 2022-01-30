// iprasta funkcija
function suma(a, b) {
    return a + b;
}
console.log(suma(7, 5));

// anonimine funkcija priskirta kintamajam
const atimtis = function (a, b) {
    return a - b;
}
console.log(atimtis(7, 5));

// arrow function
const daugyba = (a, b) => {
    return a * b;
}
console.log(daugyba(7, 5));

// arrow function - logika su 1 procedura (return), gali netureti {} ir return'o
const dalyba = (a, b) => a / b;
console.log(dalyba(7, 5));

// arrow function - kai turimas tik 1 parametras, tai galim nerasyti ()
const kvadratu = a => a ** 2;
console.log(kvadratu(7));