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
let preguntaBorrar = '¿Deseas borrar algún producto de la lista? Responde si o no';
let preguntaBorrarProducto = '¿Qué producto deseas borrar de la lista? Recuerda seleccionar la categoría del producto, según la lista desplegable';
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
            estado = 2;
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
    } else if (estado === 2){
        if (frutas.length === 0 && lacteos.length === 0 && congelados.length === 0 && carnes.length === 0 && dulces.length === 0 && aseo.length === 0 && verduras.length === 0 && otros.length === 0){
            alert('Gracias por utilizar la aplicación');
            condicionesIniciales();            
            return;
        } else {
            asignarTextoElemento('preguntas', preguntaBorrar);
            document.getElementById('respuesta').value = '';
            estado = 3;
            return;
        }
    } else if (estado === 3){
        if (document.getElementById('respuesta').value === 'si'){
            asignarTextoElemento('preguntas', preguntaBorrarProducto);
            document.getElementById('categoria').removeAttribute('disabled');
            document.getElementById('respuesta').value = '';
            listaCompra();
            estado = 4;
            return;
        } else if (document.getElementById('respuesta').value === 'no'){                     
            alert('Gracias por utilizar la aplicación');
            listaCompra();
            condicionesIniciales();
            return;
        } else {
            alert ('La respuesta no es válida');
            return;
        }
    } else if (estado === 4){        
        let categoria = document.getElementById('categoria').value;
        let respuesta = document.getElementById('respuesta').value;
        let index = 0;
        switch (categoria){
            case 'frutas':
                index = frutas.indexOf(respuesta);
                if (index > -1){
                    frutas.splice(index, 1);
                    alert(`El producto ${respuesta} ha sido eliminado de la lista`);                    
                } else{
                    alert(`El producto ${respuesta} no se encuentra en la lista`);
                }                
                listaCompra();
                condicionesIniciales();
                break;
            case 'lacteos':
                index = lacteos.indexOf(respuesta);
                if (index > -1){
                    lacteos.splice(index, 1);
                    alert(`El producto ${respuesta} ha sido eliminado de la lista`);                   
                } else{
                    alert(`El producto ${respuesta} no se encuentra en la lista`);
                }   
                listaCompra();
                condicionesIniciales();
                break;
            case 'congelados':
                index = congelados.indexOf(respuesta);
                if (index > -1){
                    congelados.splice(index, 1);
                    alert(`El producto ${respuesta} ha sido eliminado de la lista`);
                } else{
                    alert(`El producto ${respuesta} no se encuentra en la lista`);
                }   
                listaCompra();
                condicionesIniciales();
                break;
            case 'carnes':
                index = carnes.indexOf(respuesta);
                if (index > -1){                    
                    carnes.splice(index, 1);
                    alert(`El producto ${respuesta} ha sido eliminado de la lista`);                    
                } else{
                    alert(`El producto ${respuesta} no se encuentra en la lista`);
                } 
                listaCompra();
                condicionesIniciales();
                break;
            case 'dulces':
                index = dulces.indexOf(respuesta);
                if (index > -1){
                    dulces.splice(index, 1);
                    alert(`El producto ${respuesta} ha sido eliminado de la lista`);
                } else{
                    alert(`El producto ${respuesta} no se encuentra en la lista`);
                } 
                listaCompra();
                condicionesIniciales();
                break;
            case 'aseo':
                index = aseo.indexOf(respuesta);
                if (index > -1){
                    aseo.splice(index, 1);
                    alert(`El producto ${respuesta} ha sido eliminado de la lista`);
                } else{
                    alert(`El producto ${respuesta} no se encuentra en la lista`);
                }    
                listaCompra();
                condicionesIniciales();
                break;
            case 'verduras':
                index = verduras.indexOf(respuesta);
                if (index > -1){
                    verduras.splice(index, 1);
                    alert(`El producto ${respuesta} ha sido eliminado de la lista`);
                } else{
                    alert(`El producto ${respuesta} no se encuentra en la lista`);
                } 
                listaCompra();
                condicionesIniciales();
                break;
            case 'otros':
                index = otros.indexOf(respuesta);
                if (index > -1){
                    otros.splice(index, 1);
                    alert(`El producto ${respuesta} ha sido eliminado de la lista`);
                } else{
                    alert(`El producto ${respuesta} no se encuentra en la lista`);
                }
                listaCompra();
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