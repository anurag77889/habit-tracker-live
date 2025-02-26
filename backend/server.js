require("dotenv").config({ path: "./.env" });

const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Load environment variables
// Initialize App
const app = express();

// Middleware
app.use(express.json()); // Parse JSON data

const PORT = process.env.PORT || 5000;
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/habitTracker";
console.log(MONGO_URI);

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => {
    console.log("Error: ", error.message);
    process.exit(1);
  });

const connectDB = require("./config/db");
connectDB();

// Simple Route
app.get("/", (req, res) => {
  res.send("API is running....");
});

// Server Listener

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
