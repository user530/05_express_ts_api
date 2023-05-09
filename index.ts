import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import connect from './db/connect';
import { getAllPeople } from './db/services/People';

dotenv.config();

main();

async function main() {
  const dbConnection = await connect();

  const app: Express = express();
  const port = process.env.PORT || 5000;

  app.get('/', async (req: Request, res: Response) => {
    const people = await getAllPeople(dbConnection);

    res.status(200).json(people);
  });

  app.listen(port, async () => {
    console.log(
      `[server]: Express server is up and running at port ${port}...`
    );
  });
}
