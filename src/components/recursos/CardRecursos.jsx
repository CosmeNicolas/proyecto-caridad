import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

const CardRecursos = () => {
  return (
    <section className='my-12 mx-auto flex-wrap items-center'>
      <h1 className='text-3xl font-bold text-white text-center mb-8'>Donaciones</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full" src="https://images.pexels.com/photos/274385/pexels-photo-274385.jpeg" alt="Imagen del producto" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Título del Producto</div>
              <p className="text-gray-700 text-base">
                Descripción breve del producto. Este es un ejemplo de cómo se vería una tarjeta con Tailwind CSS.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Usado
              </span>
              <hr />
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
            <div className=" px-6 pt-4 pb-2 ">
              <a 
                href="https://wa.me/1234567890" 
                className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardRecursos;