// Función para toggle de LEDs 1, 2 y 3
function toggleLED(ledNum) {
    fetch('/toggle?led=' + ledNum)
        .then(response => response.text())
        .then(text => {
            console.log(text);
            alert(text);
        })
        .catch(err => console.error('Error toggle LED:', err));
}

// Función para cambiar color de la tira WS2812B
function changeStripColor() {
    const colorInput = document.getElementById('ledColor');
    let color = colorInput.value;  // Ej: "#2da003"
    if (color.startsWith('#')) {
        color = color.substring(1);
    }
  
        });
}
