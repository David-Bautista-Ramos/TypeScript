import { Estudiante , Address } from "./tipos";



export const mostarEstudiante = (estudiante:Estudiante) =>{
        console.log(`Nombre: ${estudiante.nombre}`);
        console.log(`Apellido: ${estudiante.apellido}`);
        console.log(`Edad: ${estudiante.edad ?? 'no tiene edad'}`);
        console.log("\n ----Direcciones----\n")
        estudiante.addresses?.forEach((direccion:Address)=>{
        console.log(`Calle: ${direccion.street}`)
        console.log(`Numero: ${direccion.number}`)
        console.log(`ciudad: ${direccion.city}`)
        console.log("-----------------------------")

    })
}