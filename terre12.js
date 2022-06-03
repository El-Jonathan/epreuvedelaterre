// 12h to 24h

const convertTime12to24 = (time12h) => {
    const [time, modifier] = time12h.split(' ');
  
    let [hours, minutes] = time.split(':');
  
  
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
  
    if (hours === '12'){
        console.log("midi");
        return ;
    
    } if (hours === 24){
        console.log("minuit");
        return;

    } 
    

    return `${hours}:${minutes} h`;

    
} 

console.log(convertTime12to24("12:00 AM"));
  
