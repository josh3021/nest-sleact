import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dotenv from 'dotenv';
dotenv.config();
console.log(__dirname);
const config: TypeOrmModuleOptions = {
  type: 'mariadb',
  host: process.env.TYPEORM_HOST,
  port: +process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/src/migrations/*.ts'],
  cli: { migrationsDir: 'src/migrations' },
  charset: 'utf8mb4',
  logging: false,
  synchronize: true,
  keepConnectionAlive: true,
};
export = config;
