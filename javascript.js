function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function operate(a, b, op) {
    switch(op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
    }
}

function evaluate() {
    if(firstvalue && operation && display.innerHTML.split(" ")[2]) {
    secondvalue = display.innerHTML.split(" ")[2];
    firstvalue = operate(parseFloat(firstvalue), parseFloat(secondvalue), operation);
    secondvalue = "";
    operation = "";
    display.innerHTML = firstvalue;
    }
}

let displayValue = "";
let firstvalue = "";
let secondvalue = "";
let operation = "";
let display = document.querySelector(".display");

document.getElementById("clear").addEventListener('click', () => {
    display.innerHTML = "";
    firstvalue = "";
    secondvalue = "";
    operation = "";
})

document.getElementById("backspace").addEventListener('click', () => {
    if(!isNaN(display.innerHTML.slice(-1)) && display.innerHTML.slice(-1) != " ")
    display.innerHTML = display.innerHTML.slice(0, -1);
})

document.querySelectorAll(".digit").forEach(digit => {
    digit.addEventListener('click', e => {
        if(e.target.innerHTML !== ".") {
        display.innerHTML += e.target.innerHTML;
        }
        else if((!operation && !firstvalue.includes(".")) || operation && !display.innerHTML.split(" ")[2].includes(".")) {
                display.innerHTML += e.target.innerHTML;
        }
    })
});

document.querySelectorAll(".operand").forEach(operand => {
    operand.addEventListener('click', e =>{
        if(!operation && display.innerHTML) {
        firstvalue = display.innerHTML;
        operation = operand.innerHTML;
        display.innerHTML += " " + operand.innerHTML + " ";
        }
        else if(display.innerHTML.split(" ")[2]){
            evaluate();
            operation = operand.innerHTML;
            display.innerHTML += " " + operand.innerHTML + " ";
        }
    })
})

document.getElementById("equal").addEventListener('click', evaluate);
