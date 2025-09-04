## 🎬 Movie Booking Backend (MERN)

This is the backend service for a Movie Ticket Booking Application.
It provides REST APIs for authentication, movie & theatre management, seat booking, and order management.

---

## 🚀 Features

🔑 Authentication & Authorization

- User registration & login with JWT

- Role-based access control (user, admin)

- Google OAuth login support

🎥 Movies & Shows

- Fetch and manage movies

- Add shows with theatre, date, time, and price

🎭 Theatres & Cities

- Manage cities and theatres

- Dynamic seat configuration per theatre

💺 Seat Booking

- Auto-generate seat layouts

- Book available seats in real-time

📦 Orders

- Create and fetch user orders

- View booked seats summary

---

🛠️ Tech Stack

- Node.js + Express.js

- MongoDB + Mongoose

- JWT Authentication

- Google OAuth (google-auth-library)

- Bcrypt.js (password hashing)

- CORS + dotenv

---

## 📂 Project-Structure
backend-movie/
│── config/
│   └── connectDb.js
│
│── controllers/
│   ├── authController.js
│   ├── itemController.js
│   ├── locationController.js
│   ├── movieController.js
│   ├── orderController.js
│   ├── seatController.js
│   ├── showtimeController.js
│   └── theatreController.js
│
│── models/
│   ├── User.js
│   ├── City.js
│   ├── Theatre.js
│   ├── Show.js
│   ├── SeatLayout.js
│   ├── Item.js   (Movies)
│   └── Order.js
│
│── routes/
│   ├── authRoutes.js
│   ├── itemRoutes.js
│   ├── locationRoutes.js
│   ├── orderRoutes.js
│   ├── SeatRoutes.js
│   ├── showtimeRoutes.js
│   └── theatreRoutes.js
│
│── Middlewares/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
│
│── server.js
│── package.json
│── .env

---

## ⚡ Installation & Setup
```bash
1️⃣ Clone the repository
git clone https://github.com/Elanthiran/movie-booking-backend.git
cd movie-booking-backend
```
## 2️⃣ Install dependencies
```bash
npm install
```
---

3️⃣ Setup environment variables
```bash
Create a .env file in the root directory and add:

PORT=7000
MONGO_URI="mongodb+srv://elanthirank:booking@cluster0.yhbe2je.mongodb.net/"
JWT_SECRET="aprjknzypungkristuvwertusanthink1234099234567666567785"
GOOGLE_CLIENT_ID="77023421990-bdlhbp8enokkki983inm526t1h99gc2t.apps.googleusercontent.com"
```
4️⃣ Start the server
```bash
npm start
```

---

## 📌 API Endpoints
🔑 Authentication (/api/auth)

- POST /register → Register user

- POST /login → Login & get token

- POST /logout → Logout

- POST /google → Google login

🎥 Movies (/api/customers/movies)

- GET /movies?city=cityName → Get movies by city

- POST /movies → Add movie (admin only)

🎭 Theatres (/api/customers/theatres)

- GET /theatres → Get theatres

- POST /theatres → Add theatre (admin only)

🏙️ Cities (/api/customers/city)

- GET /city → Get cities

- POST /city → Add cities

🎬 Shows (/api/shows)

- GET /getShow → Get all shows

- POST /postShow → Create new show (admin only)

💺 Seats (/api/seats)

- POST /createSeatLayout → Create seat layout

- GET /:showId → Get seat layout

- POST /book/:showId → Book seats

📦 Orders (/api/orders)

- GET /my-orders → Get user’s orders

- GET /:id → Get order details

- POST / → Create order

---

## 👨‍💻 Usage

1.Register or login to get a JWT token.

2.Use the token in the Authorization header for all protected routes:


3.As a user, you can:

- View movies, theatres, and shows

- Book seats for a show

- Place orders and check your bookings

4.As an admin, you can:

-Add new movies

- Add theatres and configure seats

- Add shows linked to movies and theatres

  ---
## ✅ Future Enhancements

- Online payments (Stripe / Razorpay)

- WebSocket-based real-time seat locking

- Admin analytics dashboard

---

## 🤝 Contributing

Contributions are welcome! 🎉

To contribute:

- Fork this repository

- Create a new branch(git checkout -b feature-name)


- Make your changes and commit(git commit -m "Added new feature")


- Push to your branch(git push origin feature-name)

- Open a Pull Request 🚀

  ---
  
## 📜 License

- This project is licensed under the MIT License.
