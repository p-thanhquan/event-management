import { Event } from '../entity/event.entity';
import { CreateEventDto } from '../dto/create-event.dto';

export interface IEventRepository {
  findAll(): Promise<Event[]>;
  findOne(id: string): Promise<Event | null>;
  create(dto: CreateEventDto): Promise<Event>;
  update(id: string, dto: CreateEventDto): Promise<Event | null>;
  remove(id: string): Promise<void>;
}
