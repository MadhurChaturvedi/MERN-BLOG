import User from '../model/user.model.js'
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(404).json({ message: "Pls fill all fields are required" })
        }
        const hashedPassword = bcryptjs.hashSync(password, 10)
        const newUser = new User({ username, email, password: hashedPassword });
        const data = await newUser.save();
        res.status(200).json({ message: "Signup Successful", data: data });
    }
    catch (err) {
        console.log("Error", err);
        res.status(402).json({ message: "Server Error" });
    }
}
