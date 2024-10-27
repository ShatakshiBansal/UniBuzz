const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Create an Express app
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/authDB').then(()=>{
  console.log("Mongo DB connected successfully")
}).catch((e)=>{
  console.log(e);
});

// Create a User model
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', UserSchema);

// Sign-up route
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  // Hash the password before storing
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Email already exists' });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(403).json({ error: 'Invalid credentials' });
  }

  // Generate JWT token
  const token = jwt.sign({ userId: user._id }, 'your_jwt_secret_key', { expiresIn: '1h' });
  res.json({ message: 'Login successful', token, user });
});

// Start the server
app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
