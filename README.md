# coffeeshop-app
# ☕ Coffeeshop App

A simple **3-tier full-stack project** demonstrating a coffeeshop menu with images.  
Built with **React (Vite + Tailwind)** frontend, **Node.js/Express** backend, and **PostgreSQL** database.

---

## 📂 Project Structure

```
coffeeshop-app/
│
├── frontend/            # React + Vite + Tailwind frontend
│   ├── src/
│   │   ├── assets/images/   # coffee images (cappuccino.jpg, latte.jpg, espresso.jpg)
│   │   └── components/      # React components
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.cjs
│   └── postcss.config.cjs
│
├── backend/             # Express backend
│   ├── src/
│   │   ├── db.js
│   │   ├── routes/products.js
│   │   ├── seed.js
│   │   └── server.js
│   ├── .env             # environment variables (ignored by git)
│   ├── .env.example
│   └── package.json
│
└── db/
    └── init.sql         # Database schema + seed rows
```

---

## 🛠️ Tech Stack

- **Frontend:** React 18, Vite, TailwindCSS, Axios  
- **Backend:** Node.js, Express, CORS, dotenv, pg (Postgres client)  
- **Database:** PostgreSQL 14+  
- **Images:** served from `frontend/src/assets/images`  

---

## ⚙️ Setup Instructions

### 1. Clone the repo
```bash
git clone https://github.com/your-org/coffeeshop-app.git
cd coffeeshop-app
```

### 2. Database Setup
Make sure PostgreSQL is running.

- Create database and table:
```bash
psql -U postgres -f db/init.sql
```

- This will create:
  - Database: `coffeeshop`
  - Table: `products`
  - Seed rows: Cappuccino, Latte, Espresso

### 3. Backend Setup
```bash
cd backend
cp .env.example .env   # configure if needed
npm install
npm run dev
```
Backend runs on [http://localhost:4000](http://localhost:4000).

Test API:
```bash
curl http://localhost:4000/api/products
```

### 4. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on [http://localhost:5173](http://localhost:5173).

---

## 📸 Images

Add coffee images in:
```
frontend/src/assets/images/
```
Example filenames (match database `image_filename` column):
- `cappuccino.jpg`
- `latte.jpg`
- `espresso.jpg`

---

## 🔗 API Endpoints

- `GET /api/products` → list all products  
- `GET /api/products/:id` → get product by id  

Sample response:
```json
[
  {
    "id": 1,
    "name": "Cappuccino",
    "description": "Strong espresso with steamed milk foam",
    "price": 160.00,
    "image_filename": "cappuccino.jpg"
  }
]
```

---

## 🚀 Running with Docker (Optional)

Create a `docker-compose.yml` to spin up **frontend, backend, and Postgres** in one command:

```bash
docker compose up --build
```

---

## ✅ Features

- 3-tier architecture (frontend → backend → database)  
- RESTful API with Express  
- React frontend consuming API  
- TailwindCSS styling  
- PostgreSQL persistence with schema + seed  

---

## 👨‍💻 Author

Made for practice/demo in a real organization style project setup.  
