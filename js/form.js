var botaoAdicionar = document.querySelector("#adicionar-paciente");
    
botaoAdicionar.addEventListener("click", function (event) { // o parametro para a função é previnir o comportamento padrão da página
    
    event.preventDefault(); // evitamos o comportamento padrão da página, que no caso é que a página recarregue e limpe o formulário

    var form = document.querySelector("#form-adiciona"); // Pegamos os valores do formulário: nome, altura, peso, gordura

    var paciente = obtemPacienteDoFormulario(form); // Extraimos informações do paciente do form
   
    var erros = validaPaciente(paciente); // Se houver erros, mostrará qual é o erro
 
    if(erros.length > 0){ // se tiver algum erro ele apresenta a mensagem
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset(); // reseta o formulário
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = ""; // reseta as mensagens quando o paciente for válido
}) 

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente); // Vamos montar a ficha do paciente, ou seja, vamos montar a Tr com as Td's
    var tabela = document.querySelector("#tabela-pacientes"); // Vamos adicionar uma ficha a tabela. No caso vamos adicioanr um Tr dentro da tabela pacientes do HTML
    tabela.appendChild(pacienteTr); // Adicionamos uma nova ficha na tabela. A tabela é o elemento pai e a Tr é o elemento filho.
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""; // limpa a mensagem de erro

    erros.forEach(function(erro){
        var li = document.createElement("li"); //adicionamos um li contendo a mensagem de erro dentro de uma ul
        li.textContent = erro;
        ul.appendChild(li); // adiciona uma li
    });
}

function obtemPacienteDoFormulario(form){
                                // Abaixo criamos um objeto que retornara o valores indicados 
    var paciente = { 
        nome: form.nome.value, // pegamos o valor digitado no formulário na página usando o nome do input e usamos o value para obter o valor digitado
        peso: form.peso.value, 
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente; // finaliza a execução de uma função e especifica os valores que devem ser retonados para onde a função foi chamada.
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr"); // Criamos um novo elemento, no caso vamos adicionar a ficha de um paciente no document (que é o html)
    pacienteTr.classList.add("paciente"); // vamos adicionar uma classe a nova Tr que vai ser criada 

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")); // Vamos adicionar as Td's dentro da Tr. A Tr é o elemento pai e as Td's são os elementos filhos
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso")); // montar a td utilizando a variavel anteriomente declarada para adicionar os dados a tabela e junto adicionar o nome da classe
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild( montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td"); // O elemento que vai ser criado vai pegar o valor indicado na variavel 
    td.textContent = dado; // O conteúdo exibido vai ser o valor adicionado na nossa variavel nome 
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){
    
    var erros = []; // criamos um array de erros 

    if(paciente.nome.length == 0){
        erros.push("Nome não pode ser em branco!"); // adiciona uma mensagem de erro 
    }

    if(paciente.gordura.length == 0){
        erros.push("Gordura não pode ser em branco");
    }

    if(paciente.peso.length == 0){
        erros.push("Peso não pode ser em branco!");
    }

    if(paciente.altura.length == 0){
        erros.push("Altura não pode ser em branco!");
    }
    
    if(!validaPeso(paciente.peso)){
        erros.push("Peso inválido!");
    }
        
    if(!validaAltura(paciente.altura)){
        erros.push("Altura inválida!");
    }   

    return erros;
}
