# 🐳 Docker Setup for PostgreSQL

## Prerequisites

### Install Docker Desktop (if not installed)

1. **Download Docker Desktop for Windows:**
   - Go to: https://www.docker.com/products/docker-desktop/
   - Click "Download for Windows"
   - Run the installer
   - Restart your computer if prompted

2. **Start Docker Desktop:**
   - Open Docker Desktop from Start Menu
   - Wait for it to start (whale icon in system tray)

## Quick Start

### Step 1: Start PostgreSQL Container

In your project root directory, run:

```bash
docker-compose up -d
```

This will:
- Download PostgreSQL image (if not already downloaded)
- Create and start a PostgreSQL container
- Create the `dairy_erp` database automatically
- Set up user: `postgres` with password: `postgres123`

### Step 2: Update .env File

Open `backend/.env` and set:

```env
DATABASE_URL="postgresql://postgres:postgres123@localhost:5432/dairy_erp?schema=public"
```

### Step 3: Run Database Migrations

```bash
cd backend
npm run prisma:migrate
npm run prisma:seed
```

### Step 4: Restart Backend Server

Your backend should now connect to the database! 🎉

## Docker Commands

### Start Database
```bash
docker-compose up -d
```

### Stop Database
```bash
docker-compose down
```

### View Logs
```bash
docker-compose logs -f postgres
```

### Check if Running
```bash
docker-compose ps
```

### Remove Everything (including data)
```bash
docker-compose down -v
```

## Verify Database is Running

```bash
docker ps
```

You should see a container named `dairy-erp-db` running.

## Troubleshooting

### Port 5432 already in use?
If you have PostgreSQL installed locally, stop it first:
```bash
# Windows: Stop PostgreSQL service
net stop postgresql-x64-16
```

Or change the port in `docker-compose.yml`:
```yaml
ports:
  - "5433:5432"  # Use 5433 instead
```

Then update `.env`:
```env
DATABASE_URL="postgresql://postgres:postgres123@localhost:5433/dairy_erp?schema=public"
```

### Docker not starting?
- Make sure Docker Desktop is running
- Check if virtualization is enabled in BIOS
- Restart Docker Desktop

### Can't connect to database?
- Wait a few seconds after starting (database needs time to initialize)
- Check logs: `docker-compose logs postgres`
- Verify container is running: `docker ps`

## Benefits of Docker

✅ No need to install PostgreSQL on your system
✅ Easy to start/stop
✅ Isolated environment
✅ Easy to reset (just delete container)
✅ Same setup works on any machine with Docker
✅ No conflicts with other PostgreSQL installations


