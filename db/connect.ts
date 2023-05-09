import apiDataSource from './datasource';

// DB connection
export default async function connectDB() {
  const connection = await apiDataSource.initialize();

  if (!connection) throw new Error('Failed to establish DB connection!');

  console.log('DB connection established successfully!');
  return connection;
}
