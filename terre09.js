// Racine carrée d'un nombre 
// puissance x = y alors y2 = x

let nombre = 345;
let carrée = nombre / 2;
let resultOf = carrée;

do {
    resultOf = carrée;
    carrée = (resultOf+(nombre/resultOf))/2;

} while ((resultOf-carrée)!=0);

console.log("le carrée est" + " " + carrée);