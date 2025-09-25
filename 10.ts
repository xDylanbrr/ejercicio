
const invertirArray = <T>(arr: T[]): T[] => arr.reverse();


let numeros: number[] = [1, 2, 3, 4, 5];
let palabras: string[] = ["uno", "dos", "tres", "cuatro"];

console.log("Array original números:", numeros);
console.log("Array invertido números:", invertirArray([...numeros]));

console.log("Array original palabras:", palabras);
console.log("Array invertido palabras:", invertirArray([...palabras]));
