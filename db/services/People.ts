import { DataSource } from 'typeorm';
import { People } from '../entities/person.entity';

export const getAllPeople = async (dataSource: DataSource) => {
  const people = await dataSource.getRepository(People).find();
  return people;
};
