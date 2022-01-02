import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { LandingPage } from "./Pages/LandingPage/LandingPage"
import "./App.css";

function App() {
  return (
    <BrowserRouter>   {/* Aquí indicamos a React que todo lo que esté dentro, deberá renderizarse en base a sus URL respectivas. */}
      <Routes>        {/* Instrucción igual que el Switch de JS, renderizará solo un componente según la ruta. */}
        <Route path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />   {/* Y aquí finalmente definimos la ruta y luego el elemento a renderizar. */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;   //Exportamos por defecto, la función App.
