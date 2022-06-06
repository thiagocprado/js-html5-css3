var botaoAdicionar = document.querySelector("#buscar-pacientes");
    
botaoAdicionar = addEventListener("click", function(){
    
    xhr = new XMLHttpRequest(); // vamos pegar o conteudo de uma pagina externa, mas antes é necessário algumas funções 
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); // vamos abrir a página
    xhr.addEventListener("load", function(){ // carrega os dados dá página para depois enviar os dados para nós
    var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText; // mostra os dados extraidos da outra página em um texto
            var pacientes = JSON.parse(resposta); // devolve o conteudo em forma de array (em formato Javascript)
            
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente); // adiciona os pacientes buscados na tabela
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
    });
    xhr.send(); // abrimos a página  
})   

// Ajax modo de buscar algo assincrono, ou seja, sem atrapalhar o fluxo da página principal

