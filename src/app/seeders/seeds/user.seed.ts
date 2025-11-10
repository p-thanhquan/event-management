import { DataSource } from 'typeorm';
import { User } from '../../modules/user/entity/user.entity';
import * as bcrypt from 'bcryptjs';

export async function seedUser(dataSource: DataSource) {
  const repo = dataSource.getRepository(User);

  const adminEmail = 'admin@example.com';
  const existing = await repo.findOneBy({ email: adminEmail });

  if (existing) {
    console.log('👤 Admin already exists, skipping seed.');
    return;
  }

  const passwordHash = await bcrypt.hash('Admin@123', 10);

  const admin = repo.create({
    name: 'Administrator',
    email: adminEmail,
    password: passwordHash,
    role: 'admin',
  });

  await repo.save(admin);

  console.log('✅ Admin user created:', admin.email);
}
