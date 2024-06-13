import mongoose from "mongoose";
import dotenv from "dotenv";
const connectDB = () => {
    process.env.PORT
    mongoose.connect(process.env.DB, { dbName: "MERN-BLOG" })
        .then(() => console.log(`Database connected 🍃`))
        .catch((err) => console.log(`DB Error`, err))
}
export { connectDB }