import express from 'express';
import cors from 'cors';
import envs from './configs/environments.js';
import mensajeriaRoutes from './routes/mensajeria.routes.js';
import connect from './configs/mongo.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('', mensajeriaRoutes);

console.log('Conectando a la base de datos...');
connect()
  .then(() => {
    console.log('MongoDB Conectado Correctamente');
    app.listen(envs.port, async () => {
      console.log(`Servidor iniciado en el PUERTO: ${envs.port}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(-1);
  });