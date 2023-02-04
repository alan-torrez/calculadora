alert("Bienvenido Alan, esta calculadora fue diseñada para usted");
alert("Por seguridad le pedire su contraseña");

let contraseña = prompt("Ingrese contraseña");

while (contraseña != "javascript") {
    alert("Contraseña incorrecta");
    contraseña = prompt("Ingrese su contraseña");
}

alert("Ingresaste correctamente");

let entrada = prompt("Alan ¿queres sumar, restar, multiplicar o dividir? Si no deseas usar la calculadora coloca salir");

while (entrada.toLowerCase() != "salir") {

    let respuesta

    switch (entrada.toLowerCase()) {
        case "sumar":
            let numeroUnoSumar = parseInt(prompt("Ingresa tu numero"));
            let numeroDosSumar = parseInt(prompt("Ingresa el numero para la suma"));
            respuesta = numeroUnoSumar + numeroDosSumar;

            alert(numeroUnoSumar + " + " + numeroDosSumar + " = " + respuesta);
            break;

        case "restar":
            let numeroUnoRestar = parseInt(prompt("Ingresa tu numero"));
            let numeroDosRestar = parseInt(prompt("Ingresa el numero para la resta"));
            respuesta = numeroUnoRestar - numeroDosRestar;

            alert(numeroUnoRestar + " - " + numeroDosRestar + " = " + respuesta);
            break;

        case "multiplicar":
            let numeroUnoMultiplicar = parseInt(prompt("Ingresa tu numero"));
            let numeroDosMultiplicar = parseInt(prompt("Ingresa el numero para la multiplicacion"));
            respuesta = numeroUnoMultiplicar * numeroDosMultiplicar;

            alert(numeroUnoMultiplicar + " * " + numeroDosMultiplicar + " = " + respuesta);
            break;

        case "dividir":
            let numeroUnoDividir = parseInt(prompt("Ingresa tu numero"));
            let numeroDosDividir = parseInt(prompt("Ingresa el numero para la division"));
            respuesta = numeroUnoDividir / numeroDosDividir;

            alert(numeroUnoDividir + " / " + numeroDosDividir + " = " + respuesta);
            break;
    }
    entrada = prompt("Alan ¿queres sumar, restar, multiplicar o dividir? Si no deseas usar la calculadora coloca salir");

}