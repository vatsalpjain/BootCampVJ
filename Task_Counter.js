let count = document.querySelector("#count")
let increment = document.querySelector("#increment")
let decrement = document.querySelector("#decrement")
let reset = document.querySelector("#reset")

increment.addEventListener('click', () => {
    count.innerText = parseInt(count.innerText) + 1
})
decrement.addEventListener('click', () => {
    count.innerText = parseInt(count.innerText) - 1
})
reset.addEventListener('click', () => {
    count.innerText = parseInt(0);
})