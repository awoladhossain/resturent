import express from "express";
import cors from "cors";

// app config
const app = express();
const port = 4000;

// middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is Working");
});

app.listen(port, () => {
  console.log(`the server is running in port ${port}`);
});
