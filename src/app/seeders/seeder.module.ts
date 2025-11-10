import { AppDataSource } from '../../core/config/data-source';
import { runSeeder } from './seeder.service';

AppDataSource.initialize()
  .then(async () => {
    console.log('✅ Connected to database');
    await runSeeder(AppDataSource);
    await AppDataSource.destroy();
    console.log('🌱 Seeder finished successfully.');
  })
  .catch((err) => {
    console.error('❌ Seeder failed:', err);
    process.exit(1);
  });
