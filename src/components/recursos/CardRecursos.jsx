import React, { useEffect, useState } from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { FaWhatsapp } from "react-icons/fa";
import { leerDonaciones } from "../../helpers/queries";


const CardRecursos = () => {
  const [verDonaciones, setVerDonaciones] = useState([])
  useEffect(() => {
    donacionesApi()
  }, [])
  /* console.log(verDonaciones) */
  
  
  const donacionesApi = async()=>{
    try {
      const respuesta = await leerDonaciones();
      if(respuesta.status === 200){
        const donacionesAPIinicio = await respuesta;
        console.log(donacionesAPIinicio)
        setVerDonaciones(donacionesAPIinicio)
      }
      const donacionesAPIinicio = await respuesta
      setVerDonaciones(donacionesAPIinicio)
      console.log(verDonaciones)
    /*   console.log(setVerDonaciones) */
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <section className="flex justify-center flex-col items-center bg-[#001524] ">
    <h1 className="text-3xl text-center font-bold text-white ">Donaciones</h1>

    {
      verDonaciones.map((donacion)=>(
      <Card  key={donacion._id} className="max-w-xs md:max-w-md lg:max-w-lg my-2 py-4">
        <CardHeader className="overflow-hidden py-2">
          <div className="w-full relative">
            <Image
              alt="Card background"
              className="object-contain rounded-xl w-full h-full"
              src={donacion.imagen}
            />
          </div>
        </CardHeader>
        <CardBody className="pb-0 pt-2 px-4 flex-col items-start">
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {donacion.estado}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {donacion.categoria}
            </span>
            <hr />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{donacion.nombreDonacio}</div>
            <p className="text-gray-700 text-base">
              {donacion.descripcion}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <p className="text-gray-700 text-base">
              <strong>Nombre Contacto:{donacion.nombreCooperador} </strong>
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <p className="text-gray-700 text-base">
              <strong>Contacto:</strong> {donacion.numeroContacto}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a
              href={`https://wa.me/${donacion.numeroContacto}`} 
              className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </CardBody>
      </Card>
      ))
    }
    </section>
    </>
  );
};

export default CardRecursos;
