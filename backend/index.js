import express from 'express';
// dotenv file in import

import { connectDB } from './DB/DB.js'

import dotenv from "dotenv";

dotenv.config()

const app = express();
connectDB()

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server is runing on ${PORT}`);
})