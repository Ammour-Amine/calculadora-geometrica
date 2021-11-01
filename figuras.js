//Código del cuadrado

console.group("Cuadrado");

function perimetroCuadrado(lado){

    return lado * 4;
} 

function areaCuadrado(lado){
    return lado * lado;
} 

console.groupEnd();

//Código del triàngulo

console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base){

    return (lado1 + lado2 + base);
} 

function areaTriangulo(base, altura){

    return (base * altura) / 2;
} 

console.groupEnd();

//Código del círculo

console.group("Círculo");

const radioCirculo = 4;


function diametroCirculo(radio){

    return radio * 2;
}

const pi = Math.PI;

function perimetroCirculo(radio){

    const diametro = diametroCirculo(radio);
    return diametro * pi;
} 

function areaCirculo(radio){

    return (radio * radio ) * pi;
}

console.groupEnd();

//Interactuamos con el html

//Funcción para calcular el perimetro del cuadrado
function calcularPerimetro(){

    const entrada = document.getElementById("entradaLado");

    const value = entrada.value;

    const perimetro = perimetroCuadrado(value);

    document.getElementById("resultado").value = perimetro;
}

//Funcción para calcular el área del cuadrado
function calculararea(){

    const entrada = document.getElementById("entradaLado");

    const value = entrada.value;

    const area = areaCuadrado(value);

    document.getElementById("resultado").value = area;
}

//Funcción para calcular el perimetro del triangulo
function calcularPerimetrotriangulo(){

    const entrada1 = document.getElementById("entradaLado1");
    const entrada2 = document.getElementById("entradaLado2");
    const entrada3 = document.getElementById("entradaBase");

    const value1 = parseInt(entrada1.value);
    const value2 = parseInt(entrada2.value);
    const value3 = parseInt(entrada3.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);

    document.getElementById("resultadotriangulo").value = perimetro;
}

//Funcción para calcular el área del cuadrado
function calcularareatriangulo(){

    const entrada1 = document.getElementById("entradaBase");
    const entrada2 = document.getElementById("entradaAltura");

    const value1 = parseInt(entrada1.value);
    const value2 = parseInt(entrada2.value);

    const area = areaTriangulo(value1, value2);

    document.getElementById("resultadotriangulo").value = area;
}

