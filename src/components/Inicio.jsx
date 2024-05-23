import logo from '../assets/img/logo-provisorio.png'

export const Inicio = () => {
  return (
    <section className="flex justify-center items-center flex-col mt-3 min-h-screen">
      <img className="animate-spin-slow p-1" src={logo} alt="Card image" />
      <div className='text-center'>
      <h1 className='text-gray-50 text-3xl font-bold'>💚Coperar🌳</h1>
      <button className="bg-[#445D48] hover:bg-[#D6CC99] hover:text-black text-white font-bold py-2 px-4 rounded-full mt-3">
        Agregar recurso
    </button>
      </div>
    </section>
  )
}
