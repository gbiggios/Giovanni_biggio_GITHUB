const imagenActual = document.getElementById('imagenActual');
const imagenSiguiente = document.getElementById('imagenSiguiente');
const imagenOculta = document.getElementById('imagenOculta');
const botonAnterior = document.getElementById('anterior');
const botonSiguiente = document.getElementById('siguiente');

let indiceActual = 0; // Índice de la imagen actual (inicia en 0)

function mostrarImagen(indice) {
  imagenActual.src = `assets/img/carrusel${indice + 1}.png`; // Actualizar la fuente de la imagen actual
  imagenSiguiente.src = `assets/img/carrusel${indice + 2}.png`; // Actualizar la fuente de la imagen siguiente

  imagenActual.style.display = 'block'; // Mostrar la imagen actual
  imagenSiguiente.style.display = 'none'; // Ocultar la imagen siguiente
}

mostrarImagen(indiceActual); // Mostrar la imagen inicial

// Función para cambiar a la imagen anterior
botonAnterior.addEventListener('click', function() {
  if (indiceActual > 0) {
    indiceActual--;
    mostrarImagen(indiceActual);
  }
});

// Función para cambiar a la siguiente imagen
botonSiguiente.addEventListener('click', function() {
  if (indiceActual < 2) {
    indiceActual++;
    mostrarImagen(indiceActual);
  }
});

// Opcional: Configuración del cambio automático de imagen
setInterval(function() {
  botonSiguiente.click(); // Simular clic en el botón "Siguiente"
}, 5000); // Cambiar cada 5 segundos (5000 milisegundos)
