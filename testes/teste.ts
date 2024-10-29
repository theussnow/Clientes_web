const obj1 = { nome: "Vitor", cidade: "Nova Friburgo" };
const obj2 = { cidade: "Miracema", gostosMusicais: ["rock"] };
const combinedObj = { ...obj1, ...obj2 }; 
// Resultado: { nome: "Vitor", cidade: "Miracema", gostosMusicais: ["rock"] }
console.log(combinedObj)



var ar= [1,2,3]
var arl= [4,5,6]


var juntos = [...ar,...arl]

console.log(juntos)

