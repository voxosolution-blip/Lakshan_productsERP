# How to Install PostgreSQL on Windows

## Step-by-Step Installation Guide

### Step 1: Download PostgreSQL

1. Go to: **https://www.postgresql.org/download/windows/**
2. Click on **"Download the installer"** button
3. Or directly go to: **https://www.enterprisedb.com/downloads/postgres-postgresql-downloads**
4. Select the latest version (e.g., PostgreSQL 16.x)
5. Choose **Windows x86-64** (64-bit) installer
6. Click **Download**

### Step 2: Run the Installer

1. Double-click the downloaded `.exe` file (e.g., `postgresql-16.x-x64.exe`)
2. Click **Next** on the welcome screen
3. Choose installation directory (default is fine: `C:\Program Files\PostgreSQL\16`)
4. Click **Next**

### Step 3: Select Components

Keep default selections:
- ✅ PostgreSQL Server
- ✅ pgAdmin 4 (Graphical tool to manage database)
- ✅ Stack Builder
- ✅ Command Line Tools

Click **Next**

### Step 4: Choose Data Directory

Keep default: `C:\Program Files\PostgreSQL\16\data`
Click **Next**

### Step 5: Set PostgreSQL Password ⚠️ IMPORTANT!

1. Enter a password for the database superuser (postgres)
2. **REMEMBER THIS PASSWORD** - you'll need it!
3. Example: `postgres123` or `admin123` (use something secure)
4. Click **Next**

### Step 6: Choose Port

- Keep default port: **5432**
- Click **Next**

### Step 7: Choose Locale

- Keep default: **Default locale**
- Click **Next**

### Step 8: Review and Install

1. Review the settings
2. Click **Next** to start installation
3. Wait for installation to complete (takes 2-5 minutes)
4. Click **Next** when done

### Step 9: Finish Installation

1. Uncheck **"Launch Stack Builder"** (we don't need it)
2. Click **Finish**

## ✅ Installation Complete!

### Verify Installation

1. Press **Windows Key + R**
2. Type: `cmd` and press Enter
3. Type: `psql --version` and press Enter
4. You should see the version number

## Next Steps: Set Up Your Database

After installation, follow these steps:

### Step 1: Open PostgreSQL Command Line

1. Press **Windows Key**
2. Type: **"SQL Shell (psql)"**
3. Press Enter

### Step 2: Connect to PostgreSQL

When prompted, press Enter for each option (using defaults):
- Server: [localhost] → **Press Enter**
- Database: [postgres] → **Press Enter**
- Port: [5432] → **Press Enter**
- Username: [postgres] → **Press Enter**
- Password: **Type the password you set during installation** → **Press Enter**

### Step 3: Create Database

In the psql prompt, type:
```sql
CREATE DATABASE dairy_erp;
```

Press Enter. You should see: `CREATE DATABASE`

Then type:
```sql
\q
```

Press Enter to exit.

### Step 4: Update Your Project

1. Open `backend/.env` file
2. Find the line: `DATABASE_URL=...`
3. Replace it with:
   ```env
   DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/dairy_erp?schema=public"
   ```
   Replace `YOUR_PASSWORD` with the password you set during installation.

4. Save the file

### Step 5: Run Database Setup

Open terminal in your project folder and run:
```bash
cd backend
npm run prisma:migrate
npm run prisma:seed
```

### Step 6: Restart Backend Server

Your backend should now connect to the database successfully!

## Troubleshooting

### Can't find psql command?
- PostgreSQL might not be in PATH
- Try using pgAdmin 4 (installed with PostgreSQL)
- Or add PostgreSQL to PATH manually

### Forgot the password?
- You'll need to reset it or reinstall PostgreSQL

### Port 5432 already in use?
- Another PostgreSQL instance might be running
- Change the port in Step 6 of installation

## Alternative: Use pgAdmin 4 (GUI Tool)

Instead of command line:

1. Open **pgAdmin 4** (installed with PostgreSQL)
2. Connect to server (use your password)
3. Right-click on **Databases** → **Create** → **Database**
4. Name: `dairy_erp`
5. Click **Save**

Then follow Step 4-6 above!


