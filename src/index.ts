import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router from './router/router';
import { Database } from './modules/database';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json()); // mapea la inf en formato json
app.use(express.urlencoded({extended:true})); // en url

app.use(express.static("public"))
app.set('view engine', 'ejs');
app.use(bodyParser.text());

app.use('/', router);

//Database();


app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});