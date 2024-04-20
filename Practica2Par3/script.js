function evalua() {
    var cadena = document.getElementById('cadena').value;
    var contieneMayusculas = /[A-Z]/.test(cadena);
    var contieneMinusculas = /[a-z]/.test(cadena);

    if (contieneMayusculas && contieneMinusculas) {
        document.getElementById('parrafo').innerText = 'La cadena contiene tanto mayúsculas como minúsculas.';
    } else if (contieneMayusculas) {
        document.getElementById('parrafo').innerText = 'La cadena contiene solo mayúsculas.';
    } else if (contieneMinusculas) {
        document.getElementById('parrafo').innerText = 'La cadena contiene solo minúsculas.';
    } else {
        document.getElementById('parrafo').innerText = 'La cadena no contiene ni mayúsculas ni minúsculas.';
    }
}