import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';
import bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}

  async createUser({
    email,
    nickname,
    password,
  }: CreateUserDto): Promise<void> {
    const user = await this.usersRepository.findOne({ where: { email } });
    if (user) {
      // user already exists
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    this.usersRepository.save(
      this.usersRepository.create({
        email,
        nickname,
        password: hashedPassword,
      }),
    );
  }
}
