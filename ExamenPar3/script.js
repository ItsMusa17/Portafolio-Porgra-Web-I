/**
 * Función que evalúa si una frase es un palíndromo.
 */
function palindromo(cadena) {
    // Construye el mensaje base con la frase original
    var resultado = 'La frase "' + cadena + '"\n';
    // Convierte la cadena a minúsculas y elimina espacios
    var cadenaSinEspacios = cadena.toLowerCase().replace(/ /g, '');
    // Invierte la cadena
    var cadenaReves = cadenaSinEspacios.split('').reverse().join('');
    // Verifica si la cadena original sin espacios es igual a la invertida
    if (cadenaSinEspacios === cadenaReves) {
        resultado += " es un palíndromo.";
    } else {
        resultado += " no es un palíndromo.";
    }
    return resultado;
}

/**
 * Función que se ejecuta al pulsar el botón, obtiene la frase
 * del cuadro de texto, evalúa si es un palíndromo y muestra el resultado.
 */
function checkPalindrome() {
    // Obtiene el valor del campo de texto
    var cad = document.getElementById('phrase').value;
    // Obtiene el párrafo donde se mostrará el resultado
    var resultElement = document.getElementById('result');
    // Muestra el resultado de la evaluación
    resultElement.textContent = palindromo(cad);
}