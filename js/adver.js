document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".adver-sub-title li");
    const sections = document.querySelectorAll(".adver-section");

    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            // 기존 선택된 메뉴 스타일 초기화
            menuItems.forEach(menu => menu.classList.remove("active"));
            sections.forEach(section => section.classList.remove("active"));

            // 선택한 메뉴 활성화
            this.classList.add("active");
            document.getElementById(this.getAttribute("data-target")).classList.add("active");
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
