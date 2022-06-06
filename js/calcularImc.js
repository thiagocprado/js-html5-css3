// DOM - Representação do mundo HTML dentro do mundo JS
// utilizamos a tag document para fazer a ponte entre o HTML e o JS


var titulo = document.querySelector(".titulo"); // Busca e seleciona no documento a tag indicada
titulo.textContent = "Aparecida Nutricionista"; // Seleciona o conteúdo da tag indicada e substitui por outro indicado.

var pacientes = document.querySelectorAll(".paciente"); // Buscamos por todas as tag's paciente (buscamos os pacientes)

for (var i = 0; i < pacientes.length; i++) { // A propriedade length mostra o tamanho do array pacientes (valores dentro de pacientes), no caso lentgh vai ser o número de classes paciente que teremos

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso"); // Dentro da ficha do paciente vamos buscar pelo seu peso
    var peso = tdPeso.textContent; // Pegamos o peso do paciente 

    var tdAltura = paciente.querySelector(".info-altura"); // Dentro da ficha do paciente vamos buscar pela sua altura
    var altura = tdAltura.textContent; // Pegamos a altura do paciente

    var tdImc = paciente.querySelector(".info-imc"); // Dentro da ficha do paciente vamos buscar pelo seu imc

    var pesovalido = validaPeso(peso) // Verificar se o peso é válido   true ou false
    var alturavalida = validaAltura(altura) // Verificar se a altura é válida

    if (!pesovalido) { // exclamação é a negação do valor passado, no caso se ele se encaixar, o peso será inválido
        console.log("Peso Inválido!") // Mensagem no console
        tdImc.textContent = "Peso Inválido!"; // Mensagem na tabela 
        pesovalido = false; // Atribuimos false para que o cálculo não seja executado caso a condição não seja satisfeita
        paciente.classList.add("paciente-invalido"); // Adiciona uma classe 
    }

    if (!alturavalida) {
        console.log("Altura Inválida!") // Mensagem no console
        tdImc.textContent = "Altura Inválida!";
        alturavalida = false;
        paciente.classList.add("paciente-invalido");
    }

    if (alturavalida && pesovalido) {
        var imc = peso / (altura * altura); // Cálculo do IMC
        tdImc.textContent = imc.toFixed(2); // Vamos substituir o valor nativo pelo valor calculado
    }
}

function validaPeso(peso){  // Função que vai validar se o peso é válido
    if (peso >= 0 && peso <= 600){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if (altura >= 0 && altura <= 3){
        return true;
    } else{
        return false;
    }
}

function calculaImc(peso,altura){
    var imc = 0;

    imc = peso / (altura*altura);

    return imc.toFixed(2);
}


/*
function mostraMensagem(){  // function - nome da função - parametros da função
    console.log("Olá, eu fui clicado!")
}

titulo.addEventListener("click", mostraMensagem); // Adicionamos um evento, no caso, ao clicar sobre o titulo ela nos devolve a função criada
essa função também é chamda de função nomeada, pois declaramos uma variavel para a função antes

titulo.addEventListener("click", function(){console.log("isto é uma função anonima, só acontece quando clicada no botão")});
não adicionamos uma váriavel para essa função, declaramos ela direto 


*/



