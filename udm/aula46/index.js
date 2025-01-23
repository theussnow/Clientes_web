//const data =  new Date() //funcao construtora sempre usa new

//console.log(data.toString())


function formataData (date) {
   const dia = date.getDate()
   const mes = date.getMonth() +1
   const ano = date.getFullYear()
   const hr = date.getHours()
   const min = date.getMinutes()
   const sec = date.getSeconds()

   return 
}

const date = new Date()
const dataBrasil = formataData(date)
console.log(dataBrasil)