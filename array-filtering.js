const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filtered = numbers.filter(function evenNumbers(number) {
    return number % 2 === 0;
})
console.log(filtered);

// Imprime: [ 2, 4, 6, 8, 10 ] porque el método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función evenNumbers. En este caso, la función retorna true si el número es par, y false si es impar.