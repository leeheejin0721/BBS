document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".program-menu ul li");
    const allSections = document.querySelectorAll("section");
    const detailSection = document.getElementById("program-introduce-detail");
    const noticeSection = document.querySelector(".notice"); // 공지 섹션
    const bannerSection = document.querySelector(".banner"); // 배너 섹션
    const programNotice = document.querySelector(".program-notice"); // 공지사항 섹션
    const programReplay = document.querySelector(".program-replay"); // 다시보기 섹션
    const noticeBoard = document.querySelector(".notice-board"); // 시청자 게시판 섹션
    const replayArticles = document.querySelectorAll(".program-replay article"); // 다시보기 기사들
    const noticeRows = document.querySelectorAll(".program-notice tbody tr"); // 공지사항 행들
    const boardRows = document.querySelectorAll(".notice-board tbody tr"); // 시청자 게시판 행들
    const numberElements = document.querySelectorAll(".number"); // 페이지네이션
    const searchContainers = document.querySelectorAll(".search-container"); // 검색창
    const allViewButtons = document.querySelectorAll(".program-notice-title p, .replay-title p, .notice-board-title p"); // "전체보기" 버튼들
    const writeButtons = document.querySelectorAll(".notice-board .button"); // "글쓰기" 버튼

    function updateVisibility() {
        const activeMenu = document.querySelector(".program-menu ul li.active").textContent.trim();

        // 항상 보이는 섹션들 (메뉴, 배너, 공지사항)
        document.querySelector(".tvProgram-menu").style.display = "block";
        noticeSection.style.display = "block";
        bannerSection.style.display = "block";

        if (activeMenu === "홈") {
            // 모든 섹션 표시 (단, program-introduce-detail은 숨김)
            allSections.forEach(section => section.style.display = "block");
            detailSection.style.display = "none";

            // "다시보기" 섹션에서 article 8개만 보이게 함
            replayArticles.forEach((article, index) => {
                article.style.display = index < 8 ? "block" : "none";
            });

            // "다시보기"의 페이지네이션과 검색창 숨김
            programReplay.querySelector(".number").style.display = "none";
            programReplay.querySelector(".search-container").style.display = "none";

            // "공지사항"과 "시청자 게시판"에서 tr 5개까지만 보이게 함
            noticeRows.forEach((row, index) => {
                row.style.display = index < 5 ? "table-row" : "none";
            });
            boardRows.forEach((row, index) => {
                row.style.display = index < 5 ? "table-row" : "none";
            });

            // "공지사항"과 "시청자 게시판"의 페이지네이션과 검색창 숨김
            programNotice.querySelector(".number").style.display = "none";
            programNotice.querySelector(".search-container").style.display = "none";
            noticeBoard.querySelector(".number").style.display = "none";
            noticeBoard.querySelector(".search-container").style.display = "none";

            // "전체보기" 버튼 처리
            allViewButtons.forEach(btn => btn.style.display = "block");
            writeButtons.forEach(btn => btn.style.display = "none");

        } else {
            // 모든 섹션 숨김 (배너와 공지 섹션은 제외)
            allSections.forEach(section => {
                if (section !== bannerSection && section !== noticeSection && 
                    !section.classList.contains("tvProgram-menu")) {
                    section.style.display = "none";
                }
            });

            // 모든 "전체보기" 버튼 숨기기
            allViewButtons.forEach(btn => btn.style.display = "none");

            // 선택한 메뉴에 맞는 섹션 표시
            if (activeMenu === "프로그램 소개") {
                detailSection.style.display = "block";
            } else if (activeMenu === "출연진") {
                document.querySelector(".program-character").style.display = "block";
            } else if (activeMenu === "다시보기") {
                programReplay.style.display = "block";
                replayArticles.forEach(article => article.style.display = "block"); // 모든 article 보이기
                programReplay.querySelector(".number").style.display = "flex"; // 페이지네이션 보이기
                programReplay.querySelector(".search-container").style.display = "flex"; // 검색창 보이기
            } else if (activeMenu === "공지사항") {
                programNotice.style.display = "block";
                noticeRows.forEach(row => row.style.display = "table-row"); // 모든 tr 보이기
                programNotice.querySelector(".number").style.display = "flex"; // 페이지네이션 보이기
                programNotice.querySelector(".search-container").style.display = "flex"; // 검색창 보이기
            } else if (activeMenu === "시청자 게시판") {
                noticeBoard.style.display = "block";
                boardRows.forEach(row => row.style.display = "table-row"); // 모든 tr 보이기
                noticeBoard.querySelector(".number").style.display = "flex"; // 페이지네이션 보이기
                noticeBoard.querySelector(".search-container").style.display = "flex"; // 검색창 보이기

                // "시청자 게시판"에서는 "글쓰기" 버튼 보이기
                writeButtons.forEach(btn => btn.style.display = "block");
            }
        }
    }

    // 초기에 상태 설정
    updateVisibility();

    // 메뉴 클릭 이벤트 추가
    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            // 모든 메뉴에서 active 제거
            menuItems.forEach(i => i.classList.remove("active"));

            // 클릭한 메뉴에 active 추가
            this.classList.add("active");

            // 상태 업데이트
            updateVisibility();
        });
    });
});

function openSmallWindow() {
    window.open("tv-replay.html", "onairNew", "width=850,height=760,left=100,top=100");
}


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
    let slideIndex = 0;
    let slides = document.querySelectorAll(".top-banner > img:not(.prev):not(.next)"); // 좌우 화살표 제외
    let indicators = document.querySelectorAll(".indicator div");
    let playBtn = document.querySelector(".play-btn");
    let isPlaying = true;
    let slideInterval = setInterval(nextSlide, 3000);

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
            playBtn.textContent = "▶";
        } else {
            slideInterval = setInterval(nextSlide, 3000);
            playBtn.textContent = "⏸";
        }
        isPlaying = !isPlaying;
    });

    showSlide(slideIndex);
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

/* 클릭 시 active 클래스를 추가하는 JS */
document.querySelectorAll(".tv-menu li").forEach(item => {
    item.addEventListener("click", function() {
        document.querySelectorAll(".tv-menu li").forEach(li => {
            li.classList.remove("active");
            li.style.border = "1px solid #e5e5e5";
            li.style.color = "#909090";
            li.style.backgroundColor = "transparent";
        });
        this.classList.add("active");
        this.style.backgroundColor = "#BF9A0B";
        this.style.color = "white";
        this.style.border = "none";
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



























