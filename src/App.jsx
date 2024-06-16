import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import DonacionesProvider from "./context/DonacionesProvider"
import Inicio from "./components/pages/Inicio"
import CardRecursos from "./components/recursos/CardRecursos"
import FormularioCarga from "./components/pages/FormularioCarga"
import NavBar from "./components/common/NavBar"
import Footer  from "./components/common/Footer"
import DetalleDonacion from "./components/pages/DetalleDonacion"
function App() {
  return (
   <>
 <BrowserRouter>
 <div className="flex flex-col min-h-screen">
   <NavBar/>
  <DonacionesProvider>
    <Routes>
    <Route exact path="/" element={<Inicio />} />
    <Route exact path='/donaciones' element={<CardRecursos/>}/>
    <Route exact path='/formulario' element={<FormularioCarga/>}/>
    <Route exact path='/detalleDonacion/:id' element={<DetalleDonacion/>}/>
    </Routes>
  </DonacionesProvider>
    <Footer/>
   </div>
   </BrowserRouter>
    </>
  )
}

export default App
