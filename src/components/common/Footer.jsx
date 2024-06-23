import React from 'react'
import { BsTwitterX,BsFacebook, BsInstagram,  BsLinkedin, BsHeartFill} from "react-icons/bs";
import { BsFillThreadsFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#445D48] py-4 font-oswald  flex flex-col md:flex-row md:justify-around ">
      <article className="text-center">
        <div className="bg-azul-oscuro rounded-xl p-4">
          <p className="text-lg text-slate-200">
            &copy; Todos los derechos reservados
          </p>
          <p className=" text-slate-200 text-lg flex flex-row justify-center ">Hecho con <BsHeartFill className='text-[#027039c9] m-1' /> </p>
        </div>
      </article>
      <article>
        <div className="bg-white rounded-md p-4 flex items-center justify-center flex-col mt-2">
          <p className="text-lg text-azul-oscuro font-oswald font-bold mx-1">
            Sigueme
          </p>
          <ul className="flex  justify-between   text-slate-200 mt-1">
            <Link to="https://x.com/Nicolas50418799">
              <li>
                <BsTwitterX className="text-[#000] mx-1" />
              </li>
            </Link>
            <Link to="https://www.facebook.com/Nico.Mas777?mibextid=ZbWKwL">
              <li>
                <BsFacebook className="text-[#1877F2] mx-1" />
              </li>
            </Link>
            <Link to='https://www.instagram.com/cosme_nicolas/'>
              <li>
                <BsInstagram className="text-[#E1306C] mx-1" />
              </li>
            </Link>
            <Link to='https://www.linkedin.com/in/cosmenicolas/'>
              <li>
                <BsLinkedin className="text-[#0A66C2] mx-1" />
              </li>
            </Link>
            <Link to='https://www.threads.net/@cosme_nicolas'>
              <li>
                <BsFillThreadsFill className="text-[#000] mx-1" />
              </li>
            </Link>
           
            <Link to='https://www.threads.net/@cosme_nicolas'>
              <li>
                <FaWhatsapp  className="text-[#000] mx-1" />
              </li>
            </Link>
          </ul>
        </div>
      </article>
    </footer>
  );
}

export default Footer
