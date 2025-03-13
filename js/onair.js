document.addEventListener("DOMContentLoaded", function() {
    const tvMenu = document.querySelector(".dharma-menu li:first-child"); // TV 메뉴
    const radioMenu = document.querySelector(".dharma-menu li:last-child"); // 라디오 메뉴
    const newVideoSection = document.querySelector(".new-video"); // new-video 섹션

    // 초기 설정: TV 메뉴 활성화
    tvMenu.classList.add("active");
    newVideoSection.style.display = "block";

    // TV 메뉴 클릭 이벤트
    tvMenu.addEventListener("click", function() {
        tvMenu.classList.add("active");
        radioMenu.classList.remove("active");
        newVideoSection.style.display = "block";
    });

    // 라디오 메뉴 클릭 이벤트
    radioMenu.addEventListener("click", function() {
        radioMenu.classList.add("active");
        tvMenu.classList.remove("active");
        newVideoSection.style.display = "none";
    });
});

const shareBtn = document.getElementById('shareBtn');
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

        function copyUrl() {
            const urlInput = document.getElementById('shareUrl');
            urlInput.select();
            document.execCommand('copy');
            alert('URL이 복사되었습니다!');
        }

document.addEventListener("DOMContentLoaded", function () {
    const newModal = document.getElementById("newModal");
    const newBtn = document.querySelector(".onair-vidio-icon .new");
    
    // 새창 버튼 클릭 시 modal2 표시
    newBtn.addEventListener("click", function (event) {
        event.preventDefault(); // 기본 동작 방지
        newModal.style.display = "flex";
    });

    // 모달 바깥 영역 클릭 시 닫기
    newModal.addEventListener("click", function (event) {
        if (event.target === newModal) {
            newModal.style.display = "none";
        }
    });
});

function openSmallWindow() {
    window.open("onair_new.html", "onairNew", "width=688,height=690,left=100,top=100");
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