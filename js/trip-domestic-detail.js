document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.program-menu li');
    const mainContent = document.querySelector('body'); // 전체 컨텐츠를 감싸는 요소로 변경
    
    // 초기 상태 설정 (홈 메뉴 활성화)
    mainContent.classList.add('menu-home');
    document.querySelector('.program-menu li:nth-child(3)').classList.add('active');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // 모든 메뉴 클래스 제거
            mainContent.classList.remove('menu-home', 'menu-oversea', 'menu-domestic', 'menu-review', 'menu-inquiry');
            
            // 클릭된 메뉴에 따라 클래스 추가
            switch(this.textContent.trim()) {
                case '홈':
                    mainContent.classList.add('menu-home');
                    break;
                case '해외성지순례':
                    mainContent.classList.add('menu-oversea');
                    break;
                case '국내성지순례':
                    mainContent.classList.add('menu-domestic');
                    break;
                case '여행후기':
                    mainContent.classList.add('menu-review');
                    break;
                case '문의사항':
                    mainContent.classList.add('menu-inquiry');
                    break;
            }
            
            // 활성 메뉴 표시
            menuItems.forEach(m => m.classList.remove('active'));
            this.classList.add('active');
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

const shareBtn = document.querySelector('.icon-box img'); // 공유 아이콘 선택
const shareModal = document.getElementById('shareModal');
const closeModal = document.getElementById('closeModal');

shareBtn.addEventListener('click', () => {
    shareModal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    shareModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === shareModal) {
        shareModal.style.display = 'none';
    }
});