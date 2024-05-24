import { Inicio } from "./components/pages/Inicio"
import CardRecursos from "./components/recursos/CardRecursos"
import FormularioCarga from "./components/pages/FormularioCarga"
import { BrowserRouter, Router, Route } from "react-router-dom"
function App() {
 

  return (
   <>
   <BrowserRouter>

   <Router>
    <Route  path="/" element={<Inicio/>} />
   </Router>
   </BrowserRouter>
    </>
  )
}

export default App
