import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import GestorAplicaciones from "./pages/GestorAplicaciones";  // Importamos el GestorAplicaciones
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />  {/* Importamos el componente Header en app */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appManager" element={<GestorAplicaciones />} />  {/* Ruta para el gestor de aplicaciones */}
      </Routes>
    </Router>
  );
}

export default App;