import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { routes } from './routes';
import { AppError } from './errors/AppError';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.status(200).json({});
})

app.use(routes);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      error: `${error.message}`,
    });
  }

  console.log('❗❗❗ error', error);

  return response.status(500).json({
    status: 'error',
    error: 'Internal Server Error'
  })
})

app.listen('3333', () => {
  console.log('🏴‍☠️🏴‍☠️🏴‍☠️ app started on port 3333')
});
