import logo from '../../assets/img/logo-provisorio.png'
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';


 const Inicio = () => {
   return (
     <section className="flex-grow-1 h-screen flex justify-center items-center flex-col imagen-back">
      <div className='backdrop-filter text-center backdrop-blur-sm bg-opacity-70 bg-azul-oscuro rounded-2xl p-3'>
       
       <div className="text-center flex flex-col items-center justify-center">
         <img className="animate-pulse" src={logo} alt="Card-image" />
         <h1 className="text-white text-3xl font-bold font-oswald">
         🍃Tucu🤝Manos🌱
         </h1>
         {/* <h2 className="text-gray-300 text-xl italic font-oswald ">
         "Unidos por un futuro sustentable"
          </h2> */}
        
          <Link to="/formulario" className="bg-[#445D48] hover:bg-[#D6CC99] hover:text-azul-oscuro text-white font-bold py-3 px-5 rounded-full my-3 text-xl font-oswald">
               <p>Agregar Donación</p>
               <AiFillPlusCircle className="font-extrabold text-3xl text-center mx-auto mt-2" />
           </Link>
         
          {/*  <p className='font-mono text-gray-700'>#ReciclaDesdeCasa</p> */}
          </div> 
      </div>
     </section>
   );
 }

export default Inicio