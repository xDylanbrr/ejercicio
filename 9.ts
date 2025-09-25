
function ordenarStrings(arr: string[]): string[] {
    return arr.sort(function(a, b) {
        return a.localeCompare(b);
    });
}

// Ejemplo de uso
let frutas: string[] = ["Banana", "Manzana", "Pera", "Uva", "Kiwi"];

console.log("Array original:", frutas);
console.log("Array ordenado:", ordenarStrings(frutas));
