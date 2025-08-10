# MERN URL Shortener

A simple URL shortening web application built with the **MERN stack** and **Vite** for the frontend.  
Users can submit long URLs and get a shortened version. Visiting the short URL will redirect to the original.  
Includes an **admin page** to list all shortened URLs and track visit counts.

---

## Features

### User Side
- Input a long URL and receive a short URL.
- Visiting the short URL redirects to the original long URL.

### Admin Side
- View a list of all shortened URLs.
- Track how many times each short URL was visited.
- (Optional) Secure with a basic admin token.

---

## Tech Stack
- **Frontend:** React + Vite + TailwindCSS + Axios
- **Backend:** Node.js + Express
- **Database:** MongoDB (Mongoose)
- **Other:** nanoid for generating short codes

---

## Project Structure
```
project/
│
├── backend/
│   ├── models/Url.js
│   ├── server.js
│   ├── .env
│   ├── package.json
│   └── package-lock.json
│
├── frontend/url-shortner   # Vite React App
│   ├── public/
│   ├── src/
│   │   ├── admin/
│   │   │   └── Admin.jsx
│   │   ├── assets/
│   │   │   └── logo.svg
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── Homepage.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── .env
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── README.md
│
└── screenshots/

```

---

## Installation & Setup

### 1. Clone Repository
```bash
git clone https://github.com/vidyabhandari/url-shortner
cd url-shortener
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:
```env
MONGO_URI=mongodb://localhost:27017/urlshortener
BASE_URL=http://localhost:5000
PORT=5000
ADMIN_TOKEN=supersecrettoken
```

Start backend:
```bash
npm run dev   # or nodemon server.js
```

---

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

Create a `.env` file in `frontend/`:
```env
VITE_BASE_URL=http://localhost:5000
```

Start frontend:
```bash
npm run dev
```

---

## Usage
- Visit **`http://localhost:5173`** → Enter a long URL → Get a short link.
- Visit **`http://localhost:5173/admin`** → View all URLs and click counts (requires admin token if enabled).

---

## API Endpoints

### `POST /api/shorten`
**Body:**
```json
{
  "longUrl": "https://example.com/some/very/long/path"
}
```
**Response:**
```json
{
  "shortUrl": "http://localhost:5000/abc123"
}
```

### `GET /:shortcode`
Redirects to the original URL.

### `GET /api/admin/urls`
Returns all shortened URLs with their visit counts.  
**Optional Authorization:**
```
Authorization: Bearer <ADMIN_TOKEN>
```

