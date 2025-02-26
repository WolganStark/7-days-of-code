let respuestas = [];
let preguntaNombre = '¿Cuál es tu nombre?';
let preguntaEdad = '¿Cuántos años tienes?';
let preguntaEstudio = '¿Qué lenguaje de programación estás estudiando?'
let contador = 0;

function agregarRespuesta() {    
    let respuesta = document.getElementById('respuesta').value;

    if(respuesta === '') {
        alert('Debes ingresar una respuesta');
        return;
    } else {
        respuestas.push(respuesta);
        document.getElementById('respuesta').value = '';
        contador++;
        preguntar();
        console.log(respuestas);
        console.log(contador);        
    }
    return;
}

function preguntar(){
    if (contador === 0){
        document.getElementById('preguntas').innerHTML = preguntaNombre;
    } else{
    if (contador === 1){
        document.getElementById('preguntas').innerHTML = preguntaEdad;
    } else{
    if (contador === 2){
        document.getElementById('preguntas').innerHTML = preguntaEstudio;
    } else{
        document.getElementById('preguntas').innerHTML = 'Gracias por participar';
        document.getElementById('respuestas').innerHTML = `Hola ${respuestas[0]}, tienes ${respuestas[1]} años y ya estás aprendiendo ${respuestas[2]}`;
    }
    }
    }   
}

preguntar();