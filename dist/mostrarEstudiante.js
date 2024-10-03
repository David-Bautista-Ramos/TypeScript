"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostarEstudiante = void 0;
const mostarEstudiante = (estudiante) => {
    var _a, _b;
    console.log(`Nombre: ${estudiante.nombre}`);
    console.log(`Apellido: ${estudiante.apellido}`);
    console.log(`Edad: ${(_a = estudiante.edad) !== null && _a !== void 0 ? _a : 'no tiene edad'}`);
    console.log("\n ----Direcciones----\n");
    (_b = estudiante.addresses) === null || _b === void 0 ? void 0 : _b.forEach((direccion) => {
        console.log(`Calle: ${direccion.street}`);
        console.log(`Numero: ${direccion.number}`);
        console.log(`ciudad: ${direccion.city}`);
        console.log("-----------------------------");
    });
};
exports.mostarEstudiante = mostarEstudiante;
