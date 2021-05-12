const nameHolder = document.querySelector("#name");
const dayHolder = document.querySelector("#day");
const secondHolder = document.querySelector("#second");
const minuteHolder = document.querySelector("#minute");
const hourHolder = document.querySelector("#hour");

var favDrink = 
    prompt("What's your favorite cocktail drink?", 
           "Daiquiri");

nameHolder.innerHTML = favDrink;

let day = new Date().getDay();

setInterval(() => {
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();
  let hour = new Date().getHours();
  
  hourHolder.innerHTML = hour;
  secondHolder.innerHTML = second;
  minuteHolder.innerHTML = minute;
  
  if(second < 10){
    secondHolder.innerHTML = "0"+second;
  }
},1000)




const takeDay = () => {
  switch(day){
    case 1:
        return "Pazartesi";
    case 2:
        return "Salı";
    case 3:
        return "Çarşamba"
    case 4:
        return "Perşembe"
    case 5:
        return "Cuma"
    case 6:
        return "Cumartesi"
    case 7:
        return "Pazar";
  }

};


dayHolder.innerHTML = takeDay();