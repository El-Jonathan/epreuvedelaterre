// affichez le resultat d'une puissance.

const [node, script, chi, pui] = process.argv 

let resultat = 1;

for(let i =0; i < pui; i++){

    resultat *=  chi; 
}
console.log(resultat);