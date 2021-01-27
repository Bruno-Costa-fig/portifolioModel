var hamburguer = document.querySelector(".hamburguer")

hamburguer.addEventListener("click", function() {
    // adiciona uma classe
    document.querySelector(".container").classList.toggle("show-menu");
})

document.querySelector("#quant").addEventListener("change", atualizarPreco);
document.querySelector("#js").addEventListener("change", atualizarPreco);
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco);
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco);
document.querySelector("#prazo").addEventListener("change", function(){
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semana(as)`
    atualizarPreco()
});

function atualizarPreco() {
    // pega a quantidade de páginas
    const quant = document.querySelector("#quant").value

    // verifica se precisa de script js
    const temJs = document.querySelector("#js").checked

    // cada página custa R$ 100,00
    let preco = quant * 100

    // saber se inclui layout
    const incluiLayout = document.querySelector("#layout-sim").checked

    // prazo
    const prazo = document.querySelector("#prazo").value

    if(temJs) preco += preco*0.1
    if(incluiLayout) preco += 500;

    // a taxa de urgencia é de 10% por semana
    let taxaUrgencia = 1 - prazo*0.1

    // calculo final do preço
    preco += preco*taxaUrgencia

    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
    
}