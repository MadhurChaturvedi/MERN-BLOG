import User from '../model/user.model.js'
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password || username == '' || email == '' || password == '') {
            // return res.status(404).json({ message: "Pls fill all fields are required" })
            next(errorHandler(400, 'All fields are required!'))
        }
        const hashedPassword = bcryptjs.hashSync(password, 10)
        const newUser = new User({ username, email, password: hashedPassword });
        const data = await newUser.save();
        res.status(200).json({ message: "Signup Successful", data: data });
    }
    catch (error) {
        console.log("Error", error);
        next(error)
    }
}
