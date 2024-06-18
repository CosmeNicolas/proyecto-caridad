import logo from '../../assets/img/logo-provisorio.png'
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';


 const Inicio = () => {
   return (
     <section className="flex-grow-1 h-screen flex justify-center items-center flex-col imagen-back">
         <img className="animate-pulse" src={logo} alt="Card-image" />
         <h1 className="text-[#005e2f9f] text-center text-3xl font-bold font-oswald">
         🍃Tucu🤝Manos🌱
         </h1>
         {/* <h2 className="text-gray-300 text-xl italic font-oswald ">
         "Unidos por un futuro sustentable"
          </h2> */}
        
          <Link to="/formulario" className="bg-[#445D48] hover:bg-[#D6CC99] hover:text-azul-oscuro text-white font-bold py-3 px-10 rounded-full my-3 text-xl font-oswald">
               <p>Agregar Donación</p>
               <AiFillPlusCircle className="font-extrabold text-3xl text-center mx-auto mt-2" />
           </Link>
     </section>
   );
 }

export default Inicio