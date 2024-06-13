import express from 'express';
import { connectDB } from './DB/DB.js'
import dotenv from "dotenv";
import userRoute from './routes/user.route.js'

dotenv.config()
const app = express();
connectDB()

app.use('/api/user',userRoute);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server is runing on ${PORT}`);
})