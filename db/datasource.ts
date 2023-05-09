import dotenv from 'dotenv';
import { DataSource } from 'typeorm';

dotenv.config();

const apiDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [`${__dirname}/entities/*.js`],
  logging: true,
  synchronize: process.env.NODE_ENV === 'development',
});

export default apiDataSource;
