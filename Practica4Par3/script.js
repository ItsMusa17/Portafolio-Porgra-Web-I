function genera_rfc() {
    // Obtener los valores del formulario
    var nombre = document.getElementById("nombre").value.toUpperCase();
    var ap = document.getElementById("ap").value.toUpperCase();
    var am = document.getElementById("am").value.toUpperCase();
    var anio = document.getElementById("anio").value;
    var mes = document.getElementById("mes").value;
    var dia = document.getElementById("dia").value;

    // Tomar los primeros caracteres de los apellidos y el primer caracter del apellido materno
    var rfc = ap.substr(0, 2) + am.substr(0, 1);

    // Agregar los últimos dígitos del año (solo los últimos dos)
    rfc += anio.substr(2, 2);

    // Agregar los dígitos del mes (si es menor a 10, se agrega con un cero al inicio)
    if (mes < 10) {
        rfc += "0" + mes;
    } else {
        rfc += mes;
    }

    // Agregar los dígitos del día (si es menor a 10, se agrega con un cero al inicio)
    if (dia < 10) {
        rfc += "0" + dia;
    } else {
        rfc += dia;
    }

    // Mostrar el RFC en el campo de resultado
    document.getElementById("resultado").value = rfc;
}