let inputCotacao = document.querySelector('#inputCotacao');
let dolar1 = document.querySelector('#dolar1');
let dolar2 = document.querySelector('#dolar2');
let dolar5 = document.querySelector('#dolar5');
let dolar10 = document.querySelector('#dolar10');
let btCalcular = document.querySelector('#btCalcular');

function calcularCotacao()
{
    clearInterval(dolar1)
    clearInterval(dolar2)
    clearInterval(dolar5)
    clearInterval(dolar10)

    let valor1 = Number(inputCotacao.value);
    valor1 = valor1 + (valor1 * 0.01);
    dolar1.textContent = 'Valor do Dólar com Aumento de 1%: ' + valor1;

    let valor2 = Number(inputCotacao.value);
    valor2 = valor2 + (valor2 * 0.02);
    dolar2.textContent = 'Valor do Dólar com Aumento de 2%: ' + valor2;

    let valor5 = Number(inputCotacao.value);
    valor5 = valor5 + (valor5 * 0.05);
    dolar5.textContent = 'Valor do Dólar com Aumento de 5%: ' + valor5;

    let valor10 = Number(inputCotacao.value);
    valor10 = valor10 + (valor10 * 0.10);
    dolar10.textContent = 'Valor do Dólar com Aumento de 10%: ' + valor10;

}

btCalcular.onclick = function()
{
    calcularCotacao()
}