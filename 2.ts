let obtenerPares = (numeros: number[]): number[] => {
  return numeros.filter(num => num % 2 === 0);
};

let arreglo = [1, 2, 3, 4, 5, 6];
let pares = obtenerPares(arreglo);

console.log(pares); 


