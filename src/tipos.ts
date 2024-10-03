export type Estudiante = {
    nombre :  string,
    apellido : string ,
    edad  ? :  number 
    addresses ? : Address[]
}
export type Address = {
    street : string,
    number : number,
    sector ? : string,
    city : string,
    postalCode ? :string
}