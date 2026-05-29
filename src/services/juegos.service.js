import { juegoModel } from '../models/juegos.model.js';

export const juegoService = {
    obtenerTodos: () => {
        return juegoModel.getAll();
    },

    obtenerPorId: (id) => {
        const juego = juegoModel.getById(id);
        if (!juego) throw new Error("JUEGO_NOT_FOUND");
        return juego;
    },

    crearJuego: (datosJuego) => {
        if (!datosJuego.titulo || !datosJuego.genero) {
            throw new Error("INVALID_DATA");
        }
        return juegoModel.create(datosJuego);
    },

    eliminarJuego: (id) => {
        const eliminado = juegoModel.delete(id);
        if (!eliminado) throw new Error("JUEGO_NOT_FOUND");
        return true;
    },
    
    actualizarJuego: (id, datosNuevos) => {
        // Validación: No permitir campos vacíos en la actualización
        if (!datosNuevos.titulo || !datosNuevos.genero) {
            throw new Error("INVALID_DATA");
        }

        const juegoActualizado = juegoModel.update(id, datosNuevos);
        
        // Si el modelo devolvió null, significa que ese ID no existía
        if (!juegoActualizado) {
            throw new Error("JUEGO_NOT_FOUND");
        }

        return juegoActualizado;
    }
};