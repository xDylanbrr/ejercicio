
function primerosCinco<T>(arr: T[]): T[] {
    return arr.slice(0, 5);
}

// Ejemplo de uso
let numeros: number[] = [10, 20, 30, 40, 50, 60, 70];
let frutas: string[] = ["Manzana", "Pera", "Uva", "Kiwi", "Banana", "Mango", "fresa"];

console.log("Primeros 5 números:", primerosCinco(numeros));
console.log("Primeras 5 frutas:", primerosCinco(frutas));
