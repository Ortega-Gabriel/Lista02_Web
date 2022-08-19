let inputPessoas = document.querySelector('#inputPessoas');
let ovosFinal = document.querySelector('#ovosFinal');
let queijoFinal = document.querySelector('#queijoFinal');
let btCalcular = document.querySelector('#btCalcular');

function calcularQuantidade()
{
    clearInterval(ovosFinal)
    clearInterval(queijoFinal)

    let quantOvos = Number(inputPessoas.value);
    quantOvos = 2 * quantOvos;
    ovosFinal.textContent = 'Total de Ovos Necessários: ' + quantOvos;

    let quantQueijo = Number(inputPessoas.value);
    quantQueijo = 50 * quantQueijo;
    queijoFinal.textContent  = 'Total de Gramas de Queijo Necessárias: ' + quantQueijo;
}

btCalcular.onclick = function()
{
    calcularQuantidade()
}