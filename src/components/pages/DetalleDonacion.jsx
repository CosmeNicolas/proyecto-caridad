import React, {useEffect, useState } from "react";
import {Card, CardBody, Image,CardHeader,Button} from "@nextui-org/react";
import { FaWhatsapp } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { obtenerDonacionId } from "../../helpers/queries";
import logo from "../../assets/img/logo-provisorio.png";


const DetalleDonacion = () => {
  const {id} = useParams()
  const [donacion, setdonacion] = useState('')

 

  useEffect(() => {
    mostrarDonacionid()
  }, [])

  
  const mostrarDonacionid = async () => {
    const respuesta = await obtenerDonacionId(id);
    if (respuesta.status === 200) {
      const donacion = await respuesta.json();
      setdonacion(donacion)
      console.log(donacion)
    }

  };
 
    return (
      <section className="flex items-center justify-center py-8">
       
        <Card
          isBlurred
          className="border-none bg-verde-tierra dark:bg-default-100/50 max-w-[610px] backdrop-blur font-oswald my-3"
          shadow="sm"
        >
          <CardHeader className="flex gap-3  justify-center">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src={logo}
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">Tucu-Manos</p>
              <p className="text-small text-default-500">Detalle Donación</p>
            </div>
          </CardHeader>
          <hr className="mx-4 rounded-md border border-solid border-verde-militar" />
          <CardBody className="flex flex-row ">
            {/* imagen */}
            <div>
              <Image
                alt="Album cover"
                className="object-cover"
                height={200}
                shadow="md"
                src={donacion.imagenDonacion}
                width="100%"
              />
            </div>
            {/* detalle */}
            <div className="text-center px-8 text-azul-oscuro flex flex-col  justify-center">
              <h1 className="font-oswald font-bold text-xl">{donacion.nombreDonacion}</h1>
              <hr className="mx-10 rounded-md  border border-solid border-verde-militar" />
              <div className="mt-3">
                <ul>
                <li className="text-start"><span className="text-lg font-bold">Cooperador:</span><p className="font-oswald 
                text-lg mt-1">
                    {donacion.nombreCooperador}
                  </p>
                  </li>
                  <li className="text-start"><span className="text-lg font-bold">Descripcion:</span>
                  <p className="text-lg mt-1">
                    {donacion.descripcion}
                  </p>
                  </li>
                  <li className="mt-3">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {donacion.estado}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {donacion.categoria}
                    </span>
                  </li>
                </ul>
              </div>
              <Button
              as={Link}
                    to={`https://wa.me/${donacion.numeroContacto}?text=Hola%20${donacion.nombreCooperador}%2C%20estoy%20interesado%20en%20la%20donación%20${donacion.nombreDonacion}`}
                    className="bg-green-600 hover:bg-green-600  text-white shadow-lg mt-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                  >
                    Contactar
                  <FaWhatsapp />
                  </Button>
            </div>
          </CardBody>
        </Card>
      </section>
    );
  };
  
  export default DetalleDonacion;
  
