import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/input";
import {Button} from "@nextui-org/react";


const FormularioCarga = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log('Formulario enviado:', data);
  };
    
 
  return (
    <section className="bg-[#001524]">
      <h1 className="text-center py-6 text-3xl font-bold text-white">
        Ingrese Recurso
      </h1>
      <div className="mx-auto max-w-md backdrop-filter backdrop-blur-sm bg-opacity-70 rounded-2xl p-5 bg-[#D6CC99]">
      
        <form
          className="flex flex-col gap-4 bg-transparent"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* IMAGEN */}
          <div>
            <label htmlFor="imagen" className="text-white">
              Agregar Imagen
            </label>
            <Input
              id="imagen"
              type="file"
              placeholder="URL de la imagen"
              {...register("imagen", { 
                required: 'La imagen es obligatoria',
                pattern: {
                  value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/,
                  message: "Debe ingresar una imagen de formato válido: jpeg, png, gif, jpg",
                }
              })}
            />
            {errors.imagen && (
              <span className="text-red-500">{errors.imagen.message}</span>
            )}
          </div>
          {/* NOMBRE DONACION */}
          <div>
            <label htmlFor="nombreDonacion" className="text-white">
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
            <label  htmlFor="descripcion" className="text-white">
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
      
            <div className="flex flex-col ">
            <label id="estadolabel" htmlFor="estado" className="text-white">
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
              <option value="Casi nuevo">Casi nuevo</option>
            </select>
       
            {errors.estado && (
              <span className="text-red-500">{errors.estado.message}</span>
            )}
            </div>
                {/* CATEGORIA */}
          <div className="flex flex-col">
            <label htmlFor="categoria" className="text-white">
              Categoría
            </label>
            <select
              id="categoria"
              aria-labelledby="categoriaLabel"
              placeholder="Seleccionar categoría"
              className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-[#D6CC99]"
              {...register("categoria", { required: 'Debe selecionar una categoria'})}
            >
              <option value="Papel">Papel📄</option>
              <option value="Plastico">Plástico🧴</option>
              <option value="Vidrio">Vidrio🪞</option>
              <option value="Ropa">Ropa👕</option>
              <option value="Muebles">Muebles🪵</option>
              <option value="Electrodomestico">Electrodoméstico🏠</option>
              <option value="Tecnologia y Accesorios">Tecnología y Accesorios💻</option>
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
            <label htmlFor="nombreCooperador" className="text-white">
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
            <label htmlFor="numeroContacto" className="text-white">
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
            type="submit"
            className="bg-[#445D48] text-white px-4 py-2 rounded-md" 
            size="lg"
            color="secondary"
          >
            Enviar
          </Button>
        </form>
        
      </div>
    </section>
  );
};

export default FormularioCarga;
