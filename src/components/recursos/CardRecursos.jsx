import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { FaWhatsapp } from "react-icons/fa";


const CardRecursos = () => {
  
  return (
    <section className="flex justify-center items-center">
      <Card className="max-w-xs md:max-w-md lg:max-w-lg py-4">
        <CardHeader className="overflow-hidden py-2">
          <div className="w-full relative">
            <Image
              alt="Card background"
              className="object-contain rounded-xl w-full h-full"
              src="https://nextui.org/images/hero-card-complete.jpeg"
            />
          </div>
        </CardHeader>
        <CardBody className="pb-0 pt-2 px-4 flex-col items-start">
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Usado
            </span>
            <hr />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Título del Producto</div>
            <p className="text-gray-700 text-base">
              Descripción breve del producto. Este es un ejemplo de cómo se vería una tarjeta con Tailwind CSS.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <p className="text-gray-700 text-base">
              <strong>Nombre Contacto:</strong> Usuario
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <p className="text-gray-700 text-base">
              <strong>Contacto:</strong> 123-456-7890
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a
              href="https://wa.me/1234567890"
              className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </CardBody>
      </Card>
    </section>
  );
};

export default CardRecursos;
