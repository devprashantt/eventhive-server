import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export async function signup(req, res) {
    const { email, password, name, isOrganizer, college } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Salt
        const salt = await bcrypt.genSalt();

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create the user in the database
        const newUser = await User.create({ email, password: hashedPassword, name, isOrganizer, college });

        // Generate a JWT token
        const token = jwt.sign({ email: newUser.email, id: newUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: '30d' });

        res.status(201).json({ newUser, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

export async function signin(req, res) {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: "User doesn't exist" });
        }

        // Check if the password is correct
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate a JWT token
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.JWT_SECRET_KEY, { expiresIn: '30d' });

        console.log("Generated Token\n", token);

        if (req.cookies[`${existingUser._id}`]) {
            req.cookies[`${existingUser._id}`] = "";
        }

        res.cookie(String(existingUser._id), token, {
            path: "/",
            expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
            httpOnly: true,
            sameSite: "none",
            secure: true
        });

        return res
            .status(200)
            .json({ message: "Successfully Logged In", user: existingUser, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

export async function logout(req, res, next) {
    const cookies = req.headers.cookie;
    const prevToken = cookies.split("=")[1];
    if (!prevToken) {
        return res.status(400).json({ message: "Couldn't find token" });
    }
    jwt.verify(String(prevToken), process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            console.log(err);
            return res.status(403).json({ message: "Authentication failed" });
        }
        res.clearCookie(`${user.id}`);
        req.cookies[`${user.id}`] = "";
        return res.status(200).json({ message: "Successfully Logged Out" });
    });
};

