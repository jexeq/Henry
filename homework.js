<<<<<<< HEAD
// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (x===y) {
    return x;
  }
  else {
    if (x>y) {
      return x;
    }
    else {
      return y;
    }
  }
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  if(edad>=18) {
    return 'Allowed';
  }
  else {
    return 'Not allowed';
  }
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  if (status===1) {
    return 'Online';
  }
  if (status===2) {
    return 'Away'
  }
  if (status===undefined||status>2) {
    return 'Offline'
  }
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if (idioma==='aleman'||idioma==='mandarin'||idioma==='ingles') {
      if(idioma==='aleman') {
        return 'Guten Tag!';
      }
      if (idioma==='mandarin') {
        return 'Ni Hao!';
      }
      if (idioma==='ingles') {
        return 'Hello!';
      }
  }
  else {
    return 'Hola!';
  }
  
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  switch(color) {
    case 'blue': 
      return 'This is ' + color;
      break;
    case 'red':
      return 'This is ' + color;
      break;
    case 'green':
      return 'This is ' + color;
      break;
    case 'orange':
      return 'This is ' + color;
      break;
    default:
      return 'Color not found';
  }
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero===10||numero===5) {
    return true;
  }
  else {
    return false;
  }
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero<50 && numero>20) {
    return true;
  }
  else {
    return false;
  }
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  if (Math.floor(numero)===numero) {
    return true;
  }
  else { 
    return false;
  }
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
 if((numero/5===Math.floor(numero/5))||(numero/3===Math.floor(numero/3))) {
  if ((numero/5===Math.floor(numero/5))&&(numero/3===Math.floor(numero/3))) {
    return 'fizzbuzz';
  }
  if (numero/3===Math.floor(numero/3)) {
    return 'fizz';
  }
  if (numero/5===Math.floor(numero/5)) {
    return 'buzz';
  }
  
}
 else {
   return numero;
 }
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  if (num1===0||num2===0||num3===0) {
    return 'Error';
  }
  if (num1<0||num2<0||num3<0) {
    return 'Hay negativos';
  }
  if (num1>num2&&num1>num3&&num1>0) {
    return 'Número 1 es mayor y positivo';
  }
  if (num3>num2 && num3>num1) {
    num3++;
    return num3;
  }
  return false;
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if(numero<2) {
    return false;
  }
  for (let i=2; i<numero; i++) {
   if (numero%i===0) {
     return false;
    }
  }
  return true;

 
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí

  if (valor===true) {
    return 'Soy verdadero';
  }
  else {
    return 'Soy falso';
  }
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  var tabla = [];
  for (let i=0; i<=10; i++) {
    let res=6*i;
    tabla.push(res);
  } 
  return tabla;
} 

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  if (numero>99&&numero<1000) {
    return true;
  }
  else {
    return false
  }
  
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  let i=1;
  do {
    numero=numero+5;
    i++;
  }
  while(i<=8);
  return numero;
}


=======
// En estas primeras 6 preguntas, reemplaza `null` por la respuesta 1

// Crea una variable "string", puede contener lo que quieras: 2
const nuevaString = 'NewString';

// Crea una variable numérica, puede ser cualquier número: 3
const nuevoNum = 11;

// Crea una variable booleana: 4
const nuevoBool = true;

// Resuelve el siguiente problema matemático: 5
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático: 6
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático: 7
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str 8
  // Tu código:
  return str
}

function suma(x, y) {
  // "x" e "y" son números 9
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  let tot=x+y
  return tot
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor 10
  // Tu código:
  let tot=x-y
  return tot
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor 11
  // Tu código:
  let producto=x*y
  return producto
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor 12
  // Tu código:
  let divi=x/y
  return divi
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales 13
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x==y) {
  return true
  }
  else {
    return false
  }
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud 14
  // De lo contrario, devuelve "false"
  // Tu código:
  if (str1.length==str2.length) {
    return true
  }
  else {
    return false
  }
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa 15
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num<90) {
    return true
  }
  else {
    return false
  }
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta 16
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num>50) {
    return true
  }
  else {
    return false
  }
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y" 17
  // Tu código:
  let resto=x%y
  return resto
}

function esPar(num) {
  // Devuelve "true" si "num" es par 18
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num%2!=1) {
    return true
  }
  else {
    return false
  }
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar 19
  // De lo contrario, devuelve "false"
  // Tu código:
  if (num%2==1) {
    return true
  }
  else {
    return false
  }
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado 20
  // ojo: No es raiz cuadrada!
  // Tu código:
  return Math.pow(num,2)
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo 21
  // Tu código:
  let cubo=Math.pow(num,3)
  return cubo
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent" 22
  // Tu código:
  return Math.pow(num, exponent)
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo 23
  // Tu código:
  let redondeo=Math.round(num)
  return redondeo
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo 24
  // Tu código:
  let upRedondeo=Math.ceil(num);
  return upRedondeo;
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo 25
  //Pista: investigá qué hace el método Math.random()
  return Math.random();

}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 26
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
 if (numero>0) {
   return 'Es positivo';
 }
 if (numero<0) {
   return 'Es negativo';
 }
 if (numero==0) {
   return false;
 }
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string 27
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
 let signo='!';
 return str+signo;
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio. 28
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  let esp=' ';
  return nombre+esp+apellido;
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma: 29
  // "Martin" -> "Hola Martin!"
  // Tu código:
  let saludo='Hola ';
  return saludo+nombre+'!';
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho 30
  // Tu código:
  return alto*ancho;
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro. 31
  //Escribe tu código aquí
  return lado*4;
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo. 32
  //Escribe tu código aquí
return (base*altura)/2;
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba 33
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return euro*1.20;
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 34
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //Escribe tu código aquí
  let largo=letra.length
  if (largo===1) {
    if (letra=='a'||letra=='e'||letra=='i'||letra=='o'||letra=='u') {
      return 'Es vocal';
    }
  }
  else {
    return 'Dato incorrecto';
  }  

}



>>>>>>> 2e7edeb (homework 2 terminada)
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
<<<<<<< HEAD
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
=======
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
>>>>>>> 2e7edeb (homework 2 terminada)
};
