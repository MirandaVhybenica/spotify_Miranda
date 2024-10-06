const Song = require('../models/song');

exports.addSongWithFile = (req, res) => {
    const { title, artist, album, playlist_id } = req.body;

    // Use backticks for template literals
    const musicFilePath = `/uploads/${req.file.filename}`; 

    // Ensure that you're using backticks here as well
    Song.createSongWithFile({ title, artist, album, playlist_id, musicFilePath }, (err, result) => {
        if (err) {
            console.error(err); 
            return res.status(500).send('Error saving song');
        }
        // Use backticks for template literals
        res.redirect(`/playlists/${playlist_id}`);
    });
};
