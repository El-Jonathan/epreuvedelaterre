// 24 to 12


// variables 
var heure = "12:00:00";

// resolution 
var H = +heure.substr(0, 2);
let h = H % 12 || 12;
var ampm = (H < 12 || H === 24) ? "AM" : "PM";
heure = h + heure.substr(2, 3) + ampm;


// conditions
if (heure === "12:00PM"){
    console.log("midi");
}else{
    if (heure === "12:00AM"){
        console.log("minuit");
    } else {
        console.log(heure);
    }
}

