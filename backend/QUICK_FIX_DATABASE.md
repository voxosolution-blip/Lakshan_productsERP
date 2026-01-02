# Quick Database Fix

## The Problem
Your DATABASE_URL is pointing to Prisma Cloud, but the connection is failing. Error: `P5010: Cannot fetch data from service`

## Quick Solution: Use Local PostgreSQL

### Step 1: Update .env file

Open `backend/.env` and replace the DATABASE_URL with:

```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/dairy_erp?schema=public"
```

**Important:** Replace `YOUR_PASSWORD` with your actual PostgreSQL password.

### Step 2: Create Database

Open PostgreSQL (pgAdmin or psql) and run:
```sql
CREATE DATABASE dairy_erp;
```

### Step 3: Run Setup Commands

```bash
cd backend
npm run prisma:migrate
npm run prisma:seed
```

### Step 4: Restart Backend

The backend server needs to be restarted to pick up the new database connection.

---

## Alternative: Don't Have PostgreSQL?

If you don't have PostgreSQL installed and want to test quickly:

1. **Download PostgreSQL**: https://www.postgresql.org/download/windows/
2. **Install it** (remember the password you set!)
3. **Follow steps above**

Or ask me to switch to SQLite for quick testing (but PostgreSQL is recommended for production).


