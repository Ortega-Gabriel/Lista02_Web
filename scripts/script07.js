let inputPrimeiro = document.querySelector('#inputPrimeiro');
let inputSegundo = document.querySelector('#inputSegundo');
let btCalcular = document.querySelector('#btCalcular');
let resultadoNumero = document.querySelector('#resultadoNumero');

function calcularValor()
{
    let primeiroValor = Number(inputPrimeiro.value);
    let segundoValor = Number(inputSegundo.value);

    if(primeiroValor > segundoValor)
    {
        resultadoNumero.textContent = 'O Primeiro número é Maior que o Segundo número'
    }
    else if(primeiroValor < segundoValor)
    {
        resultadoNumero.textContent = 'O Primeiro número é Menor que o Segundo número'
    }
    else
    {
        resultadoNumero.textContent = 'O Primeiro número é Igual ao Segundo número'
    }
}
btCalcular.onclick = function()
{
    calcularValor()
}