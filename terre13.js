// trouver la suisse

let chiffres = [44,66,22];
//console.log(chiffres);

let max = Math.max(...chiffres);
//console.log(max);

let min = Math.min(...chiffres);
//console.log(min);

for(let i =0; i< chiffres.length; i++){
if (chiffres[i] === max || chiffres[i] === min){
    continue;
}
console.log(chiffres[i])
}
    
    
    

    



 

    