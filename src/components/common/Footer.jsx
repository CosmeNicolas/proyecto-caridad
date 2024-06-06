import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#445D48] py-4 font-oswald  flex  justify-around">
      <article className='text-center'>
      <p className="text-lg text-slate-200">
          &copy; Todos los derechos reservados
        </p>
        <p className=" text-slate-200 text-lg ">Hecho con 💚 </p>
      </article>
      <article>
        <p className="text-lg text-slate-200">Sigueme</p>
        <ul className='flex  justify-around text-slate-200 mt-1'>
          <li><BsTwitterX /></li>
          <li><BsFacebook /></li>
          <li><BsInstagram /></li>
        </ul>
      </article>
    </footer>
  );
}

export default Footer
