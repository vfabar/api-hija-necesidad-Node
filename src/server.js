const app = require('./app');
const sequelize = require('./config/database');

const PORT = 3000;

sequelize.authenticate()
.then(async () => {

    console.log('Base de datos conectada');

    await sequelize.sync({ alter: true });

    console.log('Tablas sincronizadas');

    app.listen(PORT, () => {
        console.log(`Servidor ejecutándose en puerto ${PORT}`);
    });

})
.catch(error => {
    console.log(error);
});