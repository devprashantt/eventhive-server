import Subscriber from "../models/subscriber.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Get all subscribers
export async function getSubscribers(req, res) {
    try {
        const subscribers = await Subscriber.find();
        res.status(200).json(subscribers);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// Get a single subscriber by ID
export async function getSubscriberById(req, res) {
    try {
        const subscriber = await Subscriber.findById(req.params.subscriberId);
        if (!subscriber) {
            return res.status(404).json({ error: 'Subscriber not found' });
        }
        res.status(200).json(subscriber);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}

// Create a new subscriber
export async function createSubscriber(req, res) {
    try {
        const { email } = req.body;

        // Check if subscriber already exists in database
        const subscriber = await Subscriber.findOne({ email });
        if (subscriber) {
            return res.status(400).json({ message: 'Email already subscribed' });
        }

        // Create new subscriber
        const newSubscriber = new Subscriber({ email });
        await newSubscriber.save();

        // Send confirmation email to subscriber
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GOOGLE_EMAIL, // Replace with your own Gmail address
                pass: process.env.GOOGLE_PASSWORD, // Replace with your own Gmail password
            },
        });

        const mailOptions = {
            from: {
                name: 'Prashant Kumar Singh',
                address: 'pk3076889@gmail.com',
            },
            to: email,
            subject: 'Subscription Confirmation',
            text: `Thank you for subscribing to our newsletter!`,
            html: `
            <div style="background-color: #f5f5f5; padding: 20px;">
              <div style="background-color: #fff; padding: 20px; border-radius: 5px;">
                <h1 style="color: #222; font-family: Arial, sans-serif; font-size: 28px; margin-bottom: 20px;">Thank you for subscribing!</h1>
                <p style="color: #666; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px;">Hello,</p>
                <p style="color: #666; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px;">Thank you for subscribing to our newsletter! You will now receive the latest updates, news, and special offers from us.</p>
                <p style="color: #666; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px;">If you have any questions or concerns, please don't hesitate to contact us.</p>
                <p style="color: #666; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px;">Best regards,</p>
                <p style="color: #666; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px;">Prashant Kumar Singh</p>
              </div>
            </div>
          `
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                return res.status(500).json({ message: 'Error sending confirmation email' });
            } else {
                console.log(`Email sent: ${info.response}`);
                return res.status(200).json({ message: 'Subscriber created and confirmation email sent' });
            }
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error creating subscriber' });
    }
}

// Update an existing subscriber
export async function updateSubscriber(req, res) {
    try {
        const subscriber = await Subscriber.findByIdAndUpdate(
            req.params.subscriberId,
            {
                email: req.body.email,
            },
            { new: true }
        );
        if (!subscriber) {
            return res.status(404).json({ error: 'Subscriber not found' });
        }
        res.status(200).json(subscriber);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
}