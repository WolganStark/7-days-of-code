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
            if(contador === 3){
            document.getElementById('preguntas').innerHTML = `¿Te gusta estudiar ${respuestas[2]}? Responde con el número 1 para SI o 2 para NO`;        
            document.getElementById('respuestas').innerHTML = `Hola ${respuestas[0]}, tienes ${respuestas[1]} años y ya estás aprendiendo ${respuestas[2]}.`;        
            }
        } if (contador === 4){
            if (respuestas[3] === '1'){
                document.getElementById('respuestas2').innerHTML = ` ¡Muy bien! Sigue estudiando y tendrás mucho exito`;
                document.getElementById('button').setAttribute('disabled','true');
                } else{
                    document.getElementById('respuestas2').innerHTML += ` Oh, que pena... ¿Ya intentaste aprender otros lenguajes?`;
                    document.getElementById('button').setAttribute('disabled','true');                        
                }
            }   
        }
    }    
    return;
}

preguntar();