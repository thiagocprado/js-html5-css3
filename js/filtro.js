var campoFiltro = document.querySelector("#filtrar-tabela"); // vamos pegar o que for escrito no campo de filtro

campoFiltro.addEventListener("input", function(){ // a função input se refere ao que foi digitado dentro do campo de filtro, ou seja, analisa os caracteres
    var pacientes = document.querySelectorAll(".paciente"); // selecionamos os pacientes
    
    if(this.value.length > 0){
        for(var i=0; i < pacientes.length; i++){ // pegamos o array paciente
            var paciente = pacientes[i]; // vamos selecionar apenas paciente chamado 
            var tdNome = paciente.querySelector(".info-nome"); // buscamos pelo nome em especifo do paciente 
            var nome = tdNome.textContent; // extrair o conteudo da TD info-nome, ou seja, o nome da pessoa
            var expressao = new RegExp(this.value,"i"); // (expressão regular) será usado para fazer um filtro utilizando letra por letra. Letra minuscula.
            if(!expressao.test(nome)){ // Vai testar se há alguma semelhança com o nome digitado
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }
    }else{
        for(var i=0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});