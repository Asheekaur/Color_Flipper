const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const hex_length = 6;

const btn = document.querySelector(".btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    let randomColor = "#";
    // generate a random hex number of hex_length
    for(let i = 0 ;i < hex_length ; i++)
    randomColor += hex[Math.floor(Math.random() * hex.length)];
    
});
