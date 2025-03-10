// 초기 설정: 전체 메뉴에서는 각 섹션의 일부만 표시
document.addEventListener('DOMContentLoaded', function() {
    // 초기 상태 설정
    initializeView();
    
    // 메뉴 클릭 이벤트 리스너 추가
    const menuItems = document.querySelectorAll('.program-menu ul li');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // 이전 활성 메뉴 비활성화
            menuItems.forEach(i => i.classList.remove('active'));
            // 현재 메뉴 활성화
            this.classList.add('active');
            // 메뉴에 따른 뷰 업데이트
            updateView(this.textContent);
        });
    });
});

function initializeView() {
    // TV 프로그램 섹션 제한
    limitContent('.program-tv .replay-grid article', 8);
    hideElement('.program-tv .number');
    hideElement('.program-tv .search-container');
    
    // 라디오 프로그램 섹션 제한
    limitContent('.program-radio .replay-grid article', 3);
    hideElement('.program-radio .number');
    hideElement('.program-radio .search-container');
    
    // 다시보기 섹션 제한
    limitContent('.program-replay .replay-grid article', 8);
    hideElement('.program-replay .number');
    hideElement('.program-replay .search-container');
    
    // 다시듣기 섹션 제한
    limitContent('.radio-program-replay tbody tr', 5);
    hideElement('.radio-program-replay .number');
    hideElement('.radio-program-replay .search-container');
    
    // 모든 섹션 표시
    showAllSections();
}

function updateView(menuText) {
    // 모든 섹션 숨기기
    hideAllSections();
    
    switch(menuText) {
        case 'TV 프로그램':
            showSection('.program-tv');
            showAllContent('.program-tv .replay-grid article');
            showElement('.program-tv .number');
            showElement('.program-tv .search-container');
            break;
        case '라디오 프로그램':
            showSection('.program-radio');
            showAllContent('.program-radio .replay-grid article');
            showElement('.program-radio .number');
            showElement('.program-radio .search-container');
            break;
        case '다시보기':
            showSection('.program-replay');
            showAllContent('.program-replay .replay-grid article');
            showElement('.program-replay .number');
            showElement('.program-replay .search-container');
            break;
        case '다시듣기':
            showSection('.radio-program-replay');
            showAllContent('.radio-program-replay tbody tr');
            showElement('.radio-program-replay .number');
            showElement('.radio-program-replay .search-container');
            break;
        default: // '전체' 메뉴
            initializeView();
            break;
    }
}

function hideAllSections() {
    const sections = ['.program-tv', '.program-radio', '.program-replay', '.radio-program-replay'];
    sections.forEach(section => hideSection(section));
}

function showAllSections() {
    const sections = ['.program-tv', '.program-radio', '.program-replay', '.radio-program-replay'];
    sections.forEach(section => showSection(section));
}

function limitContent(selector, limit) {
    const items = document.querySelectorAll(selector);
    items.forEach((item, index) => {
        if (index >= limit) {
            item.style.display = 'none';
        } else {
            item.style.display = '';
        }
    });
}

function showAllContent(selector) {
    const items = document.querySelectorAll(selector);
    items.forEach(item => item.style.display = '');
}

function hideElement(selector) {
    const element = document.querySelector(selector);
    if (element) element.style.display = 'none';
}

function showElement(selector) {
    const element = document.querySelector(selector);
    if (element) element.style.display = '';
}

function hideSection(selector) {
    const section = document.querySelector(selector);
    if (section) section.style.display = 'none';
}

function showSection(selector) {
    const section = document.querySelector(selector);
    if (section) section.style.display = '';
}

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