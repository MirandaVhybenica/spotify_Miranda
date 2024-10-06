const Playlist = require('../models/playlist');

exports.createPlaylist = (req, res) => {
  const { name, user_id } = req.body;
  
  Playlist.createPlaylist({ name, user_id }, (err, result) => {
    if (err) return res.status(500).send('Error creating playlist');
    res.redirect('/playlists');
  });
};

exports.getPlaylists = (req, res) => {
  const userId = req.query.userId;

  Playlist.getUserPlaylists(userId, (err, playlists) => {
    if (err) return res.status(500).send('Error fetching playlists');
    res.json(playlists);
  });
};
