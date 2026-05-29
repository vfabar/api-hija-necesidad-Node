// Base de datos simulada
let juegos = [
    { id: 1, titulo: "Elden Ring", genero: "RPG" },
    { id: 2, titulo: "Hollow Knight", genero: "Metroidvania" },
    { id: 3, titulo: "Cuphead", genero: "Platformer" }

];

// Operaciones directas con los datos (simulando métodos de un ORM como Sequelize o Mongoose)
export const juegoModel = {
    getAll: () => juegos,
    
    getById: (id) => juegos.find(j => j.id === id),
    
    create: (nuevoJuego) => {
        const juegoConId = { id: juegos.length + 1, ...nuevoJuego };
        juegos.push(juegoConId);
        return juegoConId;
    },
    
    delete: (id) => {
        const index = juegos.findIndex(j => j.id === id);
        if (index === -1) return false;
        juegos.splice(index, 1);
        return true;
    },

    update: (id, datosActualizados) => {
        const index = juegos.findIndex(j => j.id === id);
        if (index === -1) return null; // Si no existe, retornamos null

        // Mantenemos el ID original, pero sobreescribimos el resto con los nuevos datos
        juegos[index] = { id, ...datosActualizados };
        return juegos[index]; // Retornamos el juego ya modificado
    }
};