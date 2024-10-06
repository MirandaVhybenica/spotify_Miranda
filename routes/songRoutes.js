const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads'); 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });
let playlists = [];
router.get('/playlists', (req, res) => {
    res.render('playlists', { playlists: playlists });
});
router.post('/upload', upload.single('song'), (req, res) => {
    if (req.file) {
        const song = {
            name: req.file.originalname,
            path: '/uploads/' + req.file.filename
        };
        playlists.push(song); 
        res.redirect('/songs/playlists');
    } else {
        res.send('Error uploading file');
    }
});

router.get('/upload', (req, res) => {
    res.render('upload');
});

module.exports = router;