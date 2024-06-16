import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { useContext } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import ContextDonaciones from "../../context/DonacionesContext";


const CardRecursos = () => {
  const {donaciones} = useContext(ContextDonaciones)
  return (
    <>
      <section className="flex justify-center flex-col items-center">
        <h1 className="text-3xl text-center font-bold text-white ">
          Donaciones
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-4">
          {donaciones && donaciones.length > 0
            ? donaciones.map((donacion) => (
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
                        <span className="font-bold">
                        Descripcion:
                        </span>
                        <p className="text-gray-700 text-base">{donacion.descripcion}</p>
                        </div>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{donacion.categoria}</span>
                      
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{donacion.estado}</span>
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
            : "no hay donaciones para mostrar"}
        </div>
      </section>
    </>
  );
};

export default CardRecursos;
