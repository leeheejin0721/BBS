document.addEventListener('DOMContentLoaded', function() {
    const mainNav = document.querySelector('.main-nav');
    
    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) { // 스크롤이 조금이라도 내려가면
            mainNav.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // 검은색 투명 배경으로 변경
        } else { // 스크롤이 맨 위에 있으면
            mainNav.style.backgroundColor = 'transparent'; // 투명 배경으로 변경
        }
    });
    
    // 페이지 로드 시 초기 상태 설정
    if (window.scrollY > 10) {
        mainNav.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    } else {
        mainNav.style.backgroundColor = 'transparent';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const tvMenu = document.querySelector(".tv-radio-menu .tv");
    const radioMenu = document.querySelector(".tv-radio-menu .radio");

    const tvIcons = tvMenu.querySelectorAll("img"); // TV 아이콘 (검정, 흰색)
    const radioIcons = radioMenu.querySelectorAll("img"); // 라디오 아이콘 (검정, 흰색)

    // **초기 상태 설정**
    tvIcons[0].style.display = "inline"; // 검정 TV 아이콘 숨김
    tvIcons[1].style.display = "none"; // 흰색 TV 아이콘 표시

    radioIcons[0].style.display = "inline"; // 검정 라디오 아이콘 표시
    radioIcons[1].style.display = "none"; // 흰색 라디오 아이콘 숨김

    tvMenu.addEventListener("click", function () {
        // **TV 활성화 (배경색 #3a3a3a → 흰색 아이콘)**
        tvMenu.style.backgroundColor = "#3a3a3a";
        tvMenu.style.color = "white";
        tvIcons[0].style.display = "inline"; // 검정 TV 아이콘 숨김
        tvIcons[1].style.display = "none"; // 흰색 TV 아이콘 표시

        // **라디오 비활성화 (배경색 #ececec → 검정 아이콘)**
        radioMenu.style.backgroundColor = "#ececec";
        radioMenu.style.color = "#3a3a3a";
        radioIcons[0].style.display = "inline"; // 검정 라디오 아이콘 표시
        radioIcons[1].style.display = "none"; // 흰색 라디오 아이콘 숨김
    });

    radioMenu.addEventListener("click", function () {
        // **라디오 활성화 (배경색 #3a3a3a → 흰색 아이콘)**
        radioMenu.style.backgroundColor = "#3a3a3a";
        radioMenu.style.color = "white";
        radioIcons[0].style.display = "none"; // 검정 라디오 아이콘 숨김
        radioIcons[1].style.display = "inline"; // 흰색 라디오 아이콘 표시

        // **TV 비활성화 (배경색 #ececec → 검정 아이콘)**
        tvMenu.style.backgroundColor = "#ececec";
        tvMenu.style.color = "#3a3a3a";
        tvIcons[0].style.display = "none"; // 검정 TV 아이콘 숨김
        tvIcons[1].style.display = "inline"; // 흰색 TV 아이콘 표시
    });
});

document.getElementById("toggleDropdown").addEventListener("click", function (event) {
    event.preventDefault();
    let menu = document.querySelector(".dropdown-menu2");
    let arrow = document.getElementById("dropdownArrow");
    let dropdownButton = document.querySelector(".dropdown2");

    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        dropdownButton.classList.remove("menu-open");
        arrow.style.transform = "rotate(0deg)";
    } else {
        menu.classList.add("open");
        dropdownButton.classList.add("menu-open");
        arrow.style.transform = "rotate(180deg)";
    }
});

document.addEventListener("click", function (event) {
    let dropdown = document.querySelector(".dropdown2");
    let menu = document.querySelector(".dropdown-menu2");
    let arrow = document.getElementById("dropdownArrow");

    if (!dropdown.contains(event.target)) {
        menu.classList.remove("open");
        dropdown.classList.remove("menu-open");
        arrow.style.transform = "rotate(0deg)";
    }
});



document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const dots = document.querySelectorAll(".slider-indicator .dot");
    
    function updateSlide() {
        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentIndex].classList.add("active");

        currentIndex = (currentIndex + 1) % dots.length;
    }

    setInterval(updateSlide, 3000);
});

document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const dots = document.querySelectorAll(".slider-indicator2 .dot");
    const totalDots = dots.length;

    function changeActiveDot() {
        // 다음 인덱스 계산 (순환)
        const nextIndex = (currentIndex + 1) % totalDots;
        
        // 현재 활성화된 원에서 active 클래스 제거
        dots[currentIndex].classList.remove("active");
        
        // 다음 원에 active 클래스 추가
        dots[nextIndex].classList.add("active");
        
        // 현재 인덱스 업데이트
        currentIndex = nextIndex;
    }

    setInterval(changeActiveDot, 3000); // 3초마다 변경
});



document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    let slides = document.querySelectorAll(".top-banner > img:not(.prev):not(.next)");
    let indicators = document.querySelectorAll(".indicator div");
    let playBtn = document.querySelector(".play-btn");
    let isPlaying = true;
    let slideInterval = setInterval(nextSlide, 3000);

    // 초기 상태 설정 - 처음에는 정지 버튼으로 표시
    playBtn.classList.add("pause");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
        indicators.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    document.querySelector(".prev").addEventListener("click", function () {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
    });

    document.querySelector(".next").addEventListener("click", function () {
        nextSlide();
    });

    playBtn.addEventListener("click", function () {
        if (isPlaying) {
            clearInterval(slideInterval);
            playBtn.classList.remove("pause");
            playBtn.classList.add("play");
        } else {
            slideInterval = setInterval(nextSlide, 3000);
            playBtn.classList.remove("play");
            playBtn.classList.add("pause");
        }
        isPlaying = !isPlaying;
    });

    showSlide(slideIndex);
});


const leftImages = ["./images/mainbanner1.png", "./images/mainbanner2.png"];
const rightImages = ["./images/mainbanner3.png", "./images/mainbanner4.png", "./images/mainbanner5.png"];

let leftIndex = 0;
let rightIndex = 0;

function changeLeftBanner() {
    leftIndex = (leftIndex + 1) % leftImages.length;
    document.getElementById("left-img").src = leftImages[leftIndex];
    
    // 왼쪽 배너 인디케이터 업데이트
    document.querySelectorAll('.left-indicators .indicator').forEach((dot, index) => {
        dot.classList.toggle('active', index === leftIndex);
    });
}

function changeRightBanner() {
    rightIndex = (rightIndex + 1) % rightImages.length;
    document.getElementById("right-img").src = rightImages[rightIndex];
    
    // 오른쪽 배너 인디케이터 업데이트
    document.querySelectorAll('.right-indicators .indicator').forEach((dot, index) => {
        dot.classList.toggle('active', index === rightIndex);
    });
}

// 왼쪽 배너는 3초마다 변경
setInterval(changeLeftBanner, 4000);

// 오른쪽 배너는 3초마다 변경
setInterval(changeRightBanner, 3000);


document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.querySelector(".search-form button"); // 검색 버튼
    const modal = document.getElementById("searchModal"); // 모달
    const closeBtn = document.querySelector(".close"); // 닫기 버튼

    // 검색 버튼 클릭 시 모달 보이기
    searchBtn.addEventListener("click", function (event) {
        event.preventDefault();
        modal.style.display = "flex";
    });

    // 닫기 버튼 클릭 시 모달 숨기기
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // 모달 외부 영역 클릭 시 닫기
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});





























