var hamburguer = document.querySelector(".hamburguer")

hamburguer.addEventListener("click", function() {
    // adiciona uma classe
    document.querySelector(".container").classList.toggle("show-menu");
})