import express from "express";
import dbConnect from "./config/connect.js";
import cors from "cors"
const app = express();
import employeeRouter from './routes/employeeRouter.js'

app.use(
  cors({
    origin: ["http://localhost:5174"],
    credentials: true,
  })
);

dbConnect();
app.use(express.urlencoded())
app.use(express.json())
app.use("/",employeeRouter);

app.listen(7000, () => {
  console.log("server is connected.......");
});
