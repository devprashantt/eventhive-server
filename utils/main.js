import bcrypt from 'bcryptjs';

const utils = {};

// Function to hash a password using bcrypt
utils.hashPassword = async (password) => {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

// Function to compare a password with a hashed password using bcrypt
utils.comparePassword = async (password, hash) => {
    const match = await bcrypt.compare(password, hash);
    return match;
};

// Function to generate a random alphanumeric string of a given length
utils.generateRandomString = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

// Function to validate an email address using a regular expression
utils.validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export default utils;
