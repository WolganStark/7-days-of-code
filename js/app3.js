let tecnologias = [];
let preguntaNombre = '¿Cuál es tu nombre?';
let preguntaEspecialidad = '¿Quieres especializarte en Front-End o Back-End?';
let preguntaFrontEnd = '¿Quieres aprender React o Vue?';
let preguntaBackEnd = '¿Quieres aprender C# o Java?';
let preguntaTecnologia = '¿Que tecnología te gustaría aprender o especializarte?'
let preguntaOk = '¿Hay alguna otra tecnología que te gustaría aprender? Responde OK para continuar o NO para finalizar';
let flag = false;
let contador = 0;
let nombre = '';
let especialidad = '';
let framework = '';

function preguntar(){    
    while (flag === false){
        console.log(contador);
        if (contador === 0){
            document.getElementById('preguntas').innerHTML = preguntaNombre;
        } else if(contador === 1){
            document.getElementById('preguntas').innerHTML = preguntaEspecialidad;
        } else if(contador === 2){
            if(especialidad === 'Front-End'){
                document.getElementById('preguntas').innerHTML = preguntaFrontEnd;
            } else if (especialidad === 'Back-End'){ 
                document.getElementById('preguntas').innerHTML = preguntaBackEnd;
            } else {
                alert('Debes seleccionar una especialidad');
                contador = 2;                
                return;
            }
        } else if(contador === 3){
            document.getElementById('preguntas').innerHTML = preguntaTecnologia;
        } else if(contador === 4){
            document.getElementById('preguntas').innerHTML = preguntaOk;
        }
    }
    return;
}


function agregarRespuesta() {    
    let respuesta = document.getElementById('respuesta').value;

    if(respuesta === '') {
        alert('Debes ingresar una respuesta');
        return;
    } else {
        if (contador === 0){
            nombre = respuesta;
        } else if(contador === 1){
            especialidad = respuesta;
        } else if(contador === 2){
            framework = respuesta;
        } else if(contador === 3){
            tecnologias.push(respuesta);
        } else if(contador === 4){
            if(respuesta === 'OK'){
                contador = 3;
            } else {
                flag = true;
            }
        }
        contador++;
        document.getElementById('respuesta').value = '';
        preguntar();
    }
    return;
}

function agregarContenido(){
    document.getElementById('respuestas').innerHTML = `Hola ${nombre}, te gustaría especializarte en ${especialidad} y aprender ${framework}.`;
    document.getElementById('listaTecnologias').innerHTML = '';
    for (let i = 0; i < tecnologias.length; i++) {
        document.getElementById('listaTecnologias').innerHTML += `<li>${tecnologias[i]}</li>`;
    }
}

preguntar();
