let inputMeta = document.querySelector('#inputMeta');
let inputMetaMin = document.querySelector('#inputMetaMin');
let inputValorVendido = document.querySelector('#inputValorVendido');
let btCalcular = document.querySelector('#btCalcular');
let finalMeta = document.querySelector('#finalMeta');
let percentualMeta = document.querySelector('#percentualMeta');
let percentualMetaMin = document.querySelector('#percentualMetaMin');

function calcularMeta()
{
    let valorMeta = Number(inputMeta.value);
    let valorMetaMin = Number(inputMetaMin.value);
    let valorVendido = Number(inputValorVendido.value);
    let perMeta = (valorVendido / valorMeta) * 100
    let perMetaMin = (valorVendido / valorMetaMin) * 100
    perMeta = Math.round(perMeta);
    perMetaMin = Math.round(perMetaMin);

    if(valorVendido >= valorMeta)
    {
        finalMeta.textContent = 'A Meta Total Foi Atingida';
        percentualMeta.textContent = 'A Porcentagem Atingida da Meta Total Foi: '+ perMeta +'%';
        percentualMetaMin.textContent = 'A Porcentagem Atingida da Meta Mínima Foi: '+ perMetaMin +'%';
    }
    else if(valorVendido >= valorMetaMin && valorVendido < valorMeta)
    {
        finalMeta.textContent = 'A Meta Mínima Foi Atingida'
        percentualMeta.textContent = 'A Porcentagem Atingida da Meta Total Foi: '+ perMeta +'%';
        percentualMetaMin.textContent = 'A Porcentagem Atingida da Meta Mínima Foi: '+ perMetaMin +'%';
    }
    else
    {
        finalMeta.textContent = 'A Meta Não foi Atingida'
        percentualMeta.textContent = 'A Porcentagem Atingida da Meta Total Foi: '+ perMeta +'%';
        percentualMetaMin.textContent = 'A Porcentagem Atingida da Meta Mínima Foi: '+ perMetaMin +'%';
    }
}
btCalcular.onclick = function()
{
    calcularMeta()
}