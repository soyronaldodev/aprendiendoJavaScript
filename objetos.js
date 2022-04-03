/*let persona = {
    'nombre': 'ronaldo',
    'apellido': 'vazquez',
    'telefono': 34343434,
    'email': 'soyronaldo@gmail.com',
    'direccion': 'en tu corazon'
}

// para agregar algo nuevo al objeto

persona.apellido = 'molina'


console.log(persona)
*/

window.onload = iniciar;

let personas = [];

function iniciar() {
    let btnAgregar = document.getElementById('btnAgregar');
    btnAgregar.addEventListener('click' , clickBtnAgregar)
}

function clickBtnAgregar() {
    // hacerlo en una linea
    let nombre = document.getElementById('txtNombre').value;
    let apellido = document.getElementById('txtApellido').value;
    let telefono = document.getElementById('txtTelefono').value;
    let email = document.getElementById('txtEmail').value;
    


    let persona = {
        'nombre': nombre,
        'apellido': apellido,
        'telefono': telefono,
        'email': email
    }

    personas.push(persona);
    mostrarPersonas();
        // esto es en dos lineas
    //let txtNombre = document.getElementById('txtNombre');
    //let nombre = txtNombre.value;
}

    function mostrarPersonas() {
        let listado = document.getElementById('listado');
        let html = '';
        for (let persona of personas) {
            // escribir en una sola linea(mas simple)
            //html += `nombre: ${persona.nombre}`
            html += persona.nombre + ' ' + persona.apellido + ' ' + persona.telefono + ' ' + persona.email + ' ' + '<br/>';
        }
        listado.innerHTML = html;
    }