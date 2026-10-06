// 1. Función sumar
function sumar() {
    let a = Number(document.getElementById("numero1").value);
    let b = Number(document.getElementById("numero2").value);

    let resultado = a + b;

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}


// 2. Función restar
function restar() {
    let a = Number(document.getElementById("numero1").value);
    let b = Number(document.getElementById("numero2").value);

    let resultado = a - b;

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}


// 3. Función multiplicar
function multiplicar() {
    let a = Number(document.getElementById("numero1").value);
    let b = Number(document.getElementById("numero2").value);

    let resultado = a * b;

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}


// 4. Función dividir
function dividir() {
    let a = Number(document.getElementById("numero1").value);
    let b = Number(document.getElementById("numero2").value);

    if (b === 0) {
        document.getElementById("resultado").innerHTML = "No se puede dividir entre 0";
    } else {
        let resultado = a / b;
        document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
    }
}


// 5. Función potencia
function potencia() {
    let a = Number(document.getElementById("numero1").value);
    let b = Number(document.getElementById("numero2").value);

    let resultado = Math.pow(a, b);

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}


// 6. Función promedio
function promedio() {
    let a = Number(document.getElementById("numero1").value);
    let b = Number(document.getElementById("numero2").value);

    let resultado = (a + b) / 2;

    document.getElementById("resultado").innerHTML = "Promedio: " + resultado;
}


// 7. Función cuadrado
function cuadrado() {
    let a = Number(document.getElementById("numero1").value);

    let resultado = a * a;

    document.getElementById("resultado").innerHTML = "Cuadrado: " + resultado;
}


// 8. Función cubo
function cubo() {
    let a = Number(document.getElementById("numero1").value);

    let resultado = a * a * a;

    document.getElementById("resultado").innerHTML = "Cubo: " + resultado;
}


// 9. Función mayor
function mayor() {
    let a = Number(document.getElementById("numero1").value);
    let b = Number(document.getElementById("numero2").value);

    let resultado = Math.max(a, b);

    document.getElementById("resultado").innerHTML = "Mayor: " + resultado;
}


// 10. Función menor
function menor() {
    let a = Number(document.getElementById("numero1").value);
    let b = Number(document.getElementById("numero2").value);

    let resultado = Math.min(a, b);

    document.getElementById("resultado").innerHTML = "Menor: " + resultado;
}


// 11. Función número par
function esPar() {
    let a = Number(document.getElementById("numero1").value);

    if (a % 2 === 0) {
        document.getElementById("resultado").innerHTML = "El número es PAR";
    } else {
        document.getElementById("resultado").innerHTML = "El número NO es PAR";
    }
}


// 12. Función número impar
function esImpar() {
    let a = Number(document.getElementById("numero1").value);

    if (a % 2 !== 0) {
        document.getElementById("resultado").innerHTML = "El número es IMPAR";
    } else {
        document.getElementById("resultado").innerHTML = "El número NO es IMPAR";
    }
}


// 13. Función factorial
function factorial() {
    let a = Number(document.getElementById("numero1").value);
    let resultado = 1;

    for (let i = 1; i <= a; i++) {
        resultado = resultado * i;
    }

    document.getElementById("resultado").innerHTML = "Factorial: " + resultado;
}


// 14. Función área del círculo
function areaCirculo() {
    let radio = Number(document.getElementById("numero1").value);

    let resultado = Math.PI * radio * radio;

    document.getElementById("resultado").innerHTML =
        "Área del círculo: " + resultado.toFixed(2);
}


// 15. Función Celsius a Fahrenheit
function celsiusFahrenheit() {
    let celsius = Number(document.getElementById("numero1").value);

    let resultado = (celsius * 9 / 5) + 32;

    document.getElementById("resultado").innerHTML =
        "Fahrenheit: " + resultado;
}