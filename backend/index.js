import express from 'express';

// dotenv file in import
import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})

const app = express();


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server is runing on ${PORT}`);
})