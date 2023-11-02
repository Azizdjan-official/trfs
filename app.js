let red = document.querySelector(".circleRed");
let yellow = document.querySelector(".circleYellow");
let green = document.querySelector(".circleGreen");



setInterval(()=>{

    setTimeout(() => {
        red.style.backgroundColor = "red";
        yellow.style.backgroundColor = "black";
        green.style.backgroundColor = "black";
    }, 2000);
    setTimeout(() => {
        red.style.backgroundColor = "black";
        yellow.style.backgroundColor = "yellow";
        green.style.backgroundColor = "black";
    }, 4000);
    setTimeout(() => {
        red.style.backgroundColor = "black";
        yellow.style.backgroundColor = "black";
        green.style.backgroundColor = "green";
    
    }, 6000);
},8000)

