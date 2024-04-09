/*Escribe un programa que muestre por consola (con un print por pantalla) los números de 1 a 100
(ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:
a. Múltiplos de 3 por la palabra "fizz".
b. Múltiplos de 5 por la palabra "buzz".
c. Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".*/
for (let num = 1; num <= 100; num++) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log('fizzbuzz' + '\n');
  } else if (num % 3 === 0) {
    console.log('fizz' + '\n');
  } else if (num % 5 === 0) {
    console.log('buzz' + '\n');
  } else {
    console.log(num + '\n');
  }
}
