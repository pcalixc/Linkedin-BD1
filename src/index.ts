import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { Database } from './modules/database';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

Database();



app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});



