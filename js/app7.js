let primerNumero = 0;
let segundoNumero = 0;
let resultado = 0;  

function agregarContenidoTexto(elemento, contenido) {
    document.getElementById(elemento).innerHTML = contenido;
    return;
}

function sumar() {
    primerNumero = parseInt(document.getElementById('primerNumero').value);
    segundoNumero = parseInt(document.getElementById('segundoNumero').value);
    resultado = primerNumero + segundoNumero;
    agregarContenidoTexto('resultado', `El resultado de la suma es ${resultado}`);
    agregarContenidoTexto('instrucciones', 'Ingrese los números nuevamente');
    document.getElementById('primerNumero').value = '';
    document.getElementById('segundoNumero').value = '';
    return;
}

function restar() {
    primerNumero = parseInt(document.getElementById('primerNumero').value);
    segundoNumero = parseInt(document.getElementById('segundoNumero').value);
    resultado = primerNumero - segundoNumero;
    agregarContenidoTexto('resultado', `El resultado de la resta es ${resultado}`);
    return;
}

function multiplicar() {
    primerNumero = parseInt(document.getElementById('primerNumero').value);
    segundoNumero = parseInt(document.getElementById('segundoNumero').value);
    resultado = primerNumero * segundoNumero;
    agregarContenidoTexto('resultado', `El resultado de la multiplicación es ${resultado}`);
    return;
}

function dividir() {
    primerNumero = parseInt(document.getElementById('primerNumero').value);
    segundoNumero = parseInt(document.getElementById('segundoNumero').value);
    resultado = primerNumero / segundoNumero;
    agregarContenidoTexto('resultado', `El resultado de la división es ${resultado}`);
    return;
}

function salir() {
    agregarContenidoTexto('resultado', 'Hasta la próxima');
    agregarContenidoTexto('instrucciones', 'Gracias por usar la calculadora');
    document.getElementById('primerNumero').value = '';
    document.getElementById('segundoNumero').value = '';
    document.getElementById('sumar').setAttribute('disabled', 'true');
    document.getElementById('restar').setAttribute('disabled', 'true');
    document.getElementById('multiplicar').setAttribute('disabled', 'true');
    document.getElementById('dividir').setAttribute('disabled', 'true');
    document.getElementById('salir').setAttribute('disabled', 'true');
    return;
}