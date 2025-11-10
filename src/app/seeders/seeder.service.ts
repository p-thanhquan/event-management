import { DataSource } from 'typeorm';
import { seedUser } from './seeds/user.seed';

export async function runSeeder(dataSource: DataSource) {
  console.log('🌱 Starting seeders...');
  await seedUser(dataSource);
  console.log('🌱 Seeding completed!');
}
