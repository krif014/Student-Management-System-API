🎓 Student Management System (Full Stack)

A modern Full-Stack Student Management System built with Node.js, Express, MongoDB (Backend) and React + Tailwind CSS (Frontend).

It demonstrates RESTful API development, CRUD operations, and clean UI integration, with full API documentation using Swagger.

🏷️ Tech Stack Badges

<p align="left"> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" /> <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" /> <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" /> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" /> <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white" /> </p>

🖼️ Project Preview

📊 Frontend UI Preview

<p align="center">
  <img src="./assets/frontend-preview.png" alt="Frontend Preview" width="800" />
</p>

📚 Swagger API Preview

<p align="center">
  <img src="./assets/frontend-preview.png" alt="Frontend Preview" width="800" />
</p>

✨ Features

🔹 Backend (API)

➕ Create a student

📄 Get all students

🔍 Get student by ID

✏️ Update student details

❌ Delete a student

📚 Swagger API documentation

🌐 CORS enabled

⚙️ Environment configuration

🔹 Frontend

➕ Add new students

✏️ Edit student details inline

👀 View student details

❌ Delete students

🔄 Real-time API updates

⚡ Clean UI with Tailwind CSS

🛠️ Tech Stack

Backend

Node.js

Express

MongoDB (Mongoose)

Swagger (swagger-ui-express, swagger-jsdoc)

dotenv

Nodemon

Frontend

React (Hooks)

Axios

Tailwind CSS

📁 Project Structure

student-management/

│

├── backend/

│   ├── config/

│   ├── controllers/

│   ├── models/

│   ├── routes/

│   ├── docs/

│   ├── server.js

│   ├── .env

│   └── package.json

│

├── frontend/

│   ├── src/

│   │   ├── App.jsx

│   │   ├── main.jsx

│   │   └── index.css

│   └── package.json

⚙️ Installation & Setup

1️⃣ Clone the repository

git clone https://github.com/my-username/my-repo-name.git

cd student-management

2️⃣ Backend Setup

cd backend

npm install

🔐 Create .env

MONGO_URI=mongodb://127.0.0.1:27017/studentDB

PORT=5000

▶️ Run Backend

npm run dev

3️⃣ Frontend Setup

cd frontend

npm install

npm run dev

📡 API Endpoints

Method	Endpoint	Description

POST	/api/students	Create a student

GET	/api/students	Get all students

GET	/api/students/:id	Get single student

PUT	/api/students/:id	Update student

DELETE	/api/students/:id	Delete student

🧪 Testing the API

You can test using:

🧾 Swagger UI

👉 http://localhost:5000/api-docs

🧪 Postman / Insomnia

🌐 Browser (GET requests only)

📚 Swagger Preview

Once the backend is running, access:

👉 http://localhost:5000/api-docs

This provides a visual API interface where you can:

Test endpoints

View request/response formats

Explore your API easily

🌐 Frontend Preview

Run the frontend and open:

👉 http://localhost:5173
 (or your Vite port)

UI Features:

Add student form

Student list

Edit & delete actions

Real-time updates

📦 Example Request

➕ Create Student

POST /api/students

{
  "name": "Krif",
  "age": 17,
  "course": "Backend Development"
}

💡 Future Improvements

🔐 Authentication (JWT)

🧑‍🤝‍🧑 Role-based access (Admin/Student)

📁 File uploads (profile images)

📊 Dashboard analytics

💬 Real-time chat

👨‍💻 Author

Krif

Aspiring Full-Stack Developer 🚀

🤝 Contributing

Contributions are welcome!

Fork the repository

Create your feature branch

Commit changes

Open a Pull Request

⭐ Support

If you like this project:

⭐ Star the repo

🍴 Fork it

🛠️ Contribute

📜 License

This project is licensed under the MIT License.
