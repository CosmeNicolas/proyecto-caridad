import { Card, CardBody, Image, Divider, Button, CardHeader } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import ContextDonaciones from "../../context/DonacionesContext"; 
import logo from "../../assets/img/logo-provisorio.png";

const CardRecursos = () => {
  const { donaciones, donacionesApi } = useContext(ContextDonaciones);
  useEffect(() => {
    donacionesApi()
  }, [])
  

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4 imagen-back">
      {donaciones && donaciones.length > 0 ? (
        donaciones.map((donacion) => (
          <Card className="bg-blanco" key={donacion._id}>
            <CardHeader className="flex gap-3 justify-center  bg-azul-oscuro/85 backdrop-blur-3xlxl rounded-sm bg-azul-oscuro">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src={logo}
                width={40}
              />
              <div className="flex flex-col text-white">
                <p className="text-md font-mono font-bold mx-3 ">Tucu🤝Manos</p>
              </div>
            </CardHeader>
            <CardBody className="overflow-visible">
              <div className="flex bg-[#efecdd] rounded-lg">
                <Image
                  alt="Card background"
                  className="object-fill rounded-xl w-[350px] h-[380px]"
                  src={donacion.imagenDonacion}
                  width={270}
                />

                <Divider
                  className="mx-4 bg-[#00000028] w-[3px] rounded-lg"
                  orientation="vertical"
                  height="auto"
                />

                <div className="bg-white rounded-lg flex flex-col p-5 justify-center">
                  <p className="text-xl font-bold font-roboto">
                    {donacion.nombreDonacion}
                  </p>
                  <Divider className="mt-1" />
                  <div className="flex flex-col justify-center mt-4">
                    <div className="text-xs">
                      <strong>Nombre Contacto:</strong>
                      <br />
                      <p className="inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 p-1">
                        {donacion.nombrePersona}🌱
                      </p>
                    </div>
                    <div className="text-xs">
                      <strong className="font-bold">Descripción:</strong>
                      <p className="text-gray-700 font-semibold">
                        {donacion.descripcion}
                      </p>
                      <Divider className="my-1" />
                    </div>
                    <div className="p-1">
                      <span className="inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 mx-1 px-1 ">
                        {donacion.estado}
                      </span>
                      <span className="inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 mx-1 px-1">
                        {donacion.categoria}
                      </span>
                    </div>
                    <div className="p-1">
                      <span className="inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700   text-center mx-1 px-1">
                        {donacion.localidades}
                      </span>
                    </div>
                    <Divider />
                    <Button
                      as={Link}
                      to={`/detalleDonacion/${donacion._id}`}
                      className="bg-amarillo hover:bg-marron text-negro-mate font-semibold shadow-lg mt-4 font-roboto w-full"
                    >
                      Ver Detalle
                    </Button>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        ))
      ) : (
        <div className="flex items-center justify-center min-h-screen flex-col">
  <img className="mr-5 animate-pulse" src={logo} alt="Card-image" />
    <div className="cargando font-bold font-mono text-verde-oscuro">Cargando...</div>
</div>
        /*  <Card
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
      </Card> */
      )}
    </section>
  );
};

export default CardRecursos;




