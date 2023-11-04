const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/weds', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(bodyParser.json());
const User = mongoose.model('User', {
    username: String,
   
    email: String,
    password: String,
    contactNumber: String,
    
  });
 
;
app.post('/signup', async (req, res) => {
const {
      username,
    email,
      password,
      contactNumber,
     
    } = req.body;

    try {
        if ( !username || !email || !password || !contactNumber ) {
        return res.status(400).json({ message: 'Please fill in all fields' });
       }
       const newUser = new User({
        username,
        email,
        password,
        contactNumber,
       });
      res.setHeader('Content-Type', 'application/json')
      await newUser.save();
      res.status(201).json({ message: 'Registration successful!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

//login
  // login
  app.post('/coachlog', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User.findOne({ username });
      if (!user ) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
      
      if (password !== user.password) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
  
      
      const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
        expiresIn: '1h',
      });
  
      res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }

  });
  
  const port = process.env.PORT || 3002;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });