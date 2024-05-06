import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/food.route.js";

// app config
const app = express();
const port = 4000;

// middlewares
app.use(express.json());
app.use(cors());

connectDB();

// api endpoints

app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API is Working");
});

app.listen(port, () => {
  console.log(`the server is running in port ${port}`);
});
