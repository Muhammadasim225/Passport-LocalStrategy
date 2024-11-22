# Node.js Authentication System with Passport.js Local-Strategy

This is a simple authentication system built with Node.js, Express.js, and Passport.js. The project includes user registration, login, session management, and user authentication using Passport's local strategy.

## 📁 Project Structure

![image](https://github.com/user-attachments/assets/67aca9e1-df66-4149-afc9-3951c47b7909)


---

## 🚀 Features

- **User Registration**: Create an account with `username`, `email`, and `password`.
- **User Login**: Authenticate users with email and password.
- **Session Management**: Maintain user sessions using `express-session`.
- **Protected Routes**: Dashboard and profile are accessible only to logged-in users.
- **Logout**: Users can securely log out.

---

## 🛠️ Installation and Setup

### Prerequisites
- Node.js installed on your machine.
- MongoDB instance running locally or a connection string to a cloud MongoDB service (e.g., MongoDB Atlas).

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Muhammadasim225/Passport-LocalStrategy.git
   cd passportjs

2. **Navigate to the Backend**
   ```bash
   cd backend

4. **Install Dependencies**

   ```bash
   npm install

4. Create an .env File Inside the backend directory, create a file named .env with the following variables:

   ```bash
   PORT=3000
   MONGO_URI=your-mongodb-connection-string

5. Run the Server

   ```bash
   nodemon server.js
   ```
   The server will start on http://localhost:3000.

6. Navigate to the Frontend Add your frontend folder with views such as login.ejs, register.ejs, and dashboard.ejs for rendering.


  ## 🧪 API Endpoints
 
   ### Public Routes

   -**GET /register:** Displays the registration page.
   -**POST /register:** Handles user registration.
   -**GET /login:** Displays the login page.
   -**POST /login:** Authenticates the user.

   ### Protected Routes

   -**GET /:** Displays the dashboard (requires authentication).
   -**GET /profile:** Returns user profile data.
   -**GET /logout:** Logs out the user.


  ## ⚙️ Technologies Used

  -**Backend:** Node.js, Express.js
  -**Authentication:** Passport.js
  -**Database:** MongoDB with Mongoose
  -**Templating Engine:** EJS
  -**Session Management:** Express-session

  ## ✨ Future Improvements

  -Add password hashing (e.g., using bcrypt) for secure storage.
  -Implement proper error handling and validation.
  -Enhance frontend design with CSS frameworks like Bootstrap or Tailwind.







 

 

 








   


   


   





