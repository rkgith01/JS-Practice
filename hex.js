const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Step 1 Target the HTML elements
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// Step 2 create event listners based on those elements

btn.addEventListener("click", function () {
    //Step 3 Create a var to use in a for loop 
    // loop over the hex [ Arrays ], 
    let hexColor = "#";
    for (let i = 0; i < 6; i++){
        // # = # + hex[randomNmber]
        hexColor += hex[toGetRandomNumber()];
        // to check loop values 
        // console.log(hexColor);
    }
  
    // Pointing back the new property to the HTML elements 
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});


// Step 4 create randomNumber function to use in the loop
function toGetRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

// to check function values
// console.log(toGetRandomNumber());
