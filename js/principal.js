//var paciente = document.querySelector(".paciente");//


var tabelaPaciente = document.querySelector("#tabela-paciente");
var listaPaciente = tabelaPaciente.children;


for(var i = 0; i < listaPaciente.length; i++){

    var paciente = listaPaciente[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura")

    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoValido = true;
    var alturaValida = true;

    if (peso <= 0 || peso > 100){
        console.log("Peso inválido.");
        pesoValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 2.5){
        console.log("Altura inválida!");
        alturaValida = false;
        tdImc.textContent = "Altura inválida"
        paciente.classList.add("paciente-invalido") 
    }


    if (pesoValido && alturaValida){
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(Event){
    Event.preventDefault();
    console.log("Oi eu sou o botão e fui clicado");
});