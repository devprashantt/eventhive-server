import passport from 'passport';
import User from '../models/user.js';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as LocalStrategy } from 'passport-local';
import dotenv from 'dotenv';

dotenv.config();

passport.use(
    new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
        try {
            const user = await User.findOne({ email });
            if (!user) {
                return done(null, false, { message: 'Invalid email or password' });
            }
            if (password !== user.password) {
                return done(null, false, { message: 'Invalid email or password' });
            }
            return done(null, user);
        } catch (error) {
            return done(error);
        }
    })
);

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: '/api/auth/google/callback',
            passReqToCallback: true,
            scope: ['profile', 'email'],
        },
        async (req, accessToken, refreshToken, profile, done) => {
            try {
                const existingUser = await User.findOne({ email: profile.email });
                if (existingUser) {
                    // If the user already exists in the database, return that user
                    done(null, existingUser);
                } else {
                    // If the user does not exist in the database, create a new user object and save it to the database
                    const newUser = new User({
                        email: profile.email,
                        name: profile.displayName,
                        provider: 'google',
                        googleId: profile.id,
                    });
                    await newUser.save();
                    done(null, newUser);
                }
            } catch (err) {
                done(err, null);
            }
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});

export default passport;
