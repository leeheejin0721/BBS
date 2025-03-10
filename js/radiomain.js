document.addEventListener("DOMContentLoaded", function () {
    const airingMenu = document.querySelector(".radio-menu li:nth-child(1)"); // 방영
    const endedMenu = document.querySelector(".radio-menu li:nth-child(2)"); // 종영
    const radioContent = document.querySelector(".radio-content-grid"); // 방영 콘텐츠
    const replayGrid = document.querySelector(".replay-grid"); // 종영 콘텐츠
    const numberPagination = document.querySelector(".number"); // 페이지네이션
    const detailMenus = document.querySelectorAll(".radio-detail-menu li"); // 기본, 최신, 가나다 메뉴

    // 초기 상태 설정 (방영 선택)
    replayGrid.style.display = "none";
    numberPagination.style.display = "none";

    // "방영" 클릭 시
    airingMenu.addEventListener("click", function () {
        airingMenu.classList.add("active");
        endedMenu.classList.remove("active");
        radioContent.style.display = "grid";
        replayGrid.style.display = "none";
        numberPagination.style.display = "none";
    });

    // "종영" 클릭 시
    endedMenu.addEventListener("click", function () {
        endedMenu.classList.add("active");
        airingMenu.classList.remove("active");
        radioContent.style.display = "none";
        replayGrid.style.display = "grid";
        numberPagination.style.display = "flex";
    });

    // "기본", "최신", "가나다" 메뉴 클릭 이벤트 추가
    detailMenus.forEach(menu => {
        menu.addEventListener("click", function () {
            detailMenus.forEach(item => item.classList.remove("active")); // 모든 메뉴에서 active 제거
            this.classList.add("active"); // 클릭한 메뉴에 active 추가
        });
    });
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