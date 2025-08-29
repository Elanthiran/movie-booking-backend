const express = require("express");
const connectDb = require("./config/connectDb");
require("dotenv").config();
const cors = require("cors");

const movieRoutes = require("./router/itemRoutes");
const cityRoutes=require("./router/locationRoutes")
const theatreRoutes = require("./router/theatreRoutes")
const showRoutes = require('./router/showtimeRoutes');
const seatRoutes=require("./router/SeatRoutes")
const authRoutes=require("./router/authRouter")
const orderRoutes=require("./router/orderRoutes");

const app = express();

// Middleware
app.use(cors());


app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true ,limit: "50mb"}));

// Routes
app.use("/api/customers", movieRoutes);
app.use("/api/customers",cityRoutes)
app.use("/api/customers",theatreRoutes);
app.use('/api/auth', authRoutes);
app.use("/api/seats",seatRoutes)
app.use('/api/shows', showRoutes);
app.use('/api/orders',orderRoutes);

// DB Connection & Server
connectDb();

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
