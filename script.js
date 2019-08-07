const num1El = document.getElementById('entrada-1');
const num2El = document.getElementById('entrada-2');
const resultEl = document.getElementById('resultado');

const btnSoma = document.getElementById('btn-soma');
const btnSub = document.getElementById('btn-subtracao');
const btnMult = document.getElementById('btn-multiplicacao');
const btnDiv = document.getElementById('btn-divisao');
const btnClear = document.getElementById('btn-clear');

let resultado = 0;

btnSoma.addEventListener('click', () => {
    resultado = Number(num1El.value) + Number(num2El.value); 
    resultEl.innerText = resultado;
})

btnSub.addEventListener('click', () => {
    resultado = Number(num1El.value) - Number(num2El.value); 
    resultEl.innerText = resultado;
})

btnMult.addEventListener('click', () => {
    resultado = Number(num1El.value) * Number(num2El.value); 
    resultEl.innerText = resultado;
})

btnDiv.addEventListener('click', () => {
    resultado = Number(num1El.value) / Number(num2El.value); 
    resultEl.innerText = resultado;
})

btnClear.addEventListener('click', () => {
    num1El.value = "";
    num2El.value = "";
    resultEl.innerText = "";
})

