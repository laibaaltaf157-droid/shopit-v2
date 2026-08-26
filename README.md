# 🛍️ ShopIt – MERN Stack E-Commerce Project

ShopIt is a full-stack **e-commerce web application** built using the **MERN Stack**. The project includes a React-based frontend and a Node.js/Express backend connected with MongoDB.

It was developed as a practical project to learn and demonstrate full-stack web development, database integration, authentication, email functionality, image management, and online payment integration.

## ✨ Features

* 🛒 E-commerce product browsing
* 👤 User registration and login
* 🔐 JWT-based authentication
* 🛍️ Shopping cart functionality
* 📦 Product and order management
* 💳 Stripe payment integration
* ☁️ Cloudinary integration for image management
* 📧 Nodemailer integration for email functionality
* 🗄️ MongoDB database integration
* 🔄 REST API integration between frontend and backend
* 📱 Responsive React frontend

## 🛠️ Technologies Used

### Frontend

* React.js
* JavaScript
* HTML5
* CSS3
* Create React App

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* Cookie Parser
* Nodemailer
* Cloudinary
* dotenv

### Payment

* Stripe

### Tools

* Git
* GitHub
* npm
* VS Code

## 📁 Project Structure

```text
shopit-v2/
│
├── Frontend/
│   ├── public/
│   ├── src/
│   ├── build/
│   └── package.json
│
├── backend/
│   ├── Controller/
│   ├── config/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── seeder/
│   ├── utils/
│   └── app.js
│
├── stripe/
│
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* MongoDB
* Git

### 1. Clone the Repository

```bash
git clone https://github.com/laibaaltaf157-droid/shopit-v2.git
```

### 2. Navigate to the Project

```bash
cd shopit-v2
```

### 3. Install Backend Dependencies

```bash
npm install
```

### 4. Install Frontend Dependencies

```bash
cd Frontend
npm install
```

### 5. Configure Environment Variables

Create the required `.env` files and add your configuration values for services such as:

* MongoDB
* JWT
* Cloudinary
* Stripe
* Email/Nodemailer

**Important:** Never upload real API keys, passwords, or secret credentials to GitHub.

## ▶️ Running the Project Locally

### Start the Backend

From the project root:

```bash
npm run dev
```

The backend will start using the development configuration.

### Start the Frontend

Open another terminal and run:

```bash
cd Frontend
npm start
```

The React application will open on the local development server.

## 💳 Stripe Payment Integration

The project includes **Stripe** for online payment processing.

Stripe configuration should be stored securely in environment variables and should never be committed to the repository.

## 🗄️ Database

The application uses **MongoDB** as its database and **Mongoose** for database modeling and interaction.

## 🔐 Authentication & Security

The backend includes:

* JWT authentication
* Password hashing with bcryptjs
* Cookie handling
* Environment variable configuration
* Protected backend functionality

## 🎯 Project Purpose

This project helped me gain practical experience in:

* Full-stack MERN development
* React.js frontend development
* Node.js and Express.js backend development
* MongoDB and Mongoose
* REST APIs
* User authentication
* Payment gateway integration
* Cloudinary image management
* Email functionality
* Connecting frontend with backend

## 🚀 Future Improvements

* Admin dashboard
* Product reviews and ratings
* Wishlist functionality
* Advanced product filtering
* Order tracking
* Improved UI/UX
* Deployment of the complete application

## 👩‍💻 Author

**Laiba Altaf**

Web Developer | MERN Stack Developer

🔗 GitHub: https://github.com/laibaaltaf157-droid

---

⭐ If you like this project, consider giving the repository a star!

