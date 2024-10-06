const db = require('../config/db');

class Playlist {
  static createPlaylist(playlistData, callback) {
    const sql = `INSERT INTO playlists (name, user_id) VALUES (?, ?)`;
    db.query(sql, [playlistData.name, playlistData.user_id], callback);
  }

  static getUserPlaylists(userId, callback) {
    const sql = `SELECT * FROM playlists WHERE user_id = ?`;
    db.query(sql, [userId], callback);
  }
}

module.exports = Playlist;
