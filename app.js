//initiate the count to 0
//set the initial count
let count = 0;

// set the value and buttons 
// 
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// console.log(btns)
// Step 2 loop thorugh each btn 
// add am event listener for each btn 
// on click execute function with parameter e
// e stands for event object
// style points to event object with property of currentTarget as classList

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        // console.log();
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green"
        }
        if (count < 0) {
            value.style.color = "red"
        }
        if (count === 0) {
            value.style.color = "black"
        }
        value.textContent = count;
    });
});