'use strict'

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length-1; j++){
    if(array[j]>array[j+1]){
      let bubble = array[j]
      array[j] = array[j+1]
      array[j+1] = bubble 
    }
  }
}
  return array
};



function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    let aux=array[i]
  for(let j = 0; j < i; j++){
    if (aux<array[j]){
      aux=array[j]
      array[j]=array[i]
      array[i]=aux
    }
  }  
}
 return array
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    let min = array[i]
    let current = i
   for (let j = i+1; j < array.length; j++) {
     if (min>array[j]) {
       min = array[j]
       current = j
     }
     
   } 
   if (current!==i) {
     array[current] = array[i]
     array[i]=min
   }
  }
  return array
}


function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

   

}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  bubbleSort,
  insertionSort,
  selectionSort,
  quickSort,
  mergeSort,
};