const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");


btn.addEventListener("click", function () {
    //get random numnber between 0-3
    const randomNumber = toGetRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});


// How to get a Random Number 

function toGetRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

// Math.floor  fucntion round downs the value to single integer
// Math.random  fucntion round genrates random values in decimal but never 
// single integer values 