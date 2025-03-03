let frutas = [];
let lacteos = [];
let congelados = [];
let carnes = [];
let dulces = [];
let aseo = [];
let verduras = [];
let otros = [];
let preguntaInicial = '¿Deseas agregar un producto a la lista? Responde si o no';
let preguntaCompra = '¿Qué deseas agregar a la lista? Recuerda seleccionar la categoría del producto, según la lista desplegable';
let estado = 0;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarRespuesta(){
    if (estado === 0){
        if (document.getElementById('respuesta').value === 'si'){
            asignarTextoElemento('preguntas', preguntaCompra);
            document.getElementById('categoria').removeAttribute('disabled');
            document.getElementById('respuesta').value = '';
            estado = 1;
            return;
        } else if (document.getElementById('respuesta').value === 'no'){
            asignarTextoElemento('preguntas', 'Gracias por usar la aplicación');
            listaCompra();
            condicionesIniciales();
            return;
        } else {
            alert ('La respuesta no es válida');
            return;
        }
    } else if (estado === 1){
        let categoria = document.getElementById('categoria').value;
        let respuesta = document.getElementById('respuesta').value;
        switch (categoria){
            case 'frutas':
                frutas.push(respuesta);
                condicionesIniciales();
                break;
            case 'lacteos':
                lacteos.push(respuesta);
                condicionesIniciales();
                break;
            case 'congelados':
                congelados.push(respuesta);
                condicionesIniciales();
                break;
            case 'carnes':
                carnes.push(respuesta);
                condicionesIniciales();                
                break;
            case 'dulces':
                dulces.push(respuesta);
                condicionesIniciales();                
                break;
            case 'aseo':
                aseo.push(respuesta);
                condicionesIniciales();                
                break;
            case 'verduras':
                verduras.push(respuesta);
                condicionesIniciales();                
                break;
            case 'otros':
                otros.push(respuesta);
                condicionesIniciales();                
                break;
            default:
                alert('No se ha seleccionado una categoría');
                break;
        }
    }
    document.getElementById('respuesta').value = '';
    return;
}

function condicionesIniciales() {
    asignarTextoElemento('preguntas', preguntaInicial);    
    document.getElementById('respuesta').value = '';    
    document.getElementById('categoria').setAttribute('disabled', 'true');
    estado = 0;
    return;
}

function listaCompra(){
    let lista = document.getElementById('listaCompras');
    lista.innerHTML = '';
    let texto = 'Frutas: ';
    for (let i = 0; i < frutas.length; i++){
        if (i > 0 && i === frutas.length - 1){
            texto += ' y ' + frutas[i] + '.';
        } else if (i > 0){
            texto += ', ' + frutas[i];
        } else {
            texto += frutas[i];
        }
    }
    texto += '<br>Lácteos: ';
    for (let i = 0; i < lacteos.length; i++){
        if (i > 0 && i === lacteos.length - 1){
            texto += ' y ' + lacteos[i] + '.';
        } else if (i > 0){
            texto += ', ' + lacteos[i];
        } else {
            texto += lacteos[i];
        }
    }
    texto += '<br>Congelados: ';
    for (let i = 0; i < congelados.length; i++){
        if (i > 0 && i === congelados.length - 1){
            texto += ' y ' + congelados[i] + '.';
        } else if (i > 0){
            texto += ', ' + congelados[i];
        } else {
            texto += congelados[i];
        }
    }
    texto += '<br>Carnes: ';
    for (let i = 0; i < carnes.length; i++){
        if (i > 0 && i === carnes.length - 1){
            texto += ' y ' + carnes[i] + '.';
        } else if (i > 0){
            texto += ', ' + carnes[i];
        } else {
            texto += carnes[i];
        }
    }
    texto += '<br>Dulces: ';
    for (let i = 0; i < dulces.length; i++){
        if (i > 0 && i === dulces.length - 1){
            texto += ' y ' + dulces[i] + '.';
        } else if (i > 0){
            texto += ', ' + dulces[i];
        } else {
            texto += dulces[i];
        }
    }
    texto += '<br>Aseo: ';
    for (let i = 0; i < aseo.length; i++){
        if (i > 0 && i === aseo.length - 1){
            texto += ' y ' + aseo[i] + '.';
        } else if (i > 0){
            texto += ', ' + aseo[i];
        } else {
            texto += aseo[i];
        }
    }
    texto += '<br>Verduras: ';
    for (let i = 0; i < verduras.length; i++){
        if (i > 0 && i === verduras.length - 1){
            texto += ' y ' + verduras[i] + '.';
        } else if (i > 0){
            texto += ', ' + verduras[i];
        } else {
            texto += verduras[i];
        }
    }
    texto += '<br>Otros: ';
    for (let i = 0; i < otros.length; i++){
        if (i > 0 && i === otros.length - 1){
            texto += ' y ' + otros[i] + '.';
        } else if (i > 0){
            texto += ', ' + otros[i];
        } else {
            texto += otros[i];
        }
    }
    lista.innerHTML = texto;
    return;    
}

condicionesIniciales();