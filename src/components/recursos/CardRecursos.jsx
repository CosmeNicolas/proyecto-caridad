import { Card, CardBody, Image, Divider, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const CardRecursos = () => {
  return (
    <>
      <section className="flex flex-wrap justify-center gap-3 imagen-back">
        <Card className="bg-blanco">
          <CardBody className="overflow-visible ">
            <div className="flex bg-[#efecdd]  rounded-lg">
              <div>
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                  width={270}
                />
              </div>

              {/* Divider vertical */}
              <Divider
                className="mx-4 bg-[#00000028] w-[3px] rounded-lg"
                orientation="vertical"
                height="auto"
              />
              {/* contenedor datos donacion  */}
              <div className=" bg-white rounded-lg flex flex-col p-5">
                <div className="text-xs   ">
                  <strong>Nombre Contacto:</strong>
                  <p className="text-gray-700 ">
                    {/* {donacion.nombrePersona} */}
                    Nicolas
                  </p>
                </div>
                <div className="text-xs ">
                  <span className="font-bold">Descripcion:</span>
                  <p className="text-gray-700 ">
                    {/*  {donacion.descripcion} */}
                  </p>
                </div>

                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {/* {donacion.estado} */}
                  nuevo
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {/* {donacion.categoria} */}
                  para bebes
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {/* {donacion.localidades} */}
                  sm TucuManos🤝
                </span>
                <Divider />
                <Button
                  as={Link}
                  /*   to={`/detalleDonacion/${donacion._id}`} */
                  className="bg-amarillo hover:bg-marron text-negro-mate font-semibold shadow-lg mt-4 font-roboto w-full"
                >
                  Ver Detalle
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>
    </>
  );
};

export default CardRecursos;

{
  /*   {donaciones && donaciones.length > 0 ? (
    donaciones.map((donacion) => (
      <div
        key={donacion._id}
        className="w-full sm:w-1/2 lg:w-1/4 max-w-xs md:max-w-md my-1 py-2"
      >
        <Card className="h-full flex flex-col bg-blanco">
          <CardHeader className="overflow-hidden py-2 ">
            <div className="h-[320px] relative">
              <Image
              width={300}
                alt="Card background"
                className="rounded-xl"
                src={donacion.imagenDonacion}
              />
            </div>
          </CardHeader>
          <CardBody className="pt-2 px-4 flex-col flex-1">
            <hr />
            <div className="px-6 pt-4 pb-2">
              <strong>Nombre Contacto:</strong>
              <p className="text-gray-700 text-base">
                {donacion.nombrePersona}
              </p>
            </div>
            <div className="px-6 py-4 flex-1">
              <div className="text-xl mb-2">
                <span className="font-bold">Descripcion:</span>
                <p className="text-gray-700 text-base">
                  {donacion.descripcion}
                </p>
              </div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {donacion.estado}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {donacion.categoria}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {donacion.localidades}
              </span>
            </div>
            <hr />
        
          <Button
              as={Link}
              to={`/detalleDonacion/${donacion._id}`}
              className="bg-amarillo hover:bg-marron text-negro-mate font-semibold shadow-lg mt-4 font-roboto"
            >
              Ver Detalle
        
            </Button>
        
          </CardBody>
        </Card>
      </div>
    ))
  ) : (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none backdrop-filter backdrop-blur-md bg-opacity-70 rounded-2xl p-5 bg-[#8b89892a] my-3 mx-1"
    >
      <CardBody className="text-center text-azul-oscuro font-bold bg-verde-tierra rounded-xl">
        <p>"El medio ambiente está limpio."</p>
        <p> "Sin donaciones disponibles en este momento."</p>
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
          className="text-white bg-verde-militar font-bold font-oswald hover:text-azul-oscuro"
          variant="ghost"
          size="md"
        >
          Volver al Inicio
        </Button>
      </div>
      <Divider />
    </Card>
  )} */
}
