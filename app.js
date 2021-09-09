// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector(".date")
date.innerHTML = new Date().getFullYear()
// ********** close links ************

const navToggle = document.querySelector(".nav-toggle")
const linksContainer = document.querySelector(".links-container")
const links = document.querySelector(".links")

navToggle.addEventListener("click", function () {
    navTog()
})

function navTog() {
    // linksContainer.classList.toggle("show-links")
    const containerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height

    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`
    } else {
        linksContainer.style.height = 0
    }
}

let navbar = document.getElementById("nav")
const toplink = document.querySelector(".top-link")


// ********** fixed navbar ************
window.addEventListener("scroll", function () {
    fixedNavBar()
})

function fixedNavBar() {
    const scrollHeight = window.pageYOffset
    // console.log(navHeight)
    const navHeight = navbar.getBoundingClientRect().height
    
    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav')
    } else {
        navbar.classList.remove('fixed-nav')
    }
    
    if (scrollHeight > 500) {
        // console.log(navHeight)
        toplink.classList.add("show-link")
    } else {
        toplink.classList.remove("show-link")
    }
}
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link")

// forEach function 
scrollLinks.forEach(function (link) {
    // for each link add an event and listen for a click on event object e 
    link.addEventListener("click", function (e) {
        // for e prevent default 
        e.preventDefault()
        //to navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1)
        console.log(id)
        const element = document.getElementById(id)
        // console.log(position)
        // //calculate the height
        const navHeight = navbar.getBoundingClientRect().height
        const containerHeight = linksContainer.getBoundingClientRect().height
        const fixdNav = navbar.classList.contains("fixed-nav")
        let position = element.offsetTop - navHeight
        if (!fixdNav) {
            position -= navHeight
        }
        if (navHeight > 82) {
            position += containerHeight
        }

        window.scrollTo({
            left: 0,
            top: position,
        })
        linksContainer.style.height = 0
    })
})
