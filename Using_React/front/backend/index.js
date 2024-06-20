// server.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/my-database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Define a schema for the user model
const userSchema = new mongoose.Schema({
  name: String,
  gender: String,
  email: String,
  mobile: String,
  username: String,
  password: String,
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

// Route to handle signup form submission
app.post('/signup', async (req, res) => {
  try {
    const { name, gender, email, mobile, username, password } = req.body;
    const newUser = new User({ name, gender, email, mobile, username, password });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username, password });
        if (user) {
            res.json({ success: true, message: 'Login successful' });
        } else {
            res.status(401).json({ success: false, message: 'Invalid username or password' });
        }
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});
// Endpoint for adding a new user
app.post('/admin/addUser', async (req, res) => {
    const { name, gender, email, mobile, username, password } = req.body;

    try {
        const newUser = new User({ name, gender, email, mobile, username, password });
        await newUser.save();
        res.json({ success: true, message: 'User added successfully' });
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Endpoint for deleting a user
app.delete('/admin/deleteUser/:id', async (req, res) => {
    const userId = req.params.id;

    try {
        await User.findByIdAndDelete(userId);
        res.json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
