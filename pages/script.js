function exerc01(){
    return
    var button = document.getElementById("myButton");
    var message = document.getElementById("message");

    button.addEventListener("click", function() {
    message.innerHTML = "Você clicou no botão!";});
}

function exerc02(){
    alert("'script src='script.js'></script>'")
}

function exerc03(){
    var valor1 = Number(prompt("Digite o primeiro número: "))
    var valor2 = Number(prompt("Digite o segundo número: "))
    var resultado = valor1 + valor2

    alert("O resultado desta soma é: " + resultado)
}

function exerc04(){
    var nome = prompt("Qualquer o seu nome completo?")
    alert("Muito prazer, " + nome + "!")
}