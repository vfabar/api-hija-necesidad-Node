import express from 'express';
import { juegoController } from './controllers/juegos.controller.js';

const app = express();
const PORT = 3000;

app.use(express.json());

// --- ENRUTAMIENTO DIRECTO A LOS CONTROLADORES ---
app.get('/api/juegos', juegoController.getJuegos);
app.get('/api/juegos/:id', juegoController.getJuegoById);
app.post('/api/juegos', juegoController.createJuego);
app.delete('/api/juegos/:id', juegoController.deleteJuego);
app.put('/api/juegos/:id', juegoController.updateJuego);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});