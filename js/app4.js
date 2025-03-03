let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('respuesta').value);
    if (intentos === 3){
        asignarTextoElemento('numero-secreto', 'Perdiste, se acabaron los intentos');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario === numeroSecreto){
            asignarTextoElemento('numero-secreto', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if (numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento('numero-secreto', 'El número secreto es menor');
        } else {
                asignarTextoElemento('numero-secreto', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
        }
    }
    return;
}

function limpiarCaja() {
    document.getElementById('respuesta').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo);
    return numeroGenerado;
}

function condicionesIniciales() {
    asignarTextoElemento('numero-secreto','Adivina un número del 0 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    limpiarCaja();
}

function reiniciarJuego() {
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();