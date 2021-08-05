//Calculando IMC//

var pacientes = document.querySelectorAll(".paciente"); //buscando o tr de todos os pacientes

for(i = 0; i < pacientes.length; i++){ //estrutura do loop em for //length torna todos os pacientes em números

    var paciente = pacientes[i]; //Irá buscar todos os pacientes dentro do "for"

    var tdPeso = paciente.querySelector(".info-peso"); //buscando o td de peso
    var peso = tdPeso.textContent; //buscando valor do peso

    var tdAltura = paciente.querySelector(".info-altura"); //buscando o td da altura
    var altura = tdAltura.textContent; //buscando valor da altura

    var tdImc = paciente.querySelector(".info-imc"); //buscando a td IMC na tabela

    var pesoEhValido = true;
    var alturaEhValida = true;

    if(peso <= 0 || peso >= 400){ //Se peso for menor/igual a 0 ou maior/igual a 400, a peso será inválida.
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 3.00){ //Se altura for menor/igual a 0 ou maior/igual a 3.00, a altura será inválida.
        alturaEhValido = false;
        tdImc.textContent = "Altura inválido!"; //o texto do IMC dará como Altura inválida.
        paciente.classList.add("paciente-invalido"); //Adicionando um estilo css na classe paciente.
    }

    if(alturaEhValida && pesoEhValido){ //Se altura for válida e o peso for válido, o cálculo do IMC será feito.
        
        var imc = peso/(altura*altura); //calculando imc
        tdImc.textContent = imc.toFixed(2); //colocando texto/resultado do cálculo imc na tabela //toFixed tornará o valor em 2 casas decimais

    }
}


//Adicionando Novo Paciente//

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", (event)=>{

    event.preventDefault(); //Desativar recarregamento de página do input

    var form = document.querySelector("#form-adiciona"); //pegando o campo form do html

    var nome = form.nome.value //pegar o valor-value de cada form
    var peso = form.peso.value; //pegar o valor-value de cada form
    var altura = form.altura.value; //pegar o valor-value de cada form
    var gordura = form.gordura.value; //pegar o valor-value de cada form

    var pacienteTr = document.createElement("tr"); //criando uma tr de um novo paciente
    var tdNome = document.createElement("td"); //criando uma td para o novo paciente
    var tdPeso = document.createElement("td");
    var tdAltura = document.createElement("td");
    var tdGordura = document.createElement("td");
    var tdImc = document.createElement("td");

    tdNome.textContent = nome; //alterando conteúdo do valor-value do novo td
    tdPeso.textContent = peso;
    tdAltura.textContent = altura;
    tdGordura.textContent = gordura;

    pacienteTr.appendChild(tdNome); //adicionando o td dentro do tr - adicioando o filho dentro do pai
    pacienteTr.appendChild(tdPeso);
    pacienteTr.appendChild(tdAltura);
    pacienteTr.appendChild(tdGordura);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr); //adicionando o paciente tr dentro da tabela
});