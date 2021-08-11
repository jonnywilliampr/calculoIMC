//Calculando IMC//

var pacientes = document.querySelectorAll(".paciente"); //buscando o tr de todos os pacientes

for(i = 0; i < pacientes.length; i++){ //estrutura do loop em for //length torna todos os pacientes em números

    var paciente = pacientes[i]; //Irá buscar todos os pacientes dentro do "for"

    var tdPeso = paciente.querySelector(".info-peso"); //buscando o td de peso
    var peso = tdPeso.textContent; //buscando valor do peso

    var tdAltura = paciente.querySelector(".info-altura"); //buscando o td da altura
    var altura = tdAltura.textContent; //buscando valor da altura

    var tdImc = paciente.querySelector(".info-imc"); //buscando a td IMC na tabela

    var pesoEhValido = validaPeso(peso); // true ou false do peso
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){ //Se peso for menor/igual a 0 ou maior/igual a 400, a peso será inválida.
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaEhValida){ //Se altura for menor/igual a 0 ou maior/igual a 3.00, a altura será inválida.
        alturaEhValido = false;
        tdImc.textContent = "Altura inválido!"; //o texto do IMC dará como Altura inválida.
        paciente.classList.add("paciente-invalido"); //Adicionando um estilo css na classe paciente.
    }

    if(alturaEhValida && pesoEhValido){ //Se altura for válida e o peso for válido, o cálculo do IMC será feito.
        
        var imc = calculaImc(peso,altura); //calculando imc
        tdImc.textContent = imc; //colocando texto/resultado do cálculo imc na tabela //toFixed tornará o valor em 2 casas decimais
        
    }
}

function validaPeso(peso){

    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }

}


function validaAltura(altura){

    if(altura >= 0 && altura <= 3.00){
        return true;
    }else{
        return false;
    }

}

function calculaImc(peso,altura){ //criando uma função para calcular o imc
    var imc = 0;

    imc = peso/(altura*altura);

    return imc.toFixed(2);
}

