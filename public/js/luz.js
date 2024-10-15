// Elementos que reaccionarán al ratón
const elementos = document.querySelectorAll('h1, h2, h3, button, label, input, textarea');

// Colores de Netflix, Amazon y HBO
const colores = ['#E50914', '#146EB4', '#5A189A']; // Rojo, azul y púrpura
let colorActual = 0; // Índice del color

// Cambiar al siguiente color en la lista
function cambiarColor() {
    colorActual = (colorActual + 1) % colores.length;
    return colores[colorActual];
}

// Asignar eventos a cada elemento
elementos.forEach(elemento => {
    let colorElemento = cambiarColor(); // Establecer color inicial

    // Cambia el color al acercarse
    elemento.addEventListener('mouseenter', () => {
        colorElemento = cambiarColor();
        elemento.style.color = colorElemento;
    });

    // Detecta el movimiento del ratón para ajustar el brillo
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.pageX;
        const mouseY = e.pageY;

        const rect = elemento.getBoundingClientRect();
        const elementoX = rect.left + rect.width / 2;
        const elementoY = rect.top + rect.height / 2;

        // Calcular distancia entre el ratón y el centro del elemento
        const distanciaX = Math.abs(mouseX - elementoX);
        const distanciaY = Math.abs(mouseY - elementoY);
        const distanciaTotal = Math.sqrt(distanciaX ** 2 + distanciaY ** 2);

        // Ajustar la intensidad según la proximidad
        const rango = 200;
        const intensidad = Math.max(0, (rango - distanciaTotal) / rango); // Entre 0 y 1

        if (intensidad > 0) {
            elemento.style.textShadow = `
                0 0 ${10 * intensidad}px ${colorElemento},
                0 0 ${20 * intensidad}px ${colorElemento},
                0 0 ${30 * intensidad}px ${colorElemento}
            `;
            elemento.style.boxShadow = `
                0 0 ${10 * intensidad}px ${colorElemento},
                0 0 ${30 * intensidad}px ${colorElemento},
                0 0 ${50 * intensidad}px ${colorElemento}
            `;
        } else {
            elemento.style.textShadow = '';
            elemento.style.boxShadow = '';
        }
    });

    // Limpiar efectos al salir del área del elemento
    elemento.addEventListener('mouseleave', () => {
        elemento.style.textShadow = '';
        elemento.style.boxShadow = '';
    });
});
