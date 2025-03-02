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



function agregarRespuesta() {    
    let respuesta = document.getElementById('respuesta').value;    
    if(respuesta === '') {
        alert('Debes ingresar una respuesta');
        return;
    } else {
        if (contador === 0){
            nombre = respuesta;
            contador = 1;
        } else if(contador === 1){
            especialidad = respuesta;
            if (especialidad === 'Front-End' || especialidad === 'Back-End'){
                contador = 2;
            } else {
                alert('Debes ingresar Front-End o Back-End');
                contador = 1;
                return;
            }
        } else if(contador === 2){
            framework = respuesta;
            if (framework === 'React' || framework === 'Vue' || framework === 'C#' || framework === 'Java'){
                contador = 3;
            } else {
                alert('Debes ingresar un framework válido');
                contador = 2;
                return;
            }
        } else if(contador === 3){
            tecnologias.push(respuesta);
            contador = 4;
        } else if(contador === 4){
            if(respuesta === 'OK'){
                contador = 3;
            } else {
                flag = true;
                agregarContenido();
                contador = 5;
            }
        }        
        document.getElementById('respuesta').value = '';            
    }    
    preguntar();
    return;
}

function agregarContenido(){
    document.getElementById('respuestas').innerHTML = `Hola ${nombre}, te gustaría especializarte en ${especialidad}, aprender ${framework} y las siguientes tecnologías:`;
    document.getElementById('listaTecnologias').innerHTML = '';
    for (let i = 0; i < tecnologias.length; i++) {
        document.getElementById('listaTecnologias').innerHTML += `<li>${tecnologias[i]}</li>`;
    }
}




function preguntar (){
    if (contador===0){
        document.getElementById('preguntas').innerHTML = preguntaNombre;
    } else if(contador===1){
        document.getElementById('preguntas').innerHTML = preguntaEspecialidad; 
    } else if(contador===2 && especialidad === 'Front-End'){
        document.getElementById('preguntas').innerHTML = preguntaFrontEnd;    
    } else if (contador===2 && especialidad === 'Back-End'){
        document.getElementById('preguntas').innerHTML = preguntaBackEnd;
    } else if(contador===3){
        document.getElementById('preguntas').innerHTML = preguntaTecnologia;
    } else if(contador===4){
        document.getElementById('preguntas').innerHTML = preguntaOk;
    }
    return;
}
preguntar();
