// >, mayor
// <, menos
// >=, mayor igual
// <=, menor igual
// ==, igual
// &&, y ademas
// ||, o si no

let edad = prompt('Ingrese su edad');
let estatura = prompt('ingrese su estatura');
let hijoDelDueño = prompt('Eres hijo del dueño');

if (edad >= 13 && estatura >= 1.2 || hijoDelDueño.toLowerCase() == 'si') {
    alert('puede ingresar al juego')
} else {
    alert('No puede ingresar al juego')
}

