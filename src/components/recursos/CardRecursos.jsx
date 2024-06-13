import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { FaWhatsapp } from "react-icons/fa";
import { leerDonaciones } from "../../helpers/queries";
import { Link } from "react-router-dom";


const CardRecursos = () => {
  const [verDonaciones, setVerDonaciones] = useState([]);
 
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
      setVerDonaciones(respuesta);
      console.log(respuesta);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <section className="flex justify-center flex-col items-center">
        <h1 className="text-3xl text-center font-bold text-white ">
          Donaciones
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-4">
          {verDonaciones.map((donacion) => (
            <Card
              key={donacion._id}
              className="max-w-xs md:max-w-md lg:max-w-lg my-2 py-4"
            >
              <CardHeader className="overflow-hidden py-2">
                <div className="  h-[222px] relative ">
                  <Image
                    alt="Card background"
                    className=" rounded-xl w-full h-full"
                   src={donacion.imagenDonacion} 
                 /*  src={`https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/${donacion.imagenDonacion}`} */
                  />
                </div>
              </CardHeader>
              <CardBody className=" pt-2 px-4 flex-col ">
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {donacion.estado}
                  </span>
                  
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {donacion.categoria}
                  </span>
                  </div>
                  <hr />
             
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {donacion.nombreDonacion}
                  </div>
                  <p className="text-gray-700 text-base">
                    {donacion.descripcion}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <p className="text-gray-700 text-base">
                    <strong>
                      Nombre Contacto:{donacion.nombreCooperador}
                    </strong>
                  </p>
                </div>
                  <Button as={Link} to='/detalleDonacion' className="bg-[#001524] hover:bg-[#001524]  text-white shadow-lg mt-4">
                    Ver Detalle
                    <FaWhatsapp />
                    </Button>                  
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default CardRecursos;
