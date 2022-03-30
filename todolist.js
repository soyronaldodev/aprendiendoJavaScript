window.onload = iniciar;

let tareas = [];

function iniciar() {
    let btnAgregar = document.getElementById('btnAgregar');
    btnAgregar.addEventListener('click', clickbtnAgregar)

}

function clickbtnAgregar() {
    let txtTarea = document.getElementById('txtTarea');
    let tarea = txtTarea.value;
    tareas.push(tarea);
    
    mostrarTareas();
}

function mostrarTareas () {
    let listado = document.getElementById ('listado');
    let html = '';
    debugger;
    for (let tarea of tareas) {
        html += tarea + '<br/>';
    }
    listado.innerHTML = html;
}