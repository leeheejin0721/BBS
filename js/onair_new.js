document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.querySelector('.video-container');
    const pauseIcon = document.querySelector('.pause-icon');
    const playIcon = document.querySelector('.play-icon');
    const controlPause = document.querySelector('.control-pause');
    const controlPlay = document.querySelector('.control-play');
    const controlSound = document.querySelector('.control-sound');
    const controlMute = document.querySelector('.control-mute');

    let isPlaying = false;

    videoContainer.addEventListener('click', function() {
        isPlaying = !isPlaying;
        videoContainer.classList.toggle('playing');
    });

    controlPause.addEventListener('click', function() {
        isPlaying = false;
        videoContainer.classList.remove('playing');
    });

    controlPlay.addEventListener('click', function() {
        isPlaying = true;
        videoContainer.classList.add('playing');
    });

    controlSound.addEventListener('click', function() {
        controlSound.style.display = 'none';
        controlMute.style.display = 'inline';
    });

    controlMute.addEventListener('click', function() {
        controlMute.style.display = 'none';
        controlSound.style.display = 'inline';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const controlPause = document.querySelector('.control-pause');
    const controlPlay = document.querySelector('.control-play');
    const controlSound = document.querySelector('.control-sound');
    const controlMute = document.querySelector('.control-mute');
    
    // 재생/일시정지 토글
    controlPause.addEventListener('click', function() {
        controlPause.style.display = 'none';
        controlPlay.style.display = 'block';
    });

    controlPlay.addEventListener('click', function() {
        controlPlay.style.display = 'none';
        controlPause.style.display = 'block';
    });

    // 음소거/음소거해제 토글
    controlSound.addEventListener('click', function() {
        controlSound.style.display = 'none';
        controlMute.style.display = 'block';
    });

    controlMute.addEventListener('click', function() {
        controlMute.style.display = 'none';
        controlSound.style.display = 'block';
    });
});