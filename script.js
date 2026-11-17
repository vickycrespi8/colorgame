let cuadrados = document.querySelectorAll(".cuadrado");
let colorDisplay = document.querySelector("#colorDisplay");
let mensaje = document.querySelector("#mensaje");
let h1 = document.querySelector("h1");
let botonReset = document.querySelector("#reset");

let colores = [];
let colorGanador;

// Inicia o reinicia el juego
function iniciarJuego() {
  colores = [];
  mensaje.textContent = "";
  botonReset.textContent = "Nuevos Colores";
  h1.style.backgroundColor = "#4682b4";

  // 1. Generar 6 colores aleatorios y pintarlos
  for (let i = 0; i < cuadrados.length; i++) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let colorRandom = "rgb(" + r + ", " + g + ", " + b + ")";
    
    colores.push(colorRandom);
    cuadrados[i].style.backgroundColor = colorRandom;
  }

  // 2. Elegir un ganador al azar
  let indiceGanador = Math.floor(Math.random() * colores.length);
  colorGanador = colores[indiceGanador];
  colorDisplay.textContent = colorGanador;
}

// 3. Configurar el click de cada cuadrado
for (let i = 0; i < cuadrados.length; i++) {
  cuadrados[i].addEventListener("click", function () {
    let colorElegido = this.style.backgroundColor;

    if (colorElegido === colorGanador) {
      mensaje.textContent = "¡Correcto!";
      botonReset.textContent = "Jugar de nuevo";
      h1.style.backgroundColor = colorGanador;

      // Pintar todos del color ganador
      for (let j = 0; j < cuadrados.length; j++) {
        cuadrados[j].style.backgroundColor = colorGanador;
      }
    } else {
      this.style.backgroundColor = "#232323";
      mensaje.textContent = "Intentalo de nuevo";
    }
  });
}

// 4. Botón para reiniciar
botonReset.addEventListener("click", iniciarJuego);

// Arrancar el juego al abrir la página
iniciarJuego();
