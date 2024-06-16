import { Card, CardHeader, CardBody, Image, Button,Divider } from "@nextui-org/react";
import { useContext, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import ContextDonaciones from "../../context/DonacionesContext";
import tacho from '../../assets/img/supertacho.png'


const CardRecursos = () => {
  
  
  const {donaciones} = useContext(ContextDonaciones)

  
  return (
    <>
      <section className="flex justify-center flex-col items-center h-screen">
        <div className="flex flex-wrap justify-center gap-4">
          {donaciones && donaciones.length > 0 ? (
            donaciones.map((donacion) => (
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
                    />
                  </div>
                </CardHeader>
                <CardBody className=" pt-2 px-4 flex-col ">
                  <hr />
                  <div className="px-6 pt-4 pb-2">
                    <strong>Nombre Contacto:</strong>
                    <p className="text-gray-700 text-base">
                      {donacion.nombreCooperador}
                    </p>
                  </div>
                  <div className="px-6 py-4">
                    <div className=" text-xl mb-2">
                      <span className="font-bold">Descripcion:</span>
                      <p className="text-gray-700 text-base">
                        {donacion.descripcion}
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {donacion.categoria}
                    </span>

                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {donacion.estado}
                    </span>
                  </div>
                  <hr />
                  <Button
                    as={Link}
                    to="/detalleDonacion"
                    className="bg-[#001524] hover:bg-[#001524]  text-white shadow-lg mt-4"
                  >
                    Ver Detalle
                    <FaWhatsapp />
                  </Button>
                </CardBody>
              </Card>
            ))
          ) : (
            <Card
              isFooterBlurred
              radius="lg"
              className="border-none  bg-azul-oscuro"
            >
              <CardBody className="text-center text-azul-oscuro font-bold bg-verde-tierra rounded-xl">
                <p className=" ">"El medio ambiente está limpio. "</p>
                <p className=" ">
                  " Sin donaciones disponibles en este momento. "
                </p>
              </CardBody>

              <div className="flex justify-center items-center flex-col">
              <Image
                alt="tacho de basura"
                className="object-cover"
                src={tacho}
                height={300}
                width={300}
              />
               <Button
                as={Link}
                to="/"
                className=" text-white bg-verde-militar font-bold font-oswald hover:text-azul-oscuro "
                variant="ghost"
                size="md"
              >
                Volver al Inicio
              </Button>
              </div>
              <Divider />
             
            </Card>
          )}
        </div>
      </section>
    </>
  );
};

export default CardRecursos;
