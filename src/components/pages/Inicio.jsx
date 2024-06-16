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
         <h1 className="text-gray-50 text-3xl font-bold font-oswald">
         🍃Tucu🤝Manos🌱
         </h1>
         <h2 className="text-gray-50 text-xl italic font-oswald">
         "Unidos por un futuro sustentable"
          </h2>
         <div className="flex items-center justify-center ">
          <Link to="/formulario" className="bg-[#445D48] hover:bg-[#D6CC99] hover:text-azul-oscuro text-white font-bold py-3 px-5 rounded-full my-3 text-xl font-oswald">
               <p>Agregar Donación</p>
               <AiFillPlusCircle className="font-extrabold text-3xl text-center mx-auto mt-2" />
           </Link>
         </div>
       </div>
     </section>
   );
 }

export default Inicio