// Función flecha que verifica si un valor está en el arreglo
const existeValor = (arr: number[], valor: number): boolean => arr.includes(valor);

// Ejemplo de uso
let numeros: number[] = [5, 10, 15, 20];

console.log("¿Existe el 10?:", existeValor(numeros, 10)); 
console.log("¿Existe el 7?:", existeValor(numeros, 7));   
