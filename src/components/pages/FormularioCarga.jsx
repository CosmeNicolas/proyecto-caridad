import React, { useContext, useState} from "react";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { crearDonacionApi } from "../../helpers/queries";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import ContextDonaciones from "../../context/DonacionesContext";



const FormularioCarga = () => {
  const direccionar = useNavigate()
  const {setDonaciones} = useContext(ContextDonaciones)
   const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


  const crearDonacion = async (data) => {
    setIsLoading(true);
    console.log("Formulario enviado con datos:", data);

    const formData = new FormData();
    formData.append("imagenDonacion", data.imagenDonacion[0]);
    formData.append("nombreDonacion", data.nombreDonacion);
    formData.append("descripcion", data.descripcion);
    formData.append("estado", data.estado);
    formData.append("categoria", data.categoria);
    formData.append("nombreCooperador", data.nombreCooperador);
    formData.append("numeroContacto", data.numeroContacto);

    try {
      const respuesta = await crearDonacionApi(formData);
      if (respuesta.status === 201) {
        Swal.fire({
          title: "Donación Creada",
          text: "Gracias por colaborar",
          icon: "success",
          customClass: {
            title: 'text-white',
            popup: 'bg-[#001524]',
            icon: 'text-green-300',
            confirmButton: 'bg-green-500 hover:bg-green-600',
          }
        });
        reset();
        setDonaciones(formData)
        direccionar('/donaciones')
      }
    } catch (error) {
      console.log(error)
      Swal.fire({
        title: "Error",
        text: "Error al cargar la donacion",
        icon: "error",
        customClass: {
          title: 'text-white',
          popup: 'bg-[#001524]',
          icon: 'text-green-300',
          confirmButton: 'bg-green-500 hover:bg-green-600',
        }
      });
    } finally {
      setIsLoading(false); // Detiene el spinner después de la operación
    }
  };
 

  return (
    <section className="flex-grow  bg-center h-screen  items-center justify-center w-screen flex imagen-back">
     
      <div className="mx-auto max-w-md backdrop-filter backdrop-blur-md bg-opacity-70 rounded-2xl p-5 bg-[#00000034] ">
      <div className="font-mono bg-azul-oscuro rounded-xl p-2">
      <h1 className="text-center text-2xl font-bold text-white font-oswald ">
       INGRESAR DONACIÓN
      </h1>
      <p className="text-center text-gray-300">#ReciclaDesdeCasa</p>
      </div>
      <form
          className="flex flex-col gap-4 bg-transparent text-azul-oscuro "
          onSubmit={handleSubmit(crearDonacion)}
          encType="multipart/form-data"
          method="post"
        >
          {/* IMAGEN */}
          <div className="mt-3">
            <label htmlFor="imagenDonacion" className="text-verde-militar  font-bold font-oswald">
              Agregar Imagen
            </label>
            <input
              className="flex flex-col"
              id="imagenDonacion"
              type="file"
              {...register("imagenDonacion", { required: 'La imagen es obligatoria' })}
           />
            {errors.imagenDonacion && (
              <span className="text-red-500">{errors.imagenDonacion.message}</span>
            )}
          </div>
          {/* NOMBRE DONACION */}
          <div>
            <label htmlFor="nombreDonacion" className="text-verde-militar font-bold font-oswald">
              Nombre Donación
            </label>
            <Input
              id="nombreDonacion"
              type="text"
              placeholder="Nombre Donación"
              {...register("nombreDonacion", { 
                required: 'Este campo es obligatorio',
                minLength: {
                  value: 2,
                  message: 'Debe ingresar como mínimo 2 caracteres para el nombre de la donación'
                },
                maxLength: {
                  value: 50,
                  message: 'Debe ingresar como máximo 50 caracteres para la donación'
                }
              })}
            />
            {errors.nombreDonacion && (
              <span className="text-red-500">{errors.nombreDonacion.message}</span>
            )}
          </div>
          {/* DESCRIPCION */}
          <div>
            <label  htmlFor="descripcion" className="text-verde-militar font-bold font-oswald">
              Agregar descripción
            </label>
            <Input
              id="descripcion"
              type="text"
              placeholder="Descripción"
              {...register("descripcion", { 
                required: 'Este campo es obligatorio',
                minLength: {
                  value: 10,
                  message: 'Debe ingresar como mínimo 10 caracteres'
                },
                maxLength: {
                  value: 100,
                  message: 'Debe ingresar como máximo 100 caracteres'
                }
              })}
            />
            {errors.descripcion && (
              <span className="text-red-500">{errors.descripcion.message}</span>
            )}
          </div>
          {/* CONTENEDOR - estado - categoria */}
          <div className="flex flex-wrap justify-between">
            {/* ESTADO DONACION */}
            <div className="flex flex-col">
              <label id="estadolabel" htmlFor="estado" className="text-verde-militar font-bold font-oswald">
                Estado
              </label>
              <select
                id="estado"
                aria-labelledby="estadolabel"
                placeholder="Seleccionar estado"
                className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-[#D6CC99]"
                {...register("estado", { required: 'El estado es obligatorio' })}
              >
                <option value="Usado">Usado</option>
                <option value="Casi Nuevo">Casi nuevo</option>
              </select>
              {errors.estado && (
                <span className="text-red-500">{errors.estado.message}</span>
              )}
            </div>
            {/* CATEGORIA */}
            <div className="flex flex-col">
              <label htmlFor="categoria" className="text-verde-militar font-bold font-oswald">
                Categoría
              </label>
              <select
                id="categoria"
                aria-labelledby="categoriaLabel"
                placeholder="Seleccionar categoría"
                className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-[#D6CC99]"
                {...register("categoria", { required: 'Debe seleccionar una categoría'})}
              >
                <option value="">Seleccionar Categoría</option>
                <option value="Apuntes">Apuntes 📝</option>
                <option value="Libros">Libros📚</option>
                <option value="Ropa">Ropa👕</option>
                <option value="Papel">Papel📄</option>
                <option value="Plastico">Plástico🧴</option>
                <option value="Vidrio">Vidrio🪞</option>
                <option value="Electrodomestico">Electrodoméstico🏠</option>
                <option value="TecnologiaYaccesorios">Tecnología y Accesorios💻</option>
                <option value="Muebles">Muebles🪵</option>
                <option value="Herramientas">Herramientas🛠️</option>
                <option value="Otros">Otros🎲</option>
              </select>
              {errors.categoria && (
                <span className="text-red-500">{errors.categoria.message}</span>
              )}
            </div>
          </div>
          {/* NOMBRE COOPERADOR */}
          <div>
            <label htmlFor="nombreCooperador" className="text-verde-militar font-bold font-oswald">
              Nombre cooperador
            </label>
            <Input
              id="nombreCooperador"
              type="text"
              placeholder="Nombre del cooperador"
              {...register("nombreCooperador", { 
                required: 'Este campo es obligatorio',
                minLength: {
                  value: 2,
                  message: 'Debe ingresar como mínimo 2 caracteres para el nombre del cooperador'
                },
                maxLength: {
                  value: 50,
                  message: 'Debe ingresar como máximo 50 caracteres para el nombre del cooperador'
                }
              })}
            />
            {errors.nombreCooperador && (
              <span className="text-red-500">{errors.nombreCooperador.message}</span>
            )}
          </div>
          {/* NUMERO CONTACTO */}
          <div>
            <label htmlFor="numeroContacto" className="text-verde-militar font-bold font-oswald">
              Contacto
            </label>
            <Input
              id="numeroContacto"
              type="text"
              placeholder="Nro de contacto"
              {...register("numeroContacto", {
                required: 'El número de contacto es obligatorio',
                pattern: {
                  value: /^\d{10}$/,
                  message: 'El número debe tener 10 dígitos'
                }
              })}
            />
            {errors.numeroContacto && (
              <span className="text-red-500">{errors.numeroContacto.message}</span>
            )}
          </div>
          {/* BTN ENVIO */}
          
          <Button
            isLoading={isLoading}
            type="submit"
            className="bg-[#276231] text-white px-4 py-2 rounded-md" 
            size="lg"
          >
           {isLoading ? 'Cargando Donación...' : 'Enviar'}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default FormularioCarga;