import React from 'react'

const NavBar = () => {
  return (
    <>
    <div className="bg-gray-100 flex flex-col min-h-screen">

<div class="flex-grow">
        <h1 class="text-4xl text-center mt-10">Contenido Principal</h1>
        <p class="mt-5 text-center">Desplázate hacia abajo para ver el navbar fijo en la parte inferior.</p>
        <div class="h-screen bg-blue-200 mt-10">Más contenido aquí...</div>
        <div class="h-screen bg-green-200 mt-10">Aún más contenido...</div>
    </div>

   
    <nav class="fixed bottom-0 left-0 w-full bg-white shadow-lg">
        <div class="container mx-auto px-4 py-2 flex justify-between items-center">
            <a href="#" class="text-blue-500 hover:text-blue-700">Inicio</a>
            <a href="#" class="text-blue-500 hover:text-blue-700">Servicios</a>
            <a href="#" class="text-blue-500 hover:text-blue-700">Acerca de</a>
            <a href="#" class="text-blue-500 hover:text-blue-700">Contacto</a>
        </div>
    </nav>
    </div>

    </> 
  )
}

export default NavBar
