const URI_DONACIONES=import.meta.env.VITE_API_DONACIONES 

//leer las donaciones disponibles
export const leerDonaciones =async ()=>{
    try {
        const respuesta =await  fetch(URI_DONACIONES);
        const mostrarDonaciones = respuesta.json()
        return mostrarDonaciones
    } catch (error) {
        console.log(error)
    }
}
//POST -crearDonacion
export const crearDonacionApi = async(nuevaDonacion) => {
    try {
        const respuesta = await fetch(URI_DONACIONES, {
          method: "POST",
          body: nuevaDonacion,
        });
        console.log(respuesta);
        return respuesta;
    } catch (error) {
        console.log(error);
    }
}

//obtener donacion por id 
export const obtenerDonacionId = async (id) => {
    try {
      const respuesta = await fetch(`${URI_DONACIONES}/${id}`);
      console.log(respuesta)
      return respuesta;
    } catch (error) {
      console.error(error);
    }
  };

//eliminar donacion
  
export const eliminarDonacionApi = async (id) => {
  try {
    const respuesta = await fetch(`${URI_DONACIONES}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resultado = await respuesta.json();
    return resultado;
  } catch (error) {
    console.error(error);
  }
};