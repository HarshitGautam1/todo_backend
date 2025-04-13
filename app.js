require("dotenv").config();
const express = require("express");
const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/tasks");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tasks", taskRoutes);

connectDB();

const PORT = 7000;


app.listen(PORT , () =>{
  console.log('Server is Listening !!');
})