/*
const alumnos = [
    { nombre: "María", edad: 20 },
    { nombre: "Bernardo", edad: 28 },
    { nombre: "Pancracio", edad: 22 },
    { nombre: "Andrea", edad: 19 },
    { nombre: "Sara", edad: 29 },
    { nombre: "Jorge", edad: 32 },
    { nombre: "Yurena", edad: 38 },
    { nombre: "Ayoze", edad: 18 }
  ];
  */
  // Busca el primer elemento con la edad indicada, sino devuelve -1
/*
  const encontrarElemento = (array, buscarEdad) => {
    for (let i = 0; i < array.length-1; i++) {
      var alumno = array[i];
      if (alumno.edad === buscarEdad) {
        return alumno;
      }
    }
    return -1;
  }

  console.log(encontrarElemento(alumnos,19));
*/
/*
  const encontrarAlumno = (array, buscarEdad) => {
    return array.find(alumno => alumno.edad === buscarEdad) ?? -1;
  }
  
 console.log(encontrarAlumno(alumnos,99));

*/
  //Ordenación:
/*
  const Alumnos = ["Alberto", "Zoe", "Ana", "Mauricio", "Bernardo"];

  console.log("Origen: " + Alumnos);
//Ordeno el vector:

  const ordenaAlumnos = Alumnos;

  console.log("Copia: " + ordenaAlumnos);
  Alumnos.sort();
  console.log("Origen: " + Alumnos);
  console.log("copia: " + ordenaAlumnos);

*/

//const letras = ["a", "b", "c", "d"];
/*
// Con funciones por expresión
console.log("--Con funciones por expresión---");
const f = function () {
    console.log("Un elemento.");
  };
  

letras.forEach(f);

console.log("--Con funciones anónimas---")

/// Con funciones anónimas
letras.forEach(function () {
    console.log("Un elemento.");
  });

*/
/*
  console.log("--Con funciones flecha---");

  // Con funciones flecha
letras.forEach(() => console.log("Un elemento."));


*/
const letras = ["a", "b", "c", "d"];

letras.forEach((elemento) => 
    console.log(elemento)
    ); 

letras.forEach((elemento, index) => 
    console.log(elemento, index)
    ); 

letras.forEach((elemento, i,array) => 
    console.log(elemento, i, array)
    ); 
