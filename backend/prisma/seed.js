// Seed script to create initial admin user
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // Create admin user
  const adminUsername = 'admin';
  const adminPassword = 'admin123'; // Change this after first login!
  const adminEmail = 'admin@dairyerp.com';

  // Check if admin already exists
  const existingAdmin = await prisma.user.findUnique({
    where: { username: adminUsername },
  });

  if (existingAdmin) {
    console.log('⚠️  Admin user already exists. Skipping...');
    return;
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  // Create admin user
  const admin = await prisma.user.create({
    data: {
      username: adminUsername,
      email: adminEmail,
      password: hashedPassword,
      role: 'ADMIN',
      fullName: 'System Administrator',
      isActive: true,
    },
  });

  console.log('✅ Admin user created successfully!');
  console.log('📧 Username:', adminUsername);
  console.log('🔑 Password:', adminPassword);
  console.log('⚠️  IMPORTANT: Change the password after first login!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


