import { User } from '../entity/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';

export interface IUserRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(data: CreateUserDto & { password: string }): Promise<User>;
  findAll(): Promise<User[]>;
}
