let inputValor = document.querySelector('#inputValor');
let btVerificar = document.querySelector('#btVerificar');
let resultadoFinal = document.querySelector('#resultadoFinal');

function calculaValor()
{
    let valor = Number(inputValor.value);

    if(valor % 2 == 0)
    {
        resultadoFinal.textContent = 'O Número ' + valor + ' é Par'
    }
    else
    {
        resultadoFinal.textContent = 'O Número ' + valor + ' é Impar'
    }
}

btVerificar.onclick = function()
{
    calculaValor()
}