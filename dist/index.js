"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mostrarEstudiante_1 = require("./mostrarEstudiante");
// definir  variables de tipo 
const e1 = {
    nombre: " David",
    apellido: "Bautista",
    addresses: [
        { street: "102",
            number: 12,
            city: "Bogotá"
        },
        { street: "100",
            number: 20,
            city: "Cartagena"
        },
    ]
};
const e2 = {
    nombre: " Lola",
    apellido: "Sanchez",
    addresses: [
        { street: "102",
            number: 12,
            city: "Bogotá"
        },
        { street: "100",
            number: 20,
            city: "Cartagena"
        },
    ]
};
const e3 = {
    nombre: " Daniel",
    apellido: "Perez",
    edad: 15,
    addresses: [
        { street: "93",
            number: 128,
            city: "Bogotá"
        },
        { street: "98",
            number: 209,
            city: "Ibague"
        },
        { street: "88",
            number: 93,
            city: "Manizales"
        },
    ]
};
// Arreglo para almacenar estudiantes 
let arregloEstudiantes = [];
// Crear un método para agregar un estudiante al final
arregloEstudiantes.push(2);
arregloEstudiantes.push("Jorge");
arregloEstudiantes.push("Carlos");
arregloEstudiantes.push(3);
const addEstudiante = (e) => {
    arregloEstudiantes.push(e);
};
// Crear un método para agregar un estudiante al inicio
const agregarAlInicio = (e) => {
    arregloEstudiantes.unshift(e);
};
// // Método para encontrar un estudiante por nombre y actualizar su apellido
// function actualizarApellidoPorNombre(nombre: string, nuevoApellido: string) {
//     const estudiante = arregloEstudiantes.find(e => e.nombre.trim() === nombre.trim());
//     if (estudiante) {
//         estudiante.apellido = nuevoApellido;
//     } else {
//         console.log(`Estudiante con nombre ${nombre} no encontrado.`);
//     }
// }
// // Método para encontrar estudiantes que viven en Bogotá y actualizar su edad a 20
// function actualizarEdadEnBogota(nuevaEdad: number) {
//     arregloEstudiantes.forEach(estudiante => {
//         // Verificar si 'addresses' está definido y luego comprobar si vive en Bogotá
//         if (estudiante.addresses && estudiante.addresses.some(address => address.city.trim() === "Bogotá")) {
//             estudiante.edad = nuevaEdad;
//         }
//     });
// }
// // Método para borrar un estudiante por nombre y apellido
// function borrarEstudiante(nombre: string, apellido: string) {
//     const estudianteBorrado = arregloEstudiantes.filter(e => 
//         e.nombre.trim() !== nombre.trim() || e.apellido.trim() !== apellido.trim()
//     );
//     // Actualizamos el arreglo original
//     arregloEstudiantes = estudianteBorrado;
//     if (arregloEstudiantes.length < arregloEstudiantes.length) {
//         console.log(`Estudiante ${nombre} ${apellido} borrado.`);
//     } else {
//         console.log(`Estudiante ${nombre} ${apellido} no encontrado.`);
//     }
// }
// // Método para borrar estudiantes menores de 18 años que viven en Bogotá
// function borrarMenoresDe18EnBogota() {
//     const estudiantesFiltrados = arregloEstudiantes.filter(estudiante => {
//         const viveEnBogota = estudiante.addresses && estudiante.addresses.some(address => address.city.trim() === "Bogotá");
//         return !(estudiante.edad !== undefined && estudiante.edad < 18 && viveEnBogota);
//     });
//     // Actualizamos el arreglo original
//     const cantidadBorrados = arregloEstudiantes.length - estudiantesFiltrados.length;
//     arregloEstudiantes = estudiantesFiltrados;
//     if (cantidadBorrados > 0) {
//         console.log(`Se han borrado ${cantidadBorrados} estudiante(s) menor(es) de 18 años que vive(n) en Bogotá.`);
//     } else {
//         console.log(`No se encontraron estudiantes menores de 18 años que vivan en Bogotá.`);
//     }
// }
// // Actualizar la edad de estudiantes que viven en Bogotá a 20
// actualizarEdadEnBogota(20);
// console.log(arregloEstudiantes);
// Agregar estudiantes al arreglo
addEstudiante(e1);
// console.log(arregloEstudiantes);
agregarAlInicio(e2);
// console.log(arregloEstudiantes);
agregarAlInicio(e3);
// console.log(arregloEstudiantes);
// // Actualizar el apellido de un estudiante por su nombre
// actualizarApellidoPorNombre("Manolo", "García");
// console.log(arregloEstudiantes);
// // Actualizar la edad de estudiantes que viven en Bogotá a 20
// actualizarEdadEnBogota(15);
// console.log(arregloEstudiantes);
// // Ejemplo de uso: Borrar un estudiante
// borrarEstudiante("David", "Bautista");
// console.log(arregloEstudiantes);
// borrarMenoresDe18EnBogota()
// Recorrer el arreglo y mostrar solo estudiantes
arregloEstudiantes.forEach((elemento) => {
    // Verifica si 'elemento' es un objeto y tiene las propiedades necesarias
    if (typeof elemento === 'object' && elemento !== null) {
        if ('nombre' in elemento && 'apellido' in elemento) {
            (0, mostrarEstudiante_1.mostarEstudiante)(elemento);
        }
    }
});
