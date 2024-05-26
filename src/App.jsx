import { Inicio } from "./components/pages/Inicio"
import CardRecursos from './components/recursos/CardRecursos'
import FormularioCard from './components/pages/FormularioCarga'
import NavBar from "./components/common/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
 

  return (
   <>
   <BrowserRouter>
   <NavBar>
    <Routes>
    <Route exact path="/" element={<Inicio />} />
    <Route exact path='/donaciones' element={<CardRecursos/>}/>
    <Route exact path='/formulario' element={<FormularioCard/>}/>
    </Routes>
    </NavBar>
   </BrowserRouter>
   
    </>
  )
}

export default App
