import express from 'express';
import { connectDB } from './DB/DB.js'
import dotenv from "dotenv";
import userRoute from './routes/user.route.js';
import authRoute from './routes/auth.route.js';

dotenv.config()
const app = express();
app.use(express.json())
connectDB()

app.use('/api/user', userRoute);
app.use('/auth/user', authRoute);
// express json is middlleware which is used for pass the JSON data form frontend to backend ||


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server is runing on ${PORT}`);
})