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
    const dharmaMenuItems = document.querySelectorAll('.dharma-menu li');

    let isPlaying = false;
    let lastVolume = 100;
    let isSliderVisible = false;

    //  라디오 메뉴 클릭 가능하도록 설정
    dharmaMenuItems.forEach(item => {
        item.addEventListener('click', function() {
            dharmaMenuItems.forEach(menu => menu.classList.remove('active')); // 모든 메뉴의 active 제거
            this.classList.add('active'); // 클릭한 메뉴에 active 추가
        });
    });

    //  비디오 컨테이너 클릭 시 재생/일시정지 토글
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

    //  재생/일시정지 버튼 클릭 이벤트
    controlPause.addEventListener('click', function(event) {
        event.stopPropagation();
        isPlaying = false;
        videoContainer.classList.remove('playing');
        controlPause.style.display = 'none';
        controlPlay.style.display = 'block';
    });

    controlPlay.addEventListener('click', function(event) {
        event.stopPropagation();
        isPlaying = true;
        videoContainer.classList.add('playing');
        controlPlay.style.display = 'none';
        controlPause.style.display = 'block';
    });

    //  볼륨 아이콘 클릭 시 볼륨 슬라이더 표시
    controlSound.addEventListener('click', () => {
        isSliderVisible = true;
        volumeSliderContainer.style.display = 'block';
    });

    //  음소거 해제
    controlMute.addEventListener('click', () => {
        volumeSlider.value = lastVolume;
        controlSound.style.display = 'block';
        controlMute.style.display = 'none';
        volumeSliderContainer.style.display = 'none';
        isSliderVisible = false;
    });

    //  볼륨 조절
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

    //  다른 곳 클릭 시 볼륨 슬라이더 숨기기
    document.addEventListener('click', (event) => {
        if (!volumeSliderContainer.contains(event.target) && 
            !controlSound.contains(event.target) && 
            isSliderVisible) {
            volumeSliderContainer.style.display = 'none';
            isSliderVisible = false;
        }
    });
});