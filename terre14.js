// liste triée

var liste = [1,2,3,4,5,6];
console.log(liste);

for (var i =0; i < liste.length; i++){

  for(var j = i + 1;j < liste.length;j++){

    
if (liste[j] >= liste[i]){
    console.log("triée");break;

} if(liste[j] < liste[i]){
    console.log("pas triée");break;

}
   }
}


    




        
        



    
       
    