import { Card, CardBody, Image, Divider, Button, CardHeader } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ContextDonaciones from "../../context/DonacionesContext"; 
import logo from "../../assets/img/logo-provisorio.png";
import tacho from "../../assets/img/supertacho.png";

const CardRecursos = () => {
  const { donaciones, donacionesApi } = useContext(ContextDonaciones);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await donacionesApi();
      setLoading(false);
    };
    fetchData();
  }, [donacionesApi]);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6  p-4 imagen-back">
      {loading ? (
        <div className="text-center flex flex-col items-center justify-center h-screen">
          <img className="animate-pulse mx-auto" src={logo} alt="Card-image" />
          <p className="cargando font-bold font-mono text-verde-oscuro">Cargando...</p>
        </div>
      ) : donaciones.length  ? (
        donaciones.map((donacion) => (
          <Card className="bg-[#efecdd] rounded-[10px]" key={donacion._id}>
            <CardHeader className="flex gap-3 justify-center bg-azul-oscuro/85 backdrop-blur-xl rounded-sm bg-azul-oscuro">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src={logo}
                width={40}
              />
              <div className="flex flex-col text-white">
                <p className="text-md font-mono font-bold mx-3">Tucu🤝Manos</p>
              </div>
            </CardHeader>
            <CardBody className="overflow-visible">
              <div className="flex rounded-lg justify-center items-center">
                <Image
                  alt="Card background"
                  className="object-fill rounded-[10px] w-[200px] h-[310px]"
                  src={donacion.imagenDonacion}
                  width={187}
                  height={310}
                />
                <Divider
                  className="mx-4 bg-[#00000028] w-[3px] rounded-lg"
                  orientation="vertical"
                  height="auto"
                />
                <div className="bg-white rounded-[10px] flex flex-col p-5 justify-center">
                  <p className="text-base font-medium font-['Roboto Condensed'] text-black">
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
                      <p className="text-gray-700 font-roboto font-semibold my-1">
                        {donacion.descripcion}
                      </p>
                      <Divider className="my-1" />
                    </div>
                    <div>
                      <span className="inline-block bg-gray-200 rounded-full text-xs font-semibold text-gray-700 px-1">
                        {donacion.estado}
                      </span>
                      <span className="inline-block bg-gray-200 rounded-full text-xs font-semibold text-gray-700 px-1">
                        {donacion.categoria}
                      </span>
                    </div>
                    <div>
                      <span className="inline-block bg-gray-200 rounded-full text-xs font-semibold text-gray-700 text-center">
                        {donacion.localidades}
                      </span>
                    </div>
                    <Divider />
                    <Button
                      as={Link}
                      to={`/detalleDonacion/${donacion._id}`}
                      className="w-[117px] h-[22px] bg-[#ffd349] rounded-[40px] text-sm font-medium font-['Roboto Condensed'] text-black mt-4 mx-auto flex justify-center items-center"
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
        <Card
          radius="lg"
          className="border-none backdrop-filter backdrop-blur-md bg-opacity-70 rounded-2xl p-5 bg-[#8b89892a] my-3 mx-1"
        >
          <CardBody className="text-center text-azul-oscuro font-bold bg-verde-tierra rounded-xl">
            <p>"El medio ambiente está limpio."</p>
            <p>"Sin donaciones disponibles en este momento."</p>
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
      )}
    </section>
  );
};

export default CardRecursos;
