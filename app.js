//using selectors inside the element

// Method 1 
// this method will auto close the opened item when clicking on the new one 

const questions = document.querySelectorAll(".question")

questions.forEach(function (parameter) {
    // console.log(parameter)
    const btn = parameter.querySelector(".question-btn")
    // console.log(btn)
    btn.addEventListener("click", function () {
        questions.forEach(function (item) {
            // console.log(item)
            if (item !== parameter) {
                item.classList.remove("show-text")
            }
        })
        parameter.classList.toggle("show-text")
        console.log(btn)
    })
})






// Method 2 traversing the dom
// const btns = document.querySelectorAll(".question-btn")

// btns.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//         const questions = e.currentTarget.parentElement.parentElement
//         console.log(e.currentTarget.parentElement.parentElement)
//         questions.classList.toggle("show-text")
//     })
// })