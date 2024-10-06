document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const playlist = document.getElementById('playlist');
    
    const currentSongTitle = document.getElementById('currentSongTitle');
    const playBtn = document.getElementById('playBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let songs = [...document.querySelectorAll('.playlist-item')];
    let currentIndex = 0;

    function loadSong(index) {
        const song = songs[index];
        const songPath = song.querySelector('.song-path').value;
        const songTitle = song.querySelector('.song-title').textContent;

        audioPlayer.src = songPath;
        currentSongTitle.textContent = songTitle;
        audioPlayer.load();
    }

    loadSong(currentIndex);
    playBtn.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playBtn.textContent = 'Pause';
        } else {
            audioPlayer.pause();
            playBtn.textContent = 'Play';
        }
    });
    nextBtn.addEventListener('click', function() {
        currentIndex++;
        if (currentIndex >= songs.length) {
            currentIndex = 0;
        }
        loadSong(currentIndex);
        audioPlayer.play();
        playBtn.textContent = 'Pause';
    });
    prevBtn.addEventListener('click', function() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = songs.length - 1;
        }
        loadSong(currentIndex);
        audioPlayer.play();
        playBtn.textContent = 'Pause';
    });
    audioPlayer.addEventListener('ended', function() {
        nextBtn.click();
    });
});
