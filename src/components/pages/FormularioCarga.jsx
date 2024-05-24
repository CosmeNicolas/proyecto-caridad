import React from 'react';
import { useForm } from 'react-hook-form';

const FormularioCarga = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Agregar Imagen" {...register("Agregar Imagen", {required: true})} />
      <input type="text" placeholder="Titulo de Recurso" {...register("Titulo de Recurso", {required: true})} />
      <input type="text" placeholder="Detalle de cooperación" {...register} />
      <select {...register("Estado")}>
        <option value="Casi nuevo">Casi nuevo</option>
      </select>
      <input type="text" placeholder="Nombre del cooperador" {...register("Nombre del cooperador", {})} />
      <input type="number" placeholder="Nro de contacto" {...register} />

      <input type="submit" />
    </form>
  )
}

export default FormularioCarga
