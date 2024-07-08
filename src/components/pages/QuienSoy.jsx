import React from "react";
import { Image } from "@nextui-org/image";
import logo from "../../assets/img/logo-provisorio.png";

export const QuienSoy = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-center items-center imagen-back">
        <div className="w-full md:w-1/2 p-5">
          <div className="text-azul-oscuro font-bold font-oswald text-2xl my-5 text-center">
            <h1>¿Cómo usar la aplicación?</h1>
            <h2>#ReciclaDesdeCasa</h2>
            <div className="text-lg mt-5">
              <ol className="list-decimal list-inside">
                <li>
                  <span className="font-semibold">
                    Acceso al Formulario de Donación:
                  </span>
                  Haz clic en el botón de donaciones para ser redirigido al
                  formulario.
                </li>
                <li className="mt-2">
                  <span className="font-semibold">Completa el formulario:</span>
                  Completa el formulario con los detalles de tu donación, como
                  el tipo de objeto, la condición y cualquier comentario
                  adicional. Luego, envía el formulario.
                </li>
                <li className="mt-2">
                  <span className="font-semibold">
                    Coordinación de la Entrega:
                  </span>
                  Una vez enviado el formulario, se generará una tarjeta de
                  contacto con tu información y los detalles de la donación.
                  <hr className="my-2" />
                  <p className="font-bold font-oswald text-xl underline">
                    Te recomendamos:
                  </p>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      Dejar los objetos en un lugar seguro y accesible fuera de
                      tu domicilio de ser necesario.
                    </li>
                    <li>Pactar la entrega en un lugar público y seguro.</li>
                    <li>
                      No es necesario brindar información adicional como la
                      dirección completa de tu domicilio.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-full md:w-1/2 p-5">
          {" "}
          {/* Oculta en móviles, muestra en pantallas más grandes */}
          <Image width={300} alt="NextUI hero Image" src={logo} />
        </div>
      </section>
    </>
  );
};
