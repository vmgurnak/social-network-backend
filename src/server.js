import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import env from './utils/env.js';
import notFoundHundler from './middlewares/notFoundHandler.js';
import errorHandler from './middlewares/errorHandler.js';
import Router from './routers/router.js';

const PORT = env('PORT', 3000);

const startServer = () => {
  const app = express();

  const corsOption = {
    origin: '*',
    // optionsSuccessStatus: 200,
  };

  const logger = pino({
    transport: {
      target: 'pino-pretty',
    },
  });

  app.use(logger);
  app.use(cors(corsOption));
  app.use(express.json());

  app.use('/api', Router);

  app.use(notFoundHundler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

export default startServer;
