// 종영 메뉴를 클릭하면 'end-program-menu'를 보이게 하고, 다시 클릭하면 숨기게 함함.
document.querySelector('.end-program-toggle').addEventListener('click', function(event) {
    event.stopPropagation(); // 클릭 이벤트가 상위 요소로 전파되지 않도록 막음
    var endProgramMenu = document.querySelector('.end-program-menu');
    
    if (endProgramMenu.style.display === 'none' || endProgramMenu.style.display === '') {
        endProgramMenu.style.display = 'flex'; // 메뉴를 보이게 설정
    } else {
        endProgramMenu.style.display = 'none'; // 메뉴를 숨김
    }
});

// 'end-program-menu' 항목 클릭 시 스타일 적용
const endProgramMenuItems = document.querySelectorAll('.end-program-menu > li');

// 각 항목에 클릭 이벤트 추가
endProgramMenuItems.forEach(item => {
    item.addEventListener('click', function() {
        // 기존에 선택된 'active' 클래스를 제거
        endProgramMenuItems.forEach(menuItem => menuItem.classList.remove('active'));
        
        // 클릭된 항목에 'active' 클래스 추가
        item.classList.add('active');
    });
});

// 다른 메뉴를 클릭하면 'end-program-menu'를 숨김
const tvMenuItems = document.querySelectorAll('.tv-menu > li:not(.end-program-toggle)');

tvMenuItems.forEach(item => {
    item.addEventListener('click', function() {
        document.querySelector('.end-program-menu').style.display = 'none';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const tvMenuItems = document.querySelectorAll(".tv-menu li"); // TV 메뉴 항목
    const replayGrid = document.querySelector(".replay-grid"); // 다시보기 콘텐츠
    const numberPagination = document.querySelector(".number"); // 페이지네이션
    const tvContentGrid = document.querySelector(".tv-content-grid"); // TV 콘텐츠
    const detailMenus = document.querySelectorAll(".tv-detail-menu li"); // 기본, 최신, 가나다 메뉴

    // "특집"과 "종영" 메뉴 찾기
    const specialMenu = document.querySelector(".tv-menu li:nth-child(8)"); // "특집"
    const endProgramMenu = document.querySelector(".tv-menu .end-program-toggle"); // "종영"

    // 기본 상태 설정 (일반 TV 콘텐츠 보이기)
    replayGrid.style.display = "none";
    numberPagination.style.display = "none";

    // TV 메뉴 클릭 이벤트 추가
    tvMenuItems.forEach(item => {
        item.addEventListener("click", function () {
            // 모든 메뉴에서 active 클래스 제거
            tvMenuItems.forEach(menu => menu.classList.remove("active"));

            // 현재 클릭한 메뉴에 active 클래스 추가
            this.classList.add("active");

            // "특집" 또는 "종영" 클릭 시
            if (this === specialMenu || this === endProgramMenu) {
                tvContentGrid.style.display = "none"; // TV 콘텐츠 숨김
                replayGrid.style.display = "grid"; // 다시보기 콘텐츠 표시
                numberPagination.style.display = "flex"; // 페이지네이션 표시
            } else {
                tvContentGrid.style.display = "grid"; // TV 콘텐츠 표시
                replayGrid.style.display = "none"; // 다시보기 콘텐츠 숨김
                numberPagination.style.display = "none"; // 페이지네이션 숨김
            }
        });
    });

    // "기본", "최신", "가나다" 메뉴 클릭 이벤트 추가
    detailMenus.forEach(menu => {
        menu.addEventListener("click", function () {
            // 모든 상세 메뉴에서 active 클래스 제거
            detailMenus.forEach(item => item.classList.remove("active"));

            // 클릭한 메뉴에 active 클래스 추가
            this.classList.add("active");
        });
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

