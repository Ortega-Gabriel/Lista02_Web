let inputNotaFinal = document.querySelector('#inputNotaFinal');
let btVerificar = document.querySelector('#btVerificar');
let situacaoAluno = document.querySelector('#situacaoAluno');

function verificarNota()
{
    let notaFinal = Number(inputNotaFinal.value);
    clearInterval(situacaoAluno)

    if(notaFinal < 6 && notaFinal > 4)
    {
        situacaoAluno.textContent = 'Situação: Precisa Fazer Prova Substitutiva'
    }
    else if(notaFinal >= 6)
    {
        situacaoAluno.textContent = 'Situação: Aprovado'
    }
    else
    {
        situacaoAluno.textContent = 'Situação: Reprovado'
    }
}
btVerificar.onclick = function()
{
    verificarNota()
}