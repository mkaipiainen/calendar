import express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import calendarRouter from './routes/calendar.route';
const app = express();
// Swagger setup
const swaggerOptions = {
  swaggerDefinition: {
    myapi: '3.0.0',
    info: {
      title: 'API',
      version: '1.0.0',
      description: 'API documentation',
    },
    servers: [
      {
        url: '0.0.0.0:80',
      },
    ],
  },
  apis: ['./src/routes/*.js'], // files containing annotations as above
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/calendar', calendarRouter);
app.listen(80, '0.0.0.0', () => console.log('Server is listening...'));
