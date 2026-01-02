// Quick database connection test
import prisma from './src/config/db.js';

async function testConnection() {
  try {
    console.log('Testing database connection...');
    await prisma.$connect();
    console.log('✅ Database connected successfully!');
    
    // Try a simple query
    const userCount = await prisma.user.count();
    console.log(`✅ User table exists. Current user count: ${userCount}`);
    
    await prisma.$disconnect();
    console.log('✅ Connection closed.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Database connection failed:');
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    if (error.meta) {
      console.error('Error details:', error.meta);
    }
    process.exit(1);
  }
}

testConnection();


