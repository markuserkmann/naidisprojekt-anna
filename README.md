## Project Structure

```text
naidisprojekt-anna/
├── backend/
│   ├── docker-compose.yml
│   ├── Dockerfile
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
├── frontend/
│   ├── src/app/
│   ├── public/
│   ├── package.json
│   └── package-lock.json
└── README.md
```

## Requirements

- Node.js 20+ recommended
- npm
- Docker
- Docker Compose

## Frontend

Install dependencies and start the Next.js app:

```bash
cd frontend
npm install
npm run dev
```

Frontend default URL:

```text
http://localhost:3000
```

## Backend

Install dependencies and start the Express app locally:

```bash
cd backend
npm install
npm start
```

Backend local URL:

```text
http://localhost:8000/api/health
```

## Docker Setup

The backend folder includes a Docker Compose setup for:

- `app` for the Node backend
- `mysql` for the database
- `phpmyadmin` for database ez admin


```bash
cd backend
docker compose up --build
```

Services:

- Backend: `http://localhost:8000`
- MySQL host port: `7500`
- phpMyAdmin: `http://localhost:8080`

phpMyAdmin login:

- Server: `mysql`
- Username: `root`
- Password: `root_password`

## Database Defaults

- Database: `app_db`
- App user: `app_user`
- App password: `app_password`
- Root password: `root_password`