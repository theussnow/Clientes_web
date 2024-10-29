const numeros = [1, 2, 3, 4];
let soma = 0;
let num3:number=2
numeros.forEach((nn, ind) => {
    soma += nn; // Soma cada número
    console.log(`Número2: ${nn}, Índice: ${ind}, Soma parcial: ${soma}`);
});
console.log(`Soma total: ${soma}`);
// Saída:
// Número: 1, Índice: 0, Soma parcial: 1
// Número: 2, Índice: 1, Soma parcial: 3
// Número: 3, Índice: 2, Soma parcial: 6
// Número: 4, Índice: 3, Soma parcial: 10
// Soma total: 10


numeros.forEach((num,indice)=>{
    
     num3+= numeros[3]*5

    console.log(`Num: ${num}, indice: ${indice}, reultado: ${num3}`)


});