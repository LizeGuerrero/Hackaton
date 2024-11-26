// URL base de la API
const API_URL = "http://localhost:5000/usuarios";

// Función para obtener todos los usuarios
export const getUsuarios = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Error al obtener los usuarios"); // Si no es exitoso, lanza un error
    }
    return await response.json(); // Retorna el JSON con los usuarios
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    throw error; // Lanza el error para ser manejado en el componente que lo llame
  }
};

// Función para obtener un usuario por ID
export const getUsuarioById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Error al obtener el usuario");
    }
    return await response.json();
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    throw error;
  }
};

// Función para agregar un nuevo usuario
export const addUsuario = async (usuario) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario), // Enviamos el objeto usuario como JSON
    });
    if (!response.ok) {
      throw new Error("Error al agregar el usuario");
    }
    return await response.json(); // Retorna el usuario creado
  } catch (error) {
    console.error("Error al agregar el usuario:", error);
    throw error;
  }
};

// Función para actualizar un usuario existente
export const updateUsuario = async (id, usuario) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario), // Enviamos el objeto usuario actualizado
    });
    if (!response.ok) {
      throw new Error("Error al actualizar el usuario");
    }
    return await response.json(); // Retorna el usuario actualizado
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    throw error;
  }
};

// Función para eliminar un usuario
export const deleteUsuario = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Error al eliminar el usuario");
    }

    // Si la respuesta es un 204 (sin contenido), no hay nada que retornar
    if (response.status === 204) {
      return; // La eliminación fue exitosa, pero no hay contenido en la respuesta
    }

    return await response.json(); // Si la respuesta contiene algo, lo convertimos a JSON
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
    throw error;
  }
};