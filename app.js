const result = document.querySelector('#number');
const input = document.querySelector('#input');
const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');

let display = result.innerText;
let amount = input.value;
// console.log(typeof display)
// console.log(typeof amount)

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)

function add() {
    // display += amount
    result.innerText = parseInt(display) + parseInt(amount)
    display = result.innerText
    if (parseInt(display) >= 0) {
        display.style.color = black
    }
}

function subtract() {
    // return display -= amount
    result.innerText = parseInt(display) - parseInt(amount)
    display = result.innerText
    if (parseInt(display) < 0) {
        display.style.color = red
    }
}