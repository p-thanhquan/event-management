import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from '../entity/event.entity';
import { CreateEventDto } from '../dto/create-event.dto';
import { IEventRepository } from './event.repository.interface';

@Injectable()
export class EventRepository implements IEventRepository {
  constructor(
    @InjectRepository(Event)
    private readonly repo: Repository<Event>,
  ) {}

  async findAll(): Promise<Event[]> {
    return this.repo.find();
  }

  async findOne(id: string): Promise<Event | null> {
    return this.repo.findOneBy({ id });
  }

  async create(dto: CreateEventDto): Promise<Event> {
    const event = this.repo.create(dto);
    return this.repo.save(event);
  }

  async update(id: string, dto: CreateEventDto): Promise<Event | null> {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
