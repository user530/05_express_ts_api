import apiDataSource from './datasource';

// DB connection
export default async function connectDB() {
  const connection = await apiDataSource.initialize();

  if (!connection) throw new Error('[DB]: Failed to establish DB connection!');

  console.log('[DB]: DB connection established successfully!');
  return connection;
}
