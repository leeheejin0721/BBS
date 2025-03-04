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

function toggleSpeedMenu() {
    let menu = document.querySelector(".speed-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function changeSpeed(speed) {
    document.querySelector(".speed-btn").textContent = speed + "x";

    let options = document.querySelectorAll(".speed-menu div");
    options.forEach(opt => {
        opt.classList.remove("selected");
        if (opt.textContent.includes(speed + "x")) {
            opt.classList.add("selected");
            opt.innerHTML = "✔ " + speed + "x";
        } else {
            opt.innerHTML = speed + "x";
        }
    });

    document.querySelector(".speed-menu").style.display = "none";
}

 // ✅ 볼륨 조절 기능
 function toggleVolumeSlider(event) {
    event.stopPropagation();
    let slider = document.querySelector(".volume-slider");
    slider.style.display = slider.style.display === "block" ? "none" : "block";
}

document.getElementById("volumeControl").addEventListener("input", function () {
    let volume = this.value;
    console.log("Volume:", volume); // 실제 오디오 요소 연결 필요
});

// 메뉴 외부 클릭 시 자동 닫기
document.addEventListener("click", function(event) {
    let speedMenu = document.querySelector(".speed-menu");
    let volumeSlider = document.querySelector(".volume-slider");
    let speedBtn = document.querySelector(".speed-btn");
    let soundBtn = document.querySelector(".sound-btn");

    if (speedMenu.style.display === "block" && !speedMenu.contains(event.target) && event.target !== speedBtn) {
        speedMenu.style.display = "none";
    }

    if (volumeSlider.style.display === "block" && !volumeSlider.contains(event.target) && event.target !== soundBtn) {
        volumeSlider.style.display = "none";
    }
});