import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import DonacionesProvider from "./context/DonacionesProvider"
import Inicio from "./components/pages/Inicio"
import CardRecursos from "./components/recursos/CardRecursos"
import FormularioCarga from "./components/pages/FormularioCarga"
import NavBar from "./components/common/NavBar"
import Footer  from "./components/common/Footer"
import DetalleDonacion from "./components/pages/DetalleDonacion"
import { QuienSoy } from "./components/pages/QuienSoy";
import LogoSoporte from "./components/common/LogoSoporte";
import Administrador from "./components/pages/Administrador";

function App() {
  return (
   <>
 <BrowserRouter>
 <div className="relative flex flex-col min-h-screen">
   <NavBar/>
   <div className="flex-grow">
  <DonacionesProvider>
    <Routes>
    <Route exact path="/" element={<Inicio />} />
    <Route exact path='/donaciones' element={<CardRecursos/>}/>
    <Route exact path='/formulario' element={<FormularioCarga/>}/>
    <Route exact path='/detalleDonacion/:id' element={<DetalleDonacion/>}/>
    <Route exact path='/ComoReciclar' element={<QuienSoy/>}/>
    <Route exact path='/Administrador' element={<Administrador/>}/>
    </Routes>
  </DonacionesProvider>
  </div>
    <Footer/>
    <LogoSoporte  /* className="absolute bottom-4 right-4" */ />
   </div>
   </BrowserRouter>
    </>
  )
}

export default App
