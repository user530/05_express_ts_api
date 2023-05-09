import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import connect from './db/connect';
import { getAllPeople } from './db/services/People';
import apiDataSource from './db/datasource';
import { People } from './db/entities/person.entity';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

// const dbConnection = await connect();
apiDataSource
  .initialize()
  .then(() => console.log('DB connected'))
  .catch((err) => {
    throw err;
  });

app.get('/', async (req: Request, res: Response) => {
  // const people = await getAllPeople(dbConnection);
  const ppl = await apiDataSource.getRepository(People).find();

  res.status(200).json(ppl);
});

app.listen(port, async () => {
  console.log(`[server]: Express server is up and running at port ${port}...`);
});
