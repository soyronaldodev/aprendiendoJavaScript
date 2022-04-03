window.onload = iniciar;

function iniciar () {
    // boton agregar escucha el click
    let btnAgregar = document.getElementById('btnAgregar');
    btnAgregar.addEventListener('click' , clickBtnAgregar);
    //renderizando la nota
    mostrarNotas();
}


function clickBtnAgregar () {
    //traemos txtNota
    let txtNota = document.getElementById('txtNota');


    // queda asginado al localstorage
    localStorage.nota = txtNota.value;
    mostrarNotas();
    
    
}

function mostrarNotas() {
    //trea el div notas
    let divNotas = document.getElementById('divNotas');
    // le asgina las notas desde el localstorage
    divNotas.innerHTML = localStorage.nota;
}