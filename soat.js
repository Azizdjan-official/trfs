let vaqt = document.querySelector(".vaqt");
let weekday = document.querySelector(".weekday")
let month = document.querySelector(".thisMonth")
let today = document.querySelector(".today")
let amm =document.querySelector(".am") 

const d = new Date();
let hours = d.getHours();
let minutes = d.getMinutes();
let thisMonth = d.getMonth()
let date = d.getDate();


let weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = weekdays[d.getDay()];

if(minutes < 10){
    minutes = " 0" + minutes;
}
if(hours >= 12){
    amm.textContent = "p.m"
}else
{
    amm;
}

weekday.textContent = day;
month.textContent = thisMonth + 1;
today.textContent = date;
vaqt.textContent = hours + " : " +   minutes ;


