import { juegoService } from '../services/juegos.service.js';

export const juegoController = {
    getJuegos: (req, res) => {
        const juegos = juegoService.obtenerTodos();
        res.json(juegos);
    },

    getJuegoById: (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const juego = juegoService.obtenerPorId(id);
            res.json(juego);
        } catch (error) {
            if (error.message === "JUEGO_NOT_FOUND") {
                return res.status(404).json({ mensaje: "Juego no encontrado" });
            }
            res.status(500).json({ mensaje: "Error interno" });
        }
    },

    createJuego: (req, res) => {
        try {
            const nuevoJuego = juegoService.crearJuego(req.body);
            res.status(201).json(nuevoJuego);
        } catch (error) {
            if (error.message === "INVALID_DATA") {
                return res.status(400).json({ mensaje: "Faltan campos obligatorios" });
            }
            res.status(500).json({ mensaje: "Error interno" });
        }
    },

    deleteJuego: (req, res) => {
        try {
            const id = parseInt(req.params.id);
            juegoService.eliminarJuego(id);
            res.json({ mensaje: `Juego con ID ${id} eliminado correctamente` });
        } catch (error) {
            if (error.message === "JUEGO_NOT_FOUND") {
                return res.status(404).json({ mensaje: "Juego no encontrado" });
            }
            res.status(500).json({ mensaje: "Error interno" });
        }
    },

    updateJuego: (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const juegoEditado = juegoService.actualizarJuego(id, req.body);
            
            // 200 OK junto con el objeto ya modificado
            res.json(juegoEditado); 
        } catch (error) {
            if (error.message === "INVALID_DATA") {
                return res.status(400).json({ mensaje: "Faltan campos obligatorios para actualizar" });
            }
            if (error.message === "JUEGO_NOT_FOUND") {
                return res.status(404).json({ mensaje: "Juego no encontrado para actualizar" });
            }
            res.status(500).json({ mensaje: "Error interno" });
        }
    }
};