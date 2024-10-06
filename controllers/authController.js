const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.register = (req, res) => {
  const { username, email, password } = req.body;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).send('Error hashing password');

    User.createUser({ username, email, password: hashedPassword }, (err, result) => {
      if (err) return res.status(500).send('Error registering user');
      res.redirect('/auth/login');
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findUserByEmail(email, (err, user) => {
    if (err || !user) return res.status(404).send('User not found');
    
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (!isMatch) return res.status(401).send('Invalid credentials');
      res.redirect('/');
    });
  });
};
