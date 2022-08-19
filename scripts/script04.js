let inputSabor1 = document.querySelector('#inputSabor1');
let inputSabor2 = document.querySelector('#inputSabor2');
let inputSabor3 = document.querySelector('#inputSabor3');
let inputSabor4 = document.querySelector('#inputSabor4');
let btCalcular = document.querySelector('#btCalcular');
let inputRefri = document.querySelector('#inputRefri');
let finalSabores = document.querySelector('#finalSabores');
let finalRefri = document.querySelector('#finalRefri');
let finalValor = document.querySelector('#finalValor');

function calcularPizzas()
{
    clearInterval(finalRefri)
    clearInterval(finalSabores)
    clearInterval(finalValor)
    
    let sabor1 = String(inputSabor1.value);
    let sabor2 = String(inputSabor2.value);
    let sabor3 = String(inputSabor3.value);
    let sabor4 = String(inputSabor4.value);
    let refri = Number(inputRefri.value);
    let total = 57 + (refri * 7);

    finalSabores.textContent = 'Sabores Escolhidos: ' + sabor1 + ', ' + sabor2 + ', ' + sabor3 + ' e ' + sabor4 + '.';
    
    
    finalRefri.textContent = 'Quantidade de Refrigerantes: ' + refri;

    
    finalValor.textContent = 'Total a Pagar:  R$ ' + total;
    
}

btCalcular.onclick = function()
{
    calcularPizzas()
}