var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){

    console.log("Buscando Pacientes...")

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes"); //abrindo a requisição

    xhr.addEventListener("load", function(){ //escutando quando a requisição é carregada

        var erroAjax = document.querySelector("#erro-ajax");

        if( xhr.status == 200){ //vendo se há erro 404 ou se está tudo certo

            erroAjax.classList.add("invisivel");

            var resposta = xhr.responseText; //vai resgatar o texto da API em String

            var pacientes = JSON.parse(resposta); //vai transformar os elementos JSON em objeto JavaScript

            pacientes.forEach( function(paciente){ //fazendo um loop nos pacientes do JSON e colocando uma função com objeto paciente
            adicionaPacienteNaTabela(paciente); //pegando a função adiciona paciente na tabela
        });
        }else{
            console.log( xhr.status);
            console.log( xhr.responseText);
            
            erroAjax.classList.remove("invisivel");
        }
        
    });

    xhr.send(); //envia a requisição
});