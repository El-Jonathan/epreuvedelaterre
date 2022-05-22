// 24 to 12

var heure = "24:00:00";
var H = +heure.substr(0, 2);
let h = H % 12 || 12;
var ampm = (H < 12 || H === 24) ? "AM" : "PM";
heure = h + heure.substr(2, 3) + ampm;
console.log(heure)