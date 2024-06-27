import React from 'react'
import soporte from '../../assets/img/soporte256.png'
import {Image} from "@nextui-org/react";
import { Link } from 'react-router-dom';

const LogoSoporte = () => {
  return (
   /*  <Button className="absolute bottom-1 right-4  rounded-lg  backdrop-filter backdrop-blur-md bg-opacity-70"> */
    <Link to={`https://wa.me/3815689732?text=Hola%2C%20TucuManos%20he%20terminado%20mi%20reciclado.`} className="fixed  bottom-4 right-4 p-2 hover:cursor-pointer bg-azul-oscuro rounded-xl backdrop-filter backdrop-blur-md bg-opacity-70 flex flex-col items-center  z-50">
     <Image
      width={50}
      alt="logoSoporte"
      src={soporte}
    />
    <p className='font-oswald text-marron-claro font-bold text-center'>Soporte</p>
  </Link>
  )
}

export default LogoSoporte
