# 🚀 Quick Start Guide - Install PostgreSQL

## Download Link
👉 **https://www.postgresql.org/download/windows/**

Click "Download the installer"

---

## Installation Steps

### 1. Run the Installer
- Double-click the downloaded `.exe` file
- Click **Next** through the screens

### 2. Choose Components (Keep Defaults)
- ✅ PostgreSQL Server
- ✅ pgAdmin 4
- ✅ Command Line Tools

### 3. Set Password ⚠️ REMEMBER THIS!
- When asked for password, enter one (e.g., `postgres123`)
- **Write it down!** You'll need it later

### 4. Port (Keep Default)
- Port: **5432** (default)

### 5. Finish Installation
- Wait for installation to complete
- Click **Finish**

---

## After Installation

### Create Database

**Option A: Using Command Line**
1. Press **Windows Key**
2. Type: **"SQL Shell (psql)"** and press Enter
3. Press Enter 4 times (to accept defaults)
4. Enter your password when prompted
5. Type: `CREATE DATABASE dairy_erp;`
6. Press Enter
7. Type: `\q` and press Enter to exit

**Option B: Using pgAdmin 4 (Easier)**
1. Open **pgAdmin 4** from Start Menu
2. Enter your password when asked
3. Right-click **Databases** → **Create** → **Database**
4. Name: `dairy_erp`
5. Click **Save**

---

## Update Your Project

### 1. Edit `backend/.env`

Find this line:
```
DATABASE_URL="prisma+postgres://..."
```

Replace with:
```
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/dairy_erp?schema=public"
```

**Replace `YOUR_PASSWORD` with the password you set during installation!**

### 2. Run Setup Commands

Open terminal in your project and run:

```bash
cd backend
npm run prisma:migrate
npm run prisma:seed
```

### 3. Restart Backend

Your backend server should now work! 🎉

---

## Need Help?

See `INSTALL_POSTGRESQL.md` for detailed instructions with screenshots guidance.


