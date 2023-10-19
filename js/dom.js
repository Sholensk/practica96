document.addEventListener("DOMContentLoaded", function () {
    var botonModo = document.getElementById("boton-modo");
  
    var modoActual = localStorage.getItem("modo");
  
    if (modoActual === "oscuro") {
      document.body.classList.add("modo-oscuro");
    }
  
    botonModo.addEventListener("click", function () {
      document.body.classList.toggle("modo-oscuro");
  
      if (document.body.classList.contains("modo-oscuro")) {
        localStorage.setItem("modo", "oscuro");
      } else {
        localStorage.setItem("modo", "claro");
      }
    });
  });
  