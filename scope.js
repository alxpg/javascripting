const a = 1; 
const b = 2; 
const c = 3;

     (function firstFunction () {
       const b = 5; const c = 6;

       (function secondFunction () {
         const b = 8;

         (function thirdFunction () {
           const a = 7; const c = 9;

           (function fourthFunction () {
             const a = 1; const c = 8
           })()
         })()
       })()
     })()

     console.log(`a: ${a}, b: ${b}, c: ${c}`);

     // Imprime: a: 1, b: 2, c: 3 porque las variables a, b y c se declaran en el ámbito global y no se reasignan en las funciones anidadas. Se ejecuta el código en el archivo scope.js.