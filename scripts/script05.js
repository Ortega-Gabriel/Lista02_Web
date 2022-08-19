let inputPrimeiroNome = document.querySelector('#inputPrimeiroNome');
let inputPrimeiraIdade = document.querySelector('#inputPrimeiraIdade');
let inputSegundoNome = document.querySelector('#inputSegundoNome');
let inputSegundaIdade = document.querySelector('#inputSegundaIdade');
let inputTerceiroNome = document.querySelector('#inputTerceiroNome');
let inputTerceiraIdade = document.querySelector('#inputTerceiraIdade');
let btCalcular = document.querySelector('#btCalcular');
let maisVelha = document.querySelector('#maisVelha');
let doMeio = document.querySelector('#doMeio');
let maisNova = document.querySelector('#maisNova');

function calcularIdades()
{
    let primeiroNome = String(inputPrimeiroNome.value);
    let segundoNome = String(inputSegundoNome.value);
    let terceiroNome = String(inputTerceiroNome.value);
    let primeiraIdade = Number(inputPrimeiraIdade.value);
    let segundaIdade = Number(inputSegundaIdade.value);
    let terceiraIdade = Number(inputTerceiraIdade.value);
    let nomeMaior
    let nomeMeio
    let nomeMenor
    let idadeMaior
    let idadeMeio
    let idadeMenor

    primeiraIdade = 2022 - primeiraIdade
    segundaIdade = 2022 - segundaIdade
    terceiraIdade = 2022 - terceiraIdade

    if(primeiraIdade < segundaIdade)
    {
        if(primeiraIdade < terceiraIdade)
        {
        idadeMenor = primeiraIdade;
        nomeMenor = primeiroNome;
        }
        else
        {
        idadeMenor = terceiraIdade;
        nomeMenor = terceiroNome;
        }
        
    }
    else
    {
        if(segundaIdade < terceiraIdade)
        {
            idadeMenor = segundaIdade;
            nomeMenor = segundoNome;
        }
        else
        {
            idadeMenor = terceiraIdade;
            nomeMenor = terceiroNome;
        }
    }
    if(primeiraIdade > segundaIdade)
    {
        if(primeiraIdade > terceiraIdade)
        {
            idadeMaior = primeiraIdade;
            nomeMaior = primeiroNome;
        }
        else
        {
            idadeMaior = terceiraIdade;
            nomeMaior = terceiroNome;
        }
    }
    else
    {
        if(segundaIdade > terceiraIdade)
        {
            idadeMaior = segundaIdade;
            nomeMaior = segundoNome;
        }
        else
        {
            idadeMaior = terceiraIdade;
            nomeMaior = terceiroNome;
        }
    }
    if(primeiraIdade > segundaIdade)
    {
        if(primeiraIdade < terceiraIdade)
        {
            idadeMeio = primeiraIdade;
            nomeMeio = primeiroNome;
        }
    }
    else if(segundaIdade > primeiraIdade)
    {
        if(segundaIdade < terceiraIdade)
        {
            idadeMeio = segundaIdade;
            nomeMeio = segundoNome;
        }
    }
    else
    {
        if(terceiraIdade > primeiraIdade)
        {
            if(terceiraIdade < segundaIdade)
            {
                idadeMeio = terceiraIdade;
                nomeMeio = terceiroNome;
            }
        }
    }


    maisVelha.textContent = 'A Pessoa Mais Velha é: '+ nomeMaior + ' com '+ idadeMaior + ' anos';
    doMeio.textContent = 'A Pessoa do Meio é: '+ nomeMeio + ' com '+ idadeMeio + ' anos';
    maisNova.textContent = 'A Pessoa Mais Nova é: '+ nomeMenor + ' com '+ idadeMenor + ' anos';
}

btCalcular.onclick = function()
{
    calcularIdades()
}