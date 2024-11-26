import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { getUsuarios, addUsuario, updateUsuario, deleteUsuario } from "../services/UserService"; // Cambio de importación
import "./styles/Auth.css";

function Crud() {
  const [usuarios, setUsuarios] = useState([]);  
  const [form, setForm] = useState({ name: "", email: "", contraseña: "", es_empresa: false });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    loadUsuarios();
  }, []);

  const loadUsuarios = async () => {
    try {
      const data = await getUsuarios(); // Cambiado de getItems a getUsuarios
      setUsuarios(data);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Hubo un error al cargar los usuarios",
        icon: 'error',
        confirmButtonText: "OK",
      });
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateUsuario(editingId, form); // Cambiado de updateItem a updateUsuario
        Swal.fire({
          title: "ACTUALIZADO",
          text: "Datos actualizados con éxito",
          icon: 'success',
          confirmButtonText: "OK",
        });
        setEditingId(null);
      } else {
        await addUsuario(form); // Cambiado de addItem a addUsuario
        Swal.fire({
          title: "Datos ingresados",
          text: "Usuario ingresado con éxito",
          icon: 'success',
          confirmButtonText: "OK",
        });
      }
      setForm({ name: "", email: "", contraseña: "", es_empresa: false });
      loadUsuarios(); // Recargar los usuarios después de la operación
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Hubo un error al guardar el usuario",
        icon: 'error',
        confirmButtonText: "OK",
      });
    }
  };

  const handleEdit = (usuario) => {
    setForm(usuario);
    setEditingId(usuario._id);
    Swal.fire({
      title: "Modo de edición",
      text: `Editando a ${usuario.name}`,
      icon: 'info',
      confirmButtonText: "Sí, entiendo",
    });
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });
    if (result.isConfirmed) {
      try {
        await deleteUsuario(id); // Cambiado de deleteItem a deleteUsuario
        Swal.fire("Eliminado", "El elemento ha sido eliminado.", "success");
        loadUsuarios(); // Recargar los usuarios después de la eliminación
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: "Hubo un error al eliminar el usuario",
          icon: 'error',
          confirmButtonText: "OK",
        });
      }
    }
  };

  return (
    <div className="crud-container">
      <h1>CRUD APP con React, Vite y Express</h1>
      <form onSubmit={handleSubmit} className="crud-form">
        <input name="name"
          placeholder="Digita el nombre"
          value={form.name}
          onChange={handleChange} 
          className="crud-input"
        />
        <input name="email"
          placeholder="Digita el correo"
          value={form.email}
          onChange={handleChange} 
          className="crud-input"
        />
        <input name="contraseña"
          placeholder="Digita la contraseña"
          value={form.contraseña}
          onChange={handleChange} 
          className="crud-input"
        />
        <label className="crud-label">
          ¿Eres empresa?
          <select
            name="es_empresa"
            value={form.es_empresa}
            onChange={handleChange}
            className="crud-select"
          >
            <option>Seleccionar</option>
            <option value={true}>Sí</option>
            <option value={false}>No</option>
          </select>
        </label>

        <button type="submit" className="crud-button">{editingId ? "Actualizar" : "Agregar"}</button>
      </form>
      <div className="crud-item-list">
        {usuarios.map((usuario) => (
          <div key={usuario._id} className="crud-item">
            <span>
              <strong>{usuario.name}</strong>: {usuario.email} : {usuario.contraseña} : {String(usuario.es_empresa)}
            </span>

            <div className="crud-item-buttons">
              <button className="crud-edit-btn" onClick={() => handleEdit(usuario)}>
                Editar
              </button>
              <button className="crud-delete-btn" onClick={() => handleDelete(usuario._id)}>
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Crud;
