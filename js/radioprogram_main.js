document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".program-menu ul li");
    const allSections = document.querySelectorAll("section");
    const detailSection = document.getElementById("program-introduce-detail");
    const noticeSection = document.querySelector(".notice");
    const bannerSection = document.querySelector(".banner");
    const programNotice = document.querySelector(".program-notice");
    const programReplay = document.querySelector(".program-replay");
    const noticeBoard = document.querySelector(".notice-board");
    const programList = document.querySelector(".program-list");
    const programPhoto = document.querySelector(".program-photo");
    const replayArticles = document.querySelectorAll(".program-replay article");
    const replayRows = document.querySelectorAll(".program-replay tbody tr");
    const noticeRows = document.querySelectorAll(".program-notice tbody tr");
    const boardRows = document.querySelectorAll(".notice-board tbody tr");
    const programListRows = document.querySelectorAll(".program-list tbody tr");
    const photoArticles = document.querySelectorAll(".program-photo article");
    const numberElements = document.querySelectorAll(".number");
    const searchContainers = document.querySelectorAll(".search-container");

    const noticeBoardViewAll = document.querySelector(".notice-board p");
    const noticeBoardWriteButton = document.querySelector(".notice-board a.button");

    // 출연진 관련 요소
    const programCharacter = document.querySelector(".program-character");
    const programCharacterDetail = document.querySelector(".program-character-detail");

    // 새로 추가된 부분: 모든 "전체보기" 요소 선택
    const viewAllElements = document.querySelectorAll(
        ".replay-title > p, " +
        ".program-list-title > p, " +
        ".program-notice-title > p, " +
        ".program-photo .replay-title > p"
    );

    function updateVisibility() {
        const activeMenu = document.querySelector(".program-menu ul li.active").textContent.trim();

        if (activeMenu === "홈") {
            allSections.forEach(section => section.style.display = "block");
            detailSection.style.display = "none";

            // 출연진 관련 변경 사항
            programCharacter.style.display = "block";  // 기본 출연진 보이기
            programCharacterDetail.style.display = "none"; // 상세 출연진 숨기기

            // 전체보기 요소 표시
            viewAllElements.forEach(el => {
                el.style.display = "block";
            });

            replayArticles.forEach((article, index) => {
                article.style.display = index < 8 ? "block" : "none";
            });

            replayRows.forEach((row, index) => {
                row.style.display = index < 5 ? "table-row" : "none";
            });

            programListRows.forEach((row, index) => {
                row.style.display = index < 5 ? "table-row" : "none";
            });

            photoArticles.forEach((article, index) => {
                article.style.display = index < 8 ? "block" : "none";
            });

            programReplay.style.display = "block";
            programList.style.display = "block";
            programPhoto.style.display = "block";

            numberElements.forEach(el => el.style.display = "none");
            searchContainers.forEach(el => el.style.display = "none");

            noticeRows.forEach((row, index) => {
                row.style.display = index < 5 ? "table-row" : "none";
            });

            boardRows.forEach((row, index) => {
                row.style.display = index < 5 ? "table-row" : "none";
            });

            if (noticeBoardViewAll) noticeBoardViewAll.style.display = "block";
            if (noticeBoardWriteButton) noticeBoardWriteButton.style.display = "none";

        } else {
            allSections.forEach(section => section.style.display = "none");

            // 전체보기 요소 숨김
            viewAllElements.forEach(el => {
                el.style.display = "none";
            });

            document.querySelector(".tvProgram-menu").style.display = "block";
            bannerSection.style.display = "block";
            noticeSection.style.display = "block";

            if (activeMenu === "프로그램 소개") {
                detailSection.style.display = "block";
            } else if (activeMenu === "출연진") {
                programCharacter.style.display = "none";  // 기본 출연진 숨기기
                programCharacterDetail.style.display = "block"; // 상세 출연진 보이기
            } else if (activeMenu === "다시듣기") {
                programReplay.style.display = "block";
                programReplay.querySelector(".container").style.display = "block";
                replayRows.forEach(row => row.style.display = "table-row");
                numberElements.forEach(el => el.style.display = "flex");
                searchContainers.forEach(el => el.style.display = "flex");
            } else if (activeMenu === "선곡표") {
                programList.style.display = "block";
                programList.querySelector(".container").style.display = "block";
                programListRows.forEach(row => row.style.display = "table-row");
                numberElements.forEach(el => el.style.display = "flex");
                searchContainers.forEach(el => el.style.display = "flex");
            } else if (activeMenu === "공지사항") {
                programNotice.style.display = "block";
                programNotice.querySelector(".container").style.display = "block";
                noticeRows.forEach(row => row.style.display = "table-row");
                numberElements.forEach(el => el.style.display = "flex");
                searchContainers.forEach(el => el.style.display = "flex");
            } else if (activeMenu === "시청자 게시판") {
                noticeBoard.style.display = "block";
                noticeBoard.querySelector(".container").style.display = "block";
                boardRows.forEach(row => row.style.display = "table-row");
                numberElements.forEach(el => el.style.display = "flex");
                searchContainers.forEach(el => el.style.display = "flex");

                if (noticeBoardViewAll) noticeBoardViewAll.style.display = "none";
                if (noticeBoardWriteButton) noticeBoardWriteButton.style.display = "block";
            } else if (activeMenu === "포토 갤러리") {
                programPhoto.style.display = "block";
                programPhoto.querySelector(".container").style.display = "block";
                photoArticles.forEach(article => article.style.display = "block");
                numberElements.forEach(el => el.style.display = "flex");
                searchContainers.forEach(el => el.style.display = "flex");
            }

            if (activeMenu !== "홈" && activeMenu !== "시청자 게시판") {
                if (noticeBoardViewAll) noticeBoardViewAll.style.display = "none";
                if (noticeBoardWriteButton) noticeBoardWriteButton.style.display = "none";
            }
        }
    }

    updateVisibility();

    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            menuItems.forEach(i => i.classList.remove("active"));
            this.classList.add("active");
            updateVisibility();
        });
    });
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


document.addEventListener("DOMContentLoaded", function () {
    // 모든 play-button 이미지를 선택
    document.querySelectorAll(".notice-table tbody tr td img").forEach(function (img) {
        img.addEventListener("click", function () {
            // 새 창을 열기
            window.open("radio-replay.html", "_blank", "width=860,height=710");
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


