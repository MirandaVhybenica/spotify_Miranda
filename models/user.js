const db = require('../config/db');

class User {
  static createUser(userData, callback) {
    const sql = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
    db.query(sql, [userData.username, userData.email, userData.password], callback);
  }

  static findUserByEmail(email, callback) {
    const sql = `SELECT * FROM users WHERE email = ?`;
    db.query(sql, [email], callback);
  }
}

module.exports = User;
