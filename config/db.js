const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

// Get the MongoDB URI from the environment variable
const dbURI = process.env.MONGODB_URI;

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);  // Exit process with failure
    }
};

// Export the connection function
module.exports = connectDB;
