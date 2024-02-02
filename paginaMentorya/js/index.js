document.addEventListener('DOMContentLoaded', function() {
    var colorContainer = document.querySelector('.resaltado2');
    updateColor(colorContainer);

    setInterval(function() {
        updateColor(colorContainer);
    }, 3000);
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateColor(element) {
    var randomColor = getRandomColor();
    element.style.backgroundColor = randomColor;

    // Verificar el brillo del color y ajustar el color del texto en consecuencia
    var textColor = isColorLight(randomColor) ? '#000' : '#fff';
    element.style.color = textColor;
}

function isColorLight(color) {
    // Extraer los componentes RGB del color
    var rgb = parseInt(color.slice(1), 16);
    var r = (rgb >> 16) & 0xff;
    var g = (rgb >> 8) & 0xff;
    var b = (rgb >> 0) & 0xff;

    // Calcular el brillo utilizando la fórmula de luminancia Y
    var brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // Devolver true si el brillo es mayor que 128 (color claro), de lo contrario, false
    return brightness > 128;
}