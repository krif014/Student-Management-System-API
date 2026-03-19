🎓 Student Management System API

A RESTful API built with Node.js, Express, and MongoDB to manage student data.
This project demonstrates CRUD operations, API documentation with Swagger, and a clean backend structure.

🚀 Features

✅ Create a new student

📄 Get all students

🔍 Get a single student by ID

✏️ Update student details

❌ Delete a student

📚 API documentation with Swagger

🌐 CORS enabled

⚙️ Environment configuration with dotenv

🛠️ Tech Stack

Backend: Node.js, Express

Database: MongoDB (Mongoose)

API Docs: Swagger (swagger-ui-express, swagger-jsdoc)

Tools: Nodemon, dotenv

📁 Project Structure
student-management/
│
├── config/          # Database connection
├── controllers/     # Handles logic
├── models/          # Mongoose schemas
├── routes/          # API routes
├── docs/            # Swagger configuration
├── .env             # Environment variables
├── server.js        # Entry point
└── package.json

## ⚙️ Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/your-username/student-management.git
cd student-management
```

### 2. Install dependencies
npm install

### 3. Setup environment variables

Create a `.env` file:
MONGO_URI=mongodb://127.0.0.1:27017/studentDB
PORT=5000

### 4. Install nodemon (if not installed globally)
npm install -g nodemon
OR as a dev dependency:
npm install --save-dev nodemon
### 5. Run the server (Development)
npm run dev
👉 Make sure your `package.json` includes:
"scripts": {
  "dev": "nodemon server.js"
}
### 6. Run without nodemon (Production)
node server.js


📡 API Endpoints

POST	/api/students	Create a student
GET	/api/students	Get all students
GET	/api/students/	Get single student
PUT	/api/students/	Update student
DELETE	/api/students/	Delete student
🧪 Testing the API

You can test the API using:

Swagger UI

http://localhost:5000/api-docs

Postman or Insomnia

Browser (GET requests only)

📦 Example Request (POST)
POST /api/students
{
  "name": "Krif",
  "age": 17,
  "course": "Backend Development"
}
📊 Database View

Use MongoDB Compass to:

View students collection

Insert documents manually

Edit or delete records

💡 Future Improvements

🔐 Authentication (JWT)

🧑‍🤝‍🧑 User roles (Admin/Student)

📁 File upload (profile images)

💬 Real-time features (chat)

📊 Dashboard analytics

👨‍💻 Author

Krif
Aspiring Full-Stack Developer 🚀

⭐️ Support

If you like this project:

⭐ Star the repository

🍴 Fork it

🛠️ Contribute

📜 License

This project is open-source and available under the MIT License.