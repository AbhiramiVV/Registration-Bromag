import express from "express";
import 'dotenv/config.js'
import dbConnect from "./config/connect.js";
import cors from "cors"
const app = express();
import employeeRouter from './routes/employeeRouter.js'

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

dbConnect();
app.use(express.urlencoded())
app.use(express.json({limit:'350mb'}))
app.use("/",employeeRouter);

app.listen(7000, () => {
  console.log("server is connected.......");
});
