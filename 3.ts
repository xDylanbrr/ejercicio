function sumarArray(numeros: number[]): number {
  return numeros.reduce(function(acumulador, num) {
    return acumulador + num;
  }, 0); 
}


let arreglo1 = [1, 2, 3, 4, 5];
let resultado = sumarArray(arreglo1);

console.log(resultado); 
