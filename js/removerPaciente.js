var tabela = document.querySelector("table"); // vamos selecionar toda a tabela ao invés de selecionar paciente por paciente
// essa prática consiste em utilizar o elemento pai como escutador de evento, pois indenependente da tag clicada o pai dela vai ouvir o evento
// assim diminuimos o nosso código e facilita para adionar algum tipo de evento especifico 

tabela.addEventListener("dblclick", function(event){ // ao darmos dois cliques, acionaremos a função declarada.
   event.target.parentNode.classList.add("fadeOut"); // adicionamos uma classe que faz um estilo de desaparecer
                               
    setTimeout(function(){ // definimos um tempo para o que o browser demore para continuar a leitura do código
        event.target.parentNode.remove(); //evento declarado na função, alvo do evento, usamos parentNode para selecionar a tag "pai", no caso TR = paciente = remover
    },500); // o tempo é definido em milisegundos 
   
   
    //event.target.remove(); // colocamos o target para sabermos quem foi clicado, e o evento é de remover o paciente 
                            //porém aqui é eliminado apenas o td, mas queremos remover todo o tr

});
 
/*  
  var pacientes = document.querySelectorAll(".paciente"); // selecionamos os pacientes 

pacientes.forEach(function (paciente) {
    paciente.addEventListener("dblclick", function () { // evento de duplo clique para os pacientes
        this.remove(); // o this está atrelado ao dono da função, no caso paciente
    });
})
*/ 