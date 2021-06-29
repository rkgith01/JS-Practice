// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navTog = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navTog.addEventListener("click", function () {
    // console.log(links.classList);
    // console.log(links.classList.contains("show-list"));
    console.log(links.classList.contains("links"));
    //Method 1 
    if (links.classList.contains("show-links")) {
        links.classList.remove("show-links");
    } else {
        links.classList.add("show-links");
    }
    // Method 2 
    // links.classList.toggle("show-links");
})