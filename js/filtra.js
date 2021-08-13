var campoFiltro = document.querySelector("#filtrar-tabela"); //está pegando o input filtrar-tabela

campoFiltro.addEventListener("input", function(){ //está adicionando um evento "input" ao campo filtro e uma função vazia

    var pacientes = document.querySelectorAll(".paciente"); //dentro da função vai pegar os pacientes da tabela

    if(this.value.length > 0){ //se o valor do campo filtro for maior que zero vai executar a seguinde ordem...
        for(var i = 0; i < pacientes.length; i++){ //um for loop onde será selecionados os pacientes do form
            var paciente = pacientes[i]; //fazendo uma interação dos pacientes
            var tdNome = paciente.querySelector(".info-nome"); //selecionando a classe info-nome
            var nome = tdNome.textContent; //selecionando o texto da classe info-nome
            var expresao = new RegExp(this.value,"i"); //criando uma expressão regular... pegando o valor do campo filtro e colocando o campo em ordem maiúscula ou minúscula
            if(!expresao.test(nome)){ //se a expressão não for test do nome do paciente
                paciente.classList.add("invisivel"); //vai adicionar uma classe invisivel (display:none)
            }else{ //se não, vai remover a classe invisivel
                paciente.classList.remove("invisivel");
            }
        }

    }else{ //se o valor do campo filtro não for maior que zero, vai executar a seguinte ordem...
        for (var i = 0; i < pacientes.length; i++){ //um for loop onde será selecionados os pacientes do form
            var paciente = pacientes[i]; //...
            paciente.classList.remove("invisivel"); //... irá remover a classe invisivel
        }
    }

});