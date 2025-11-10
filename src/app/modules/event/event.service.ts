import { Inject, Injectable } from '@nestjs/common';
import type { IEventRepository } from './repository/event.repository.interface';
import { Event } from './entity/event.entity';
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class EventService {
  constructor(
    @Inject('IEventRepository')
    private readonly eventRepository: IEventRepository,
  ) {}

  findAll(): Promise<Event[]> {
    return this.eventRepository.findAll();
  }

  findOne(id: string): Promise<Event | null> {
    return this.eventRepository.findOne(id);
  }

  create(dto: CreateEventDto): Promise<Event> {
    return this.eventRepository.create(dto);
  }

  update(id: string, dto: CreateEventDto): Promise<Event | null> {
    return this.eventRepository.update(id, dto);
  }

  remove(id: string): Promise<void> {
    return this.eventRepository.remove(id);
  }
}
