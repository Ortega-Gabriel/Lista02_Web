let primeiroValor = document.querySelector('#primeiroValor');
let segundoValor = document.querySelector('#segundoValor');
let finalSoma = document.querySelector('#finalSoma');
let finalSubtracao = document.querySelector('#finalSubtracao');
let finalMultiplicacao = document.querySelector('#finalMultiplicacao');
let finalDivisao = document.querySelector('#finalDivisao');
let btCalcular = document.querySelector('#btCalcular');

function calcularValores()
{
    clearInterval(finalSoma)
    clearInterval(finalSubtracao)
    clearInterval(finalMultiplicacao)
    clearInterval(finalDivisao)
    
    let valor1 = Number(primeiroValor.value);
    let valor2 = Number(segundoValor.value);

    let soma = valor1 + valor2;
    let subtracao = valor1 - valor2;
    let multiplicacao = valor1 * valor2;
    let divisao = valor1 / valor2;

    finalSoma.textContent = 'Soma: ' + soma;
    finalSubtracao.textContent = 'Subtração: ' + subtracao;
    finalMultiplicacao.textContent = 'Multiplicação: ' + multiplicacao;
    finalDivisao.textContent = 'Divisão: ' + divisao;



}
btCalcular.onclick = function()
{
    calcularValores()
}