import logo from '../../assets/img/logo-provisorio.png'
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { TbHeartHandshake } from "react-icons/tb";



 const Inicio = () => {
   return (
     <section className="flex-grow-1 h-screen flex justify-center items-center flex-col imagen-back">
         <img className="mr-5 animate-pulse  " src={logo} alt="Card-image" />
         <h1 className="text-[#473B23]  text-3xl font-bold font-oswald flex flex-row py-2 ml-4">
          Tucu <span><TbHeartHandshake className='text-[#005e2fc9] mx-1' /></span>
         Manos
         </h1>
         {/* <h2 className="text-gray-300 text-xl italic font-oswald ">
         "Unidos por un futuro sustentable"
          </h2> */}
        
          <Link to="/formulario" className="bg-[#245027] hover:bg-[#D6CC99] hover:text-azul-oscuro text-white font-bold py-3 px-10 rounded-full  text-2xl font-oswald flex flex-col items-center justify-center">
               <p>Agregar Donación</p>
               <AiFillPlusCircle className="font-extrabold text-3xl mr-2  " />
           </Link>
     </section>
   );
 }

export default Inicio