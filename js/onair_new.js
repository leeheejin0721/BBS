document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.querySelector('.video-container');
    const pauseIcon = document.querySelector('.pause-icon');
    const playIcon = document.querySelector('.play-icon');
    const controlPause = document.querySelector('.control-pause');
    const controlPlay = document.querySelector('.control-play');
    const controlSound = document.querySelector('.control-sound');
    const controlMute = document.querySelector('.control-mute');
    const volumeSliderContainer = document.querySelector('.volume-slider-container');
    const volumeSlider = document.querySelector('.volume-slider');

    let isPlaying = false;
    let lastVolume = 100;
    let isSliderVisible = false;

    // 비디오 컨테이너 클릭 시 재생/일시정지 토글
    videoContainer.addEventListener('click', function() {
        isPlaying = !isPlaying;
        videoContainer.classList.toggle('playing');
        
        // 재생/일시정지 컨트롤 아이콘 변경
        if (isPlaying) {
            controlPause.style.display = 'none';
            controlPlay.style.display = 'block';
        } else {
            controlPlay.style.display = 'none';
            controlPause.style.display = 'block';
        }
    });

    // 비디오 컨트롤 버튼들 이벤트 리스너
    controlPause.addEventListener('click', function(event) {
        event.stopPropagation(); // 비디오 컨테이너 클릭 이벤트 방지
        isPlaying = false;
        videoContainer.classList.remove('playing');
        controlPause.style.display = 'none';
        controlPlay.style.display = 'block';
    });

    controlPlay.addEventListener('click', function(event) {
        event.stopPropagation(); // 비디오 컨테이너 클릭 이벤트 방지
        isPlaying = true;
        videoContainer.classList.add('playing');
        controlPlay.style.display = 'none';
        controlPause.style.display = 'block';
    });

    // 소리 아이콘 클릭 시 슬라이더 표시
    controlSound.addEventListener('click', () => {
        isSliderVisible = true;
        volumeSliderContainer.style.display = 'block';
    });

    // 음소거 아이콘 클릭 시
    controlMute.addEventListener('click', () => {
        volumeSlider.value = lastVolume;
        controlSound.style.display = 'block';
        controlMute.style.display = 'none';
        volumeSliderContainer.style.display = 'none';
        isSliderVisible = false;
    });

    // 볼륨 슬라이더 변경 시
    volumeSlider.addEventListener('input', () => {
        const volume = volumeSlider.value;
        
        if (volume === '0') {
            controlSound.style.display = 'none';
            controlMute.style.display = 'block';
            volumeSliderContainer.style.display = 'none';
            isSliderVisible = false;
        } else {
            controlSound.style.display = 'block';
            controlMute.style.display = 'none';
            lastVolume = volume;
        }
    });

    // 페이지 다른 곳 클릭 시 슬라이더 숨기기
    document.addEventListener('click', (event) => {
        if (!volumeSliderContainer.contains(event.target) && 
            !controlSound.contains(event.target) && 
            isSliderVisible) {
            volumeSliderContainer.style.display = 'none';
            isSliderVisible = false;
        }
    });
});