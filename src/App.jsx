import React from "react"
import Inicio from "./components/pages/Inicio"
import CardRecursos from "./components/recursos/CardRecursos"
import FormularioCarga from "./components/pages/FormularioCarga"
import NavBar from "./components/common/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
function App() {
 

  return (
   <>
 <BrowserRouter>
   <NavBar/>
    <Routes>
    <Route exact path="/" element={<Inicio />} />
    <Route exact path='/donaciones' element={<CardRecursos/>}/>
    <Route exact path='/formulario' element={<FormularioCarga/>}/>
    </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
