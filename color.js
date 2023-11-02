let color = Math.random().toString(16).slice(2, 8);
console.log("#"+ color)


let col = document.querySelector(".col")
let text = col.textContent = "#"+ color;

let body =document.body;
body.style.backgroundColor = text;