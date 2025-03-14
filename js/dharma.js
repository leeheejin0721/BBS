document.addEventListener("DOMContentLoaded", function() {
    const dharmaMenu = document.querySelector(".dharma-menu li:first-child"); // 법회 메뉴
    const lanternMenu = document.querySelector(".dharma-menu li:last-child"); // 연등 메뉴
    const dharmaContent = document.querySelector(".dharma-content"); // 법회 콘텐츠
    const lanternContent = document.querySelector(".lantern-content"); // 연등 콘텐츠
    const contentMenu = document.querySelector(".content-menu"); // BBS 정기법회 다시보기
    const contentMenu2 = document.querySelector(".content-menu2"); // 연등 접수 신청서 다운로드

    // 초기 상태 설정 (법회 선택)
    dharmaContent.style.display = "block";
    lanternContent.style.display = "none";
    contentMenu.style.display = "block";  // BBS 정기법회 다시보기 보이기
    contentMenu2.style.display = "none";  // 연등 접수 신청서 숨기기

    // 법회 클릭 이벤트
    dharmaMenu.addEventListener("click", function() {
        dharmaMenu.classList.add("active");
        lanternMenu.classList.remove("active");
        dharmaContent.style.display = "block";
        lanternContent.style.display = "none";

        contentMenu.style.display = "block";  // BBS 정기법회 다시보기 보이기
        contentMenu2.style.display = "none";  // 연등 접수 신청서 숨기기
    });

    // 연등 클릭 이벤트
    lanternMenu.addEventListener("click", function() {
        lanternMenu.classList.add("active");
        dharmaMenu.classList.remove("active");
        dharmaContent.style.display = "none";
        lanternContent.style.display = "block";

        contentMenu.style.display = "none";  // BBS 정기법회 다시보기 숨기기
        contentMenu2.style.display = "block";  // 연등 접수 신청서 보이기
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const articles = document.querySelectorAll(".dharma-grid article");
    const modal = document.getElementById("shareModal");
    const closeModal = document.getElementById("closeModal");

    // article 클릭 시 모달 보이기
    articles.forEach(article => {
        article.addEventListener("click", function () {
            modal.style.display = "flex"; // 중앙 정렬을 위해 flex 사용
        });
    });

    // 닫기 버튼 클릭 시 모달 숨기기
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // 모달 바깥 영역 클릭 시 닫기
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
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