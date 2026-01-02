# Update .env File for Docker PostgreSQL

## ✅ Docker PostgreSQL is Running!

The database is now running on **port 5433** (because port 5432 was already in use).

## Update backend/.env File

Open `backend/.env` and find the `DATABASE_URL` line. Replace it with:

```env
DATABASE_URL="postgresql://postgres:postgres123@localhost:5433/dairy_erp?schema=public"
```

**Important:** Notice the port is **5433** (not 5432)!

## Connection Details

- **Host:** localhost
- **Port:** 5433
- **Database:** dairy_erp
- **Username:** postgres
- **Password:** postgres123

## After Updating .env

Run these commands:

```bash
cd backend
npm run prisma:migrate
npm run prisma:seed
```

Then restart your backend server!

## Verify Database is Ready

Wait a few seconds for the database to fully start, then run:

```bash
docker-compose logs postgres
```

You should see: "database system is ready to accept connections"


