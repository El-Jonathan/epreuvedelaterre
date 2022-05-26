// Nombre premier 

var nbr = 2;
for (let i = 2; i < nbr; i ++){
    if(nbr % i === 0 ){
        console.log(nbr + "n'est pas un nombre premier bro");
    }else{
        console.log(nbr + " est un nombre premier bro");
    }
}