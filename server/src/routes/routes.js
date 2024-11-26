import { Router } from 'express';

// Para usar sus metodos los metodos lo guardamos en constante.
const router = Router();

import {
  getAplicaciones,
  getAplicacionesById,
  addAplicacion,
  updateAplicacion,
  deleteAplicacion
} from '../controllers/aplicacionesController.js';

import {
  getEtiquetas,
  getEtiquetaById,
  addEtiqueta,
  updateEtiqueta,
  deleteEtiqueta
} from "../controllers/etiquetasController.js"; // Importamos todos los controladores para etiquetas

// Rutas para aplicaciones
router.get('/aplicaciones', getAplicaciones);
router.get('/aplicaciones/:id', getAplicacionesById);
router.post('/aplicaciones', addAplicacion);
router.put('/aplicaciones/:id', updateAplicacion);
router.delete('/aplicaciones/:id', deleteAplicacion);

// Rutas para etiquetas
router.get('/etiquetas', getEtiquetas); // Obtener todas las etiquetas
router.get('/etiquetas/:id', getEtiquetaById); // Obtener una etiqueta por ID
router.post('/etiquetas', addEtiqueta); // Crear una nueva etiqueta
router.put('/etiquetas/:id', updateEtiqueta); // Actualizar una etiqueta por ID
router.delete('/etiquetas/:id', deleteEtiqueta); // Eliminar una etiqueta por ID

export default router; // Exportamos el router para utilizarlo en el archivo principal (index.js)
