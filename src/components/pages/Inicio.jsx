import logo from '../../assets/img/logo-provisorio.png'
import { AiFillPlusCircle } from "react-icons/ai";
import CardRecursos from '../recursos/CardRecursos';
export const Inicio = () => {
  return (
    <>
    <section className="flex justify-center items-center flex-col  mt-3">
        <div>
      <img className="animate-spin-slow  p-1" src={logo} alt="Card image" />
        </div>
      <div className='text-center'>
      <h1 className='text-gray-50 text-3xl font-bold'>💚Coperar🌳</h1>
      
      <button className="bg-[#445D48] hover:bg-[#D6CC99] hover:text-azul-oscuro text-white font-bold py-2 px-4 rounded-full mt-3 text-xl text-center">
        Agregar recurso
    <div className='flex justify-center items-center '>
    <AiFillPlusCircle className='font-extrabold  items-center text-3xl'/>
    </div>
    </button>
      </div>
    </section>
    <CardRecursos></CardRecursos>
    </>
    
  )
}
