import { useState, useEffect } from "react";
import { getAplicaciones } from "../services/AplicacionService";
import "./styles/Home.css";

const Home = () => {
  const [aplicaciones, setAplicaciones] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga

  // Cargar las aplicaciones al montar el componente
  useEffect(() => {
    loadAplicaciones();
  }, []);

  const loadAplicaciones = async () => {
    try {
      const data = await getAplicaciones();
      setAplicaciones(data);
      setLoading(false); // Cambiar el estado a false cuando los datos se han cargado
    } catch (error) {
      console.error("Error al cargar Aplicaciones:", error);
      setLoading(false); // Asegurarse de desactivar el estado de carga incluso si hay un error
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Mostrar un mensaje de carga mientras esperamos
  }

  return (
    <div className="home-container">
      <h1>Aplicaciones</h1>
      <div className="cards-container">
        {aplicaciones.map((app) => (
          <div className="card" key={app._id}>
            <div className="header-card">
              <h2>{app.nombreApp}</h2>
            </div>
            <div className="body-card">
              <img src={app.iconoApp} alt={`${app.nombreApp} Icono`} className="app-icon" />
              {app.linkApp && (
                <a href={app.linkApp} target="_blank" rel="noopener noreferrer" className="app-link">
                  Visitar Aplicación
                </a>
              )}

              {/* Mostrar etiquetas de la aplicación */}
              {app.etiquetas &&
                app.etiquetas.map((etiqueta) => (
                  <span key={etiqueta._id} className="tag">
                    {etiqueta.nombre_etiqueta}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
