import React, { useEffect, useState } from "react";
import { Card, CardBody, Image, CardHeader, Button, Divider } from "@nextui-org/react";
import { FaWhatsapp } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { eliminarDonacionApi, obtenerDonacionId } from "../../helpers/queries";
import logo from "../../assets/img/logo-provisorio.png";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";
import reduce from '../../assets/img/ReduceReusa.png'

const DetalleDonacion = () => {
  const { id } = useParams();
  const [donacion, setDonacion] = useState(null);
  const [puedeEliminar, setPuedeEliminar] = useState(false);
  const [loading, setLoading] = useState(true); // Estado de carga
  const direccionar = useNavigate();

  const handleEliminarDonacion = async (id) => {
    Swal.fire({
      html: `<p class="text-[#fff] font-bold">¿Estás seguro de que quieres eliminar <span class="text-[#d22121] font-bold">${donacion.nombreDonacion}</span>?</p>`,
      icon: "warning",
      showCancelButton: true,
      customClass: {
        popup: "bg-[#001524]",
      },
      confirmButtonColor: "#445D48",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await eliminarDonacionApi(id);
          Swal.fire({
            title: "Borrado!",
            html: `<p class="text-[#fff] font-bold">Su Donación: <span class="text-[#d33] font-bold">${donacion.nombreDonacion}</span> ha sido borrada!</p>`,
            icon: "success",
            customClass: {
              title: "text-white",
              popup: "bg-[#001524]",
              icon: "text-green-300",
              confirmButton: "bg-[#001524]",
            },
            confirmButtonColor: "#445D48",
          });
          setDonacion(null);
          direccionar("/donaciones");
        } catch (error) {
          console.error(error);
          Swal.fire({
            title: "Ops!",
            text: "Se produjo un error, intente más tarde.",
            icon: "error",
            customClass: {
              popup: "contenedor-sweet",
            },
            confirmButtonColor: "#B79B63",
          });
        }
      }
    });
  };

  useEffect(() => {
    mostrarDonacionid();
  }, []);

  const mostrarDonacionid = async () => {
    const respuesta = await obtenerDonacionId(id);
    if (respuesta.status === 200) {
      const donacion = await respuesta.json();
      setDonacion(donacion);
      const numeroGuardado = localStorage.getItem("numeroPersona");
      setPuedeEliminar(numeroGuardado === donacion.numeroPersona);
    }
    setLoading(false); // Finaliza la carga después de obtener los datos
  };

  return (
    <section className="flex items-center justify-center py-8 section-form imagen-back">
      <Card
        isBlurred
        className="border-none dark:bg-default-100/50 max-w-[610px] backdrop-blur font-oswald my-3"
        shadow="sm"
      >
        <CardHeader className="flex gap-3 justify-center bg-azul-oscuro/85 backdrop-blur-3xl rounded-sm">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src={logo}
            width={40}
          />
          <div className="flex flex-col text-white">
            <p className="text-md font-oswald font-bold mx-3">TucuManos🤝</p>
            <p className="text-small font-mono">Detalle reciclado</p>
          </div>
        </CardHeader>
        <CardBody className="flex lg:flex-row bg-blanco">
          <Image
            alt="Album cover"
            className="object-cover border-2 border-azul-oscuro"
            height={200}
            shadow="md"
            src={donacion?.imagenDonacion}
            width="100%"
          />
          <div className="text-center px-8 text-azul-oscuro flex flex-col justify-center">
            <h1 className="font-oswald font-bold text-xl">
              {donacion?.nombreDonacion}
            </h1>
            <div className="flex justify-center">
              <p>Categoria {/* <Divider orientation="vertical"/> */}
              {donacion?.categoria}
              </p>
            </div>
            <hr className="mx-10 rounded-md border border-solid border-verde-militar" />
            <div className="mt-3">
              <ul>
                <li className="text-start">
                  <span className="text-lg font-bold">Cooperador:</span>
                  <p className="font-oswald text-lg mt-1">
                    {donacion?.nombrePersona}
                  </p>
                </li>
                <li className="text-start">
                  <span className="text-lg font-bold">Descripción:</span>
                  <p className="text-lg mt-1">{donacion?.descripcion}</p>
                </li>
                <li className="mt-3">
                  <p className="text-start font-bold font-oswald">
                    Estado:
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {donacion?.estado}
                    </span>
                  </p>
                </li>
                <li className="mt-3">
                  <p className="text-start font-bold font-oswald">
                    Categoría:
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {donacion?.categoria}
                    </span>
                  </p>
                </li>
                <li className="mt-3">
                  <p className="text-start font-bold font-oswald">
                    Ubicación:
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {donacion?.localidades}
                    </span>
                  </p>
                </li>
              </ul>
            </div>
            {!loading && ( // Solo mostrar el botón una vez que se complete la carga
              <Button
                className={`bg-[#710347] hover:bg-[#5b0439] text-white shadow-lg mt-4 text-md ${
                  !puedeEliminar ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={() => handleEliminarDonacion(donacion._id)}
                isDisabled={!puedeEliminar} // Condición de deshabilitado
              >
                Eliminar
                <MdDeleteForever className="text-lg font-bold ms-5" />
              </Button>
            )}
            <Button
              as={Link}
              to={`https://wa.me/${donacion?.numeroPersona}?text=Hola%20${donacion?.nombrePersona}%2C%20estoy%20interesado%20en%20la%20donación%20${donacion?.nombreDonacion}`}
              className="bg-green-600 hover:bg-green-600 text-white shadow-lg mt-4 text-md"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              Contactar
              <FaWhatsapp />
            </Button>
          </div>
          <div className="flex flex-col justify-center items-center mt-3 py-3 ">
            <Image
              alt="Album cover"
              className="object-cover rounded-none  "
              height={200}
              src={reduce}
            />
            <p className="font-roboto text-[#513c0a] font-semibold">#ReciclaDesdeCasa</p>
          </div>
        </CardBody>
      </Card>
    </section>
  );
};

export default DetalleDonacion;
