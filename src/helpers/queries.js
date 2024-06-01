const URI_DONACIONES=import.meta.env.VITE_API_DONACIONES 
console.log(URI_DONACIONES)

export const leerDonaciones =async ()=>{
    try {
        const respuesta =await  fetch(URI_DONACIONES);
        const mostrarDonaciones = respuesta.json()
        return mostrarDonaciones
    } catch (error) {
        console.log(error)
    }
}