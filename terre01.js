// Nom du programme

let url = "http://127.0.0.1:5500/terre01.js";


let fichier = url.split(/(\\|\/)/g).pop();

console.log(fichier);
