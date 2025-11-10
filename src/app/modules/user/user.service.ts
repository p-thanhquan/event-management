import { Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import type { IUserRepository } from './repository/user.repository.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@Inject('IUserRepository') private readonly userRepo: IUserRepository) {}

  findAll() {
    return this.userRepo.findAll();
  }

  findById(id: string) {
    return this.userRepo.findById(id);
  }

  findByEmail(email: string) {
    return this.userRepo.findByEmail(email);
  }

  async create(data: CreateUserDto) {
    const exists = await this.userRepo.findByEmail(data.email);
    if (exists) throw new UnauthorizedException('Email already exists');

    const hash = await bcrypt.hash(data.password, 10);
    return this.userRepo.create({ ...data, password: hash });
  }
}
