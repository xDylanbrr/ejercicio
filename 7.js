function todosMayoresQueDiez(numeros) {
    return numeros.every(function (num) {
        return num > 10;
    });
}
let arreglo1 = [15, 20, 30, 50];
let arreglo2 = [15, 8, 30, 50];
console.log("¿Todos mayores que 10 en arreglo1?:", todosMayoresQueDiez(arreglo1));
console.log("¿Todos mayores que 10 en arreglo2?:", todosMayoresQueDiez(arreglo2));
export {};
//# sourceMappingURL=7.js.map