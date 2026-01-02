# Database Setup Guide

## Current Issue
The database connection is failing. You need to set up a PostgreSQL database connection.

## Option 1: Use Local PostgreSQL (Recommended for Development)

### Step 1: Install PostgreSQL
If you don't have PostgreSQL installed:
- Download from: https://www.postgresql.org/download/windows/
- Install and remember the password you set

### Step 2: Create Database
Open PostgreSQL command line (psql) or pgAdmin and run:
```sql
CREATE DATABASE dairy_erp;
```

### Step 3: Update .env File
Edit `backend/.env` and set:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/dairy_erp?schema=public"
```

Replace:
- `username` with your PostgreSQL username (usually `postgres`)
- `password` with your PostgreSQL password
- `5432` is the default PostgreSQL port (change if different)

### Step 4: Run Migrations
```bash
cd backend
npm run prisma:migrate
```

### Step 5: Seed Database
```bash
npm run prisma:seed
```

## Option 2: Use Prisma Cloud Database

If you want to use Prisma's cloud database, make sure:
1. The database URL in `.env` is correct
2. The database server is running and accessible
3. Your network can reach the database server

## Option 3: Use SQLite for Quick Testing (Not Recommended for Production)

If you just want to test quickly without PostgreSQL:

1. Update `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}
```

2. Update `.env`:
```env
DATABASE_URL="file:./dev.db"
```

3. Run migrations:
```bash
npm run prisma:migrate
npm run prisma:seed
```

## Quick Check

After setting up, test the connection:
```bash
cd backend
npx prisma db push
```

If successful, you should see: "Database synced successfully"


