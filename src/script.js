let contador = 0;
const listaDeTeclas = document.querySelectorAll(".tecla");

function tocaSom(idElementAudio) {
  const element = document.querySelector(idElementAudio);
  if (element != null && element.localName === "audio") {
    element.play();
  } else {
    alert("Elemento não encontrado ou invalido.");
  }
}
tocaSom("#som_tecla_pom");
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const instrumento = listaDeTeclas[contador].classList[1];
  const idAudio = `#som_${instrumento}`;

  listaDeTeclas[contador].onclick = function () {
    tocaSom(idAudio);
  };

  listaDeTeclas[contador].onkeydown = function (event) {
    if (event.code === "Space" || event.code === "Enter") {
      listaDeTeclas[contador].classList.add("ativa");
    }
  };

  listaDeTeclas[contador].onkeyup = function () {
    listaDeTeclas[contador].classList.remove("ativa");
  };
}
