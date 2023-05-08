import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

const port = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the simple API!');
});

app.listen(port, () => {
  console.log(`[server]: Express server is up and running at port ${port}...`);
});
