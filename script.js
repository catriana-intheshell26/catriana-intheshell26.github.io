function mostrarLados() {
  const izq = document.getElementById("bloqueIzquierdo");
  const der = document.getElementById("bloqueDerecho");

  // Mostrar los bloques
  izq.classList.remove("oculto");
  der.classList.remove("oculto");

  // Activar animación con un pequeño delay para que el navegador registre el cambio
  setTimeout(() => {
    izq.classList.add("visible");
    der.classList.add("visible");
  }, 50);
}
function mostrarCarrusel() {
  document.getElementById("carruselOverlay").classList.remove("oculto");
}

function cerrarCarrusel() {
  document.getElementById("carruselOverlay").classList.add("oculto");
}
function mostrarCarrusel2() {
  document.getElementById("carruselOverlay2").classList.remove("oculto");
}

function cerrarCarrusel2() {
  document.getElementById("carruselOverlay2").classList.add("oculto");
}