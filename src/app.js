const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger'); // Asegúrate de que tu archivo swagger se llame swagger.js dentro de src/config/

const app = express(); // Se crea la app una sola vez

app.use(express.json());

// Configuración de Swagger
app.use(
    '/swagger',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);
console.log(JSON.stringify(swaggerSpec, null, 2));
// Tus rutas de la API
app.use(
    '/api/needs',
    require('./routes/needs.routes') // Esto buscará en src/routes/needs.routes.js
);

app.use(
    '/api/needsState',
    require('./routes/needsState.routes') // Esto buscará en src/routes/needsState.routes.js
);

app.use(
    '/api/needsType',
    require('./routes/needsType.routes') // Esto buscará en src/routes/needsType.routes.js
);

app.use(
    '/api/ubication',
    require('./routes/ubication.routes') // Esto buscará en src/routes/ubication.routes.js
);

app.use(
    '/api/region',
    require('./routes/region.routes') // Esto buscará en src/routes/region.routes.js
);

app.use(
    '/api/distric',
    require('./routes/distric.routes') // Esto buscará en src/routes/distric.routes.js
);
module.exports = app;
