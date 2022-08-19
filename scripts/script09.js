let inputAlunos = document.querySelector('#inputAlunos');
let inputTurmas = document.querySelector('#inputTurmas');
let btCalcular = document.querySelector('#btCalcular');
let quantAlunos = document.querySelector('#quantAlunos');
let quantSemTurma = document.querySelector('#quantSemTurma');

function calcularTurmas()
{
    let alunosQuant = Number(inputAlunos.value);
    let turmasQuant = Number(inputTurmas.value);

    let alunosTurma = alunosQuant / turmasQuant
    let alunosInteiro = parseInt(alunosTurma)

    quantAlunos.textContent = 'Quantidade de Alunos por Turma: ' + alunosInteiro;
    
    let restoAlunos = alunosQuant % alunosInteiro

    quantSemTurma.textContent = 'Quantidade de Alunos sem Turma: '+ restoAlunos;

}
btCalcular.onclick = function()
{
    calcularTurmas()
}