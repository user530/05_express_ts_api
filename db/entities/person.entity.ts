import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class People {
  @PrimaryGeneratedColumn()
  PersonId: number;

  @Column()
  FirstName: string;

  @Column()
  LastName: string;

  @Column()
  Address: string;

  @Column()
  Age: number;

  @Column()
  isUser: boolean;
}
