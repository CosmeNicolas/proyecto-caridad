import React, { useEffect, useState } from "react";
import ContextDonaciones from "./DonacionesContext";
import { leerDonaciones } from "../helpers/queries";



const DonacionesProvider = ({children}) => {
    const [donaciones,setDonaciones ] = useState([]);
    useEffect(() => {
        donacionesApi();
      }, []);

      const donacionesApi = async () => {
        try {
          const respuesta = await leerDonaciones();
          if (respuesta.status === 200) {
            const respuesta = await leerDonaciones();
            return respuesta;
          }
          setDonaciones(respuesta);
        } catch (error) {
          console.log(error);
        }
      };


  return (
    <ContextDonaciones.Provider value={{donaciones, setDonaciones, donacionesApi}}>
      {children}
    </ContextDonaciones.Provider>
  )
}

export default DonacionesProvider;
