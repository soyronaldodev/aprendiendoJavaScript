window.onload = iniciar;

function iniciar () {
    // boton agregar escucha el click
    let btnAgregar = document.getElementById('btnAgregar');
    btnAgregar.addEventListener('click' , clickBtnAgregar);

    // boton borrar escucha el click
    let btnBorrar = document.getElementById('btnBorrar');
    btnBorrar.addEventListener('click' , clickBtnBorrar);
    //renderizando la nota
    mostrarNotas();
}


function clickBtnAgregar () {
    //traemos txtNota
    let txtNota = document.getElementById('txtNota');

    let notas = [];
    if(localStorage.notas) {
        notas = JSON.parse(localStorage.notas);
    }
    notas.push(txtNota.value);
    localStorage.notas = JSON.stringify(notas);
    mostrarNotas();
}

function clickBtnBorrar () {
    localStorage.clear();
    mostrarNotas();
}

function mostrarNotas() {
    //trea el div notas
    let divNotas = document.getElementById('divNotas');
    // le asgina las notas desde el localstorage
    let notas = [];
    if(localStorage.notas) {
        notas = JSON.parse(localStorage.notas);
    }
    let html = '';
    for (let nota of notas) {
        html += nota + '<br/>';
    }
    divNotas.innerHTML = html;
}