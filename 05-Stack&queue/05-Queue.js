// EJERCICIO 6
// Implementar la función controlAcces: a partir de una Queue que va a recibir como paráemtro que tiene
// en cada posición un objeto que va a representar a una persona y tiene la siguiente forma:
// {
//   fullname: "Franco Etcheverri",
//   age: 26,
//   ticket: {
//     number: 1,
//     event: "Tomorrowland"
//   }
// }
// La idea es ir verificando uno a uno si la primer persona de la cola tiene los requisitos necesarios para
// ingresar al evento correspondiente (también recibido por parámetro). Los requisitos que debe cumplir son:
// - Ser mayor de 18 años (18 inclusive es válido)
// - Tener un ticket que corresponda con el evento (prop event de ticket)
// - Que no haya ingresado ya otra persona al evento con ese mismo número de ticket
// Finalmente la función debe devolver un arreglo con todos los nombres de las personas que pudieron ingresar
// Importante!: Aquellas personas que no cumplan con los requisitos para ingresar deben ser removidos de la cola 

var controlAcces = function(queue, event){
    // Tu código aca:
  let arr=[];
  let ticketNumbers=[];

  while(queue.size()){
    let person = queue.dequeue()
    if(
      person.age>=18 &&
      person.ticket.event === event &&
      !ticketNumbers.includes(person.ticket.number)
    ){
      arr.push(person.fullname);
      ticketNumbers.push(person.ticket.number)
    }
  }
  return arr;
  };
      
  

  module.exports = {
    controlAcces,
   
}