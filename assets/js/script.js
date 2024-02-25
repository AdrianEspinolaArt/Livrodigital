
var botoesResposta = document.querySelectorAll(".botao-resposta");


for (var i = 0; i < botoesResposta.length; i++) {

  botoesResposta[i].addEventListener("click", function() {

    var resposta = this.nextElementSibling;


    if (resposta.style.display === "none") {

      resposta.style.display = "block";
      this.innerHTML = "Ocultar resposta";
    } else {

      resposta.style.display = "none";
      this.innerHTML = "Ver resposta";
    }
  });
}