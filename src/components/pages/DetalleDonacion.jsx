import React from "react";
import logo from "../../assets/img/logo-provisorio.png";
import image from "../../assets/img/camiseta.png";
import {Card, CardBody, Image,CardHeader,Button} from "@nextui-org/react";
import { FaWhatsapp } from "react-icons/fa";
const DetalleDonacion = () => {
   /*  const [liked, setLiked] = React.useState(false); */
    return (
      <section className="h-screen flex items-center justify-center">
        <Card
          isBlurred
          className="border-none bg-verde-tierra dark:bg-default-100/50 max-w-[610px] backdrop-blur font-oswald"
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
              <p className="text-md">TucuManos</p>
              <p className="text-small text-default-500">nextui.org</p>
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
                src={image}
                width="100%"
              />
            </div>
            {/* detalle */}
            <div className="text-center px-8 text-azul-oscuro flex flex-col  justify-center">
              <h1> Titulo Donacion</h1>
              <hr className="mx-10 rounded-md  border border-solid border-verde-militar" />
              <div className="mt-3">
                <ul>
                  <li>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      estado
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      categoria
                    </span>
                  </li>
                  <li className="text-start"><span className="text-lg">Descripcion:</span><p >
                    Camiseta negra de algodon
                  </p></li>
                  <li className="text-start"><span className="text-lg">Cooperador:</span><p className="font-oswald">
                    Nico
                  </p>
                  </li>
                </ul>
              </div>
              <Button
                   /*  href={`https://wa.me/${donacion.numeroContacto}?text=Hola%20${donacion.nombreCooperador}%2C%20estoy%20interesado%20en%20la%20donación%20${donacion.nombreDonacion}`} */
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
  
