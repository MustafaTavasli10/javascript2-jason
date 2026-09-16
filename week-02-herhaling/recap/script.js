let input = document.getElementById('input');
let output = document.getElementById('output');
let button = document.getElementById('btn');

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let buttonCalc = document.getElementById('btn-calc');
let outputCalc = document.getElementById('output-calc');

buttonCalc.addEventListener("click", function(){
outputCalc.textContent = calculator(num1.value, num2.value);
num1.value = "";
num2.value = "";
});

function calculator(a, b){
    return a * b;
}

button.addEventListener('click', function(){
    button.style.backgroundColor = "green";
    output.textContent = input.value;
    output.style.color = "green";
    input.value = "";
})

