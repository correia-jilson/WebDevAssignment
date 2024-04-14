const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.createUser = async (req, res) => {
  try {
    const { fullName, email, password, type } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const user = new User({ fullName, email, password, type });
    await user.save();
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    res.status(500).send('Server error');
  }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { fullName, email, password, type } = req.body;
  
    try {
      const user = await User.findById(id);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      if (password) {
        // Hash the new password if it's provided
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
      }
  
      // Update other fields
      user.fullName = fullName || user.fullName;
      user.email = email || user.email;
      user.type = type || user.type;
  
      const updatedUser = await user.save();
      res.json({
        _id: updatedUser._id,
        fullName: updatedUser.fullName,
        email: updatedUser.email,
        type: updatedUser.type
      });
  
    } catch (error) {
      res.status(500).send('Server error: ' + error.message);
    }
  };
  

  exports.deleteUser = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      await user.remove();
      res.json({ message: 'User deleted' });
    } catch (error) {
      res.status(500).send('Server error: ' + error.message);
    }
  };
  
