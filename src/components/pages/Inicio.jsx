import logo from '../../assets/img/logo-provisorio.png'
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';


 const Inicio = () => {
   return (
     <section className="flex-grow flex justify-center items-center flex-col  mt-3">
       <div>
         <img className="animate-pulse" src={logo} alt="Card-image" />
       </div>
       <div className="text-center">
         <h1 className="text-gray-50 text-3xl font-bold font-oswald">TucuManos👋</h1>

         <button className="bg-[#445D48] hover:bg-[#D6CC99] hover:text-azul-oscuro text-white font-bold py-2 px-4 rounded-full mt-3 text-xl text-center font-oswald">
           Agregar recurso
           <Link
             className="flex justify-center items-center "
             to="/formulario"
             href="#"
           >
             <AiFillPlusCircle className="font-extrabold  items-center text-3xl" />
           </Link>
         </button>
       </div>
     </section>
   );
 }

export default Inicio