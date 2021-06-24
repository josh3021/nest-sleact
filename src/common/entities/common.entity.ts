import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { DateEntity } from './date.entity';

export abstract class CommonEntity extends DateEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
