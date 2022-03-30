function calcularSuperficie (ancho, alto) {
    
    let resultado = ancho * alto;
    return resultado;
}


function calcularTerrenos () {
    let inputAncho = prompt('Ingresar ancho del terreno en metros');
    let inputAlto = prompt ('Ingresar alto del terreno en metros')
    let superficieTerreno = calcularSuperficie(inputAncho, inputAlto);
    alert('La superficice del terreno es ' + superficieTerreno + ' metros');
}

calcularTerrenos();
calcularTerrenos();