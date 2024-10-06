const db = require('../config/db');

class Song {
    static createSongWithFile(songData, callback) {
        const sql = `INSERT INTO songs (title, artist, album, playlist_id, file_path) VALUES (?, ?, ?, ?, ?)`;
        db.query(sql, [songData.title, songData.artist, songData.album, songData.playlist_id, songData.musicFilePath], callback);
    }
    static getSongsByPlaylist(playlistId, callback) {
        const sql = `SELECT * FROM songs WHERE playlist_id = ?`;
        db.query(sql, [playlistId], callback);
    }
    static deleteSong(songId, callback) {
        const sql = `DELETE FROM songs WHERE id = ?`;
        db.query(sql, [songId], callback);
    }
}

module.exports = Song;
