function ordenarStrings(arr) {
    return arr.sort(function (a, b) {
        return a.localeCompare(b);
    });
}
// Ejemplo de uso
let frutas = ["Banana", "Manzana", "Pera", "Uva", "Kiwi"];
console.log("Array original:", frutas);
console.log("Array ordenado:", ordenarStrings(frutas));
export {};
//# sourceMappingURL=9.js.map