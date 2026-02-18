Hi 👋  
This is my backend internship assignment.

I tried to make a simple Task Manager API using Node.js and Express.  
I am still learning backend so code might not be perfect 😅

Run project:

npm install
create .env
npm run dev

Routes:

POST /api/auth/register
POST /api/auth/login
GET /api/tasks
POST /api/tasks
PUT /api/tasks/:id
DELETE /api/tasks/:id

# Backend Internship Task



---

## Tech used
Node js  
Express js  
MongoDB  
Mongoose  
JWT  

---

## How to run

Step 1:
install packages

npm install


Step 2:
create .env file in root folder and paste this

PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=mysupersecret


Step 3:
run server

npm run dev

server starts at:
http://localhost:5000

---

## Routes

Auth:
POST /api/auth/register  
POST /api/auth/login  

Tasks:
GET /api/tasks  
POST /api/tasks  
PUT /api/tasks/:id  
DELETE /api/tasks/:id  

All task routes need token.

---

## What I learned
- how backend folder structure works
- how JWT authentication works
- how to connect MongoDB
- how routes/controllers work

---

Thanks for checking my assignment 🙂
