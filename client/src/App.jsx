import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import GestorAplicaciones from "./pages/GestorAplicaciones";  // Importamos el GestorAplicaciones
import Auth from "./pages/Auth";
import Header from './components/header';

function App() {
  return (
    <Router>
      <Header />  {/* Importamos el componente Header en app */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appManager" element={<GestorAplicaciones />} />
        <Route path="/Auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;