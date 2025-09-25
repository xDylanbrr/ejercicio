function primerMayorQueCincuenta(numeros: number[]): number | undefined {
    return numeros.find(n => n>50) 
}

// Ejemplo de uso
let arreglo12 = [10, 25, 60, 45, 80];
let resultado10 = primerMayorQueCincuenta(arreglo12);

console.log(resultado10); // 60
