// Import dependencies
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import bodyParser from 'body-parser';
import compression from 'compression';
import morgan from 'morgan';
import session from 'express-session';
import passport from 'passport';
import cloudinary from 'cloudinary';
import { fileURLToPath } from 'url';

// Import configuration files and middleware
import connectDB from './config/database.js';
import verifyToken from './middleware/verifyToken.js';
import errorHandler from './middleware/errorHandler.js';
import notFoundHandler from './middleware/notFoundHandler.js';

// Import routes
import college from './routes/college.js';
import event from './routes/event.js';
import organizer from './routes/organizer.js';
import participant from './routes/participant.js';
import resource from './routes/resource.js';
import user from './routes/user.js';
import category from './routes/category.js';
import auth from './routes/auth.js';

// Load environment variables
dotenv.config();

// Configure cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Connect to the database
connectDB();

// Define file paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create the Express app
const app = express();

// Add middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json({ limit: '30mb', extended: true })); // Parse JSON
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(compression()); // Compress responses
app.use(morgan('combined')); // Log HTTP requests

// Add session middleware
app.use(session({
    secret: process.env.SESSION_SECRET, // Set session secret
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true } // Use secure cookies
}));

// Add passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Add routes
app.use('/users', verifyToken, user); // Require authentication for /users route

app.use('/colleges', college);
app.use('/events', event);

app.use('/organizers', organizer);
app.use('/participants', participant);

app.use('/resources', resource);
app.use('/categories', category);

app.use('/auth', auth);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Default routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Serve index.html for root route
});

// Error handling middleware
app.use(errorHandler); // Handle errors
app.use(notFoundHandler); // Handle 404 errors

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});