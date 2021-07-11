const colors = ["cadetblue", "plum", "khaki", "lightcoral", "peru"];
const btn = document.querySelector(".btn");
const color = document.querySelector(".color");


btn.addEventListener("click", function () {
    const randomNum = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNum];
    color.textContent = colors[randomNum];
});


function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}