const app = require('./app');
const sequelize = require('./config/database');

const PORT = 3000;

async function startServer() {
    try {
        // Conectar y autenticar
        await sequelize.authenticate();
        console.log('Base de datos conectada con éxito.');

        // OJO: alter: true puede ser peligroso y lento en Docker si la DB está fría.
        // Si ya tienes las tablas creadas por los servicios de Spring Boot, 
        // considera quitar el sync o usar { force: false }
        await sequelize.sync({ alter: true });
        console.log('Tablas sincronizadas');

    } catch (error) {
        console.error('*** ERROR AL CONECTAR LA BASE DE DATOS ***');
        console.error(error);
        console.log('El servidor iniciará de todos modos para mantener el contenedor vivo...');
    } finally {
        // Importante: app.listen DEBE ejecutarse siempre, y escuchar en '0.0.0.0'
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`Servidor ejecutándose en puerto ${PORT}`);
        });
    }
}

startServer();