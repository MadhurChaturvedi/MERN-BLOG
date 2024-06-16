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

// MiddleWare 
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server is runing on ${PORT}`);
})