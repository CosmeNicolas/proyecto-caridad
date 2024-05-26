import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/input";
import {Button} from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";

const FormularioCarga = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <>
    <section className="bg-[#001524]">
        <h1 className="text-center py-6 text-3xl font-bold text-white">
          Ingrese Recurso
        </h1>
        <div className="mx-auto max-w-md backdrop-filter backdrop-blur-sm bg-opacity-70 rounded-2xl p-5 bg-[#D6CC99]">
          <form
            className="flex flex-col gap-4 bg-transparent "
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label htmlFor="imagen" className="text-white">
                Agregar Imagen
              </label>
              <Input
                id="imagen"
                type="text"
                placeholder="URL de la imagen"
                {...register("Agregar Imagen", { required: true })}
              />
              {errors["Agregar Imagen"] && (
                <span className="text-red-500">Este campo es requerido</span>
              )}
            </div>
            <div>
              <label htmlFor="titulo" className="text-white">
                Título de Recurso
              </label>
              <Input
                id="titulo"
                type="text"
                placeholder="Título"
                {...register("Titulo de Recurso", { required: true })}
              />
              {errors["Titulo de Recurso"] && (
                <span className="text-red-500">Este campo es requerido</span>
              )}
            </div>
            <div>
            <label htmlFor="titulo" className="text-white">
                Agregar descripción
              </label>
            <Input
              type="text"
              placeholder="Descripción"
              {...register("descripcion", { required: true })}
            />
            </div>
            <div>
              <label htmlFor="estado" className="text-white">
                Tipo de Donacion
              </label>
              <Select
                id="estado"
                {...register("Estado")}
                placeholder="Seleccionar categoria"
              >
                <SelectItem value="CasiNuevo">Ropa👕</SelectItem>
                <SelectItem value="Usado">Muebles🪵</SelectItem>
                <SelectItem value="Usado">Electrodoméstico🏠</SelectItem>
                <SelectItem value="Usado">Tecnología y Accesorios💻</SelectItem>
                <SelectItem value="Usado">Herramientas🛠️</SelectItem>
                <SelectItem value="Usado">Otros🎲</SelectItem>
              </Select>
            </div>
            <div>
              <label htmlFor="estado" className="text-white">
                Estado
              </label>
              <Select
                id="estado"
                {...register("Estado")}
                placeholder="Seleccionar estado"
              >
                <SelectItem value="Casi nuevo">Casi nuevo</SelectItem>
                <SelectItem value="Usado">Usado</SelectItem>
              </Select>
            </div>
            <div>
            <label htmlFor="estado" className="text-white">
                Nombre Donador
              </label>
            <Input
              type="text"
              placeholder="Nombre del cooperador"
              {...register("Nombre del cooperador", {})}
            />
             <label htmlFor="estado" className="text-white">
               Contacto
              </label>
            <Input type="number" placeholder="Nro de contacto" {...register} />
            </div>
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
    </>
  );
};

export default FormularioCarga;
