import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from "dotenv";
import userRoute from './Router/product.js'

dotenv.config();
const app = express();

// ✅ Explicit CORS setup
const corsOptions = {
  origin: [
    "http://localhost:5173",                     // your local React dev
    "https://e-commerce-frontend-lime-alpha.vercel.app", // your deployed frontend
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/product', userRoute);

const dbConnecter = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Db got connected");
  } catch (e) {
    console.log("Db error : ", e);
  }
};

dbConnecter();

const port = process.env.PORT || 2500;
app.listen(port, () => {
  console.log("Connected server successfully at:", port);
});
