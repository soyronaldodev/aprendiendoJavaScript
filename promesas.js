function cargarJson() {
//fetch('https://jsonplaceholder.typicode.com/todos/1')
//.then(response => response.json())
//.then(jsonCargado)
let json ={
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
    }
    jsonCargado(json);
}




function jsonCargado(json) {
    let spanNombrePost = document.getElementById('txtNombrePost');
    spanNombrePost.innerText = json.title;

    let spanCompleto = document.getElementById('txtCompleto');

    // otra forma de hacer un if
    //spanCompleto.innerText = json.completed ? 'Esta Completo' : 'Esta Incompleto';

    if (json.completed) {
        spanCompleto.innerText = 'Esta Completo';
    } else {
        spanCompleto.innerText = 'Esta Incompleto';
    }
   

    json.title
    console.log(json);
}

cargarJson();