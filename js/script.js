var paciente = document.querySelector("#primeiro-paciente"); //buscando o tr

var tdPeso = paciente.querySelector(".info-peso"); //buscando o td de peso
var peso = tdPeso.textContent; //buscando valor do peso

var tdAltura = paciente.querySelector(".info-altura"); //buscando o td da altura
var altura = tdAltura.textContent; //buscando valor da altura

var tdImc = paciente.querySelector(".info-imc");


var imc = peso/(altura*altura); //calculando imc

tdImc.textContent = imc;
 