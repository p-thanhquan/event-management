import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../core/config/database.config';
import * as AppModules from './modules'

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
	...Object.values(AppModules),
  ],
})

export class AppModule {}
