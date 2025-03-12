document.addEventListener("DOMContentLoaded", function () {
    // 종영 메뉴를 클릭하면 'end-program-menu'를 보이게 하고, 다시 클릭하면 숨기게 함
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

    // TV 메뉴 관련 요소들
    const allTvMenuItems = document.querySelectorAll(".tv-menu li"); // TV 메뉴 항목
    const replayGrid = document.querySelector(".replay-grid"); // 다시보기 콘텐츠
    const numberPagination = document.querySelector(".number"); // 페이지네이션
    const tvContentGrid = document.querySelector(".tv-content-grid"); // TV 콘텐츠
    const detailMenus = document.querySelectorAll(".tv-detail-menu li"); // 기본, 최신, 가나다 메뉴

    // "특집"과 "종영" 메뉴 찾기
    const specialMenu = document.querySelector(".tv-menu li:nth-child(8)"); // "특집"
    const endProgramMenu = document.querySelector(".tv-menu .end-program-toggle"); // "종영"

    // 정렬 메뉴 요소
    const latestSort = document.querySelector('.tv-detail-menu li:first-child'); // 최신 순
    const alphaDescSort = document.querySelector('.tv-detail-menu li:nth-child(2)'); // 가나다 순(내림차순)
    const alphaAscSort = document.querySelector('.tv-detail-menu li:nth-child(3)'); // 가나다 순(오름차순)
    
    // 정렬 아이콘 이미지
    const sortIcons = document.querySelectorAll('.tv-detail-menu li img');
    
    // 기본 상태 설정 (일반 TV 콘텐츠 보이기)
    replayGrid.style.display = "none";
    numberPagination.style.display = "none";

    // TV 메뉴 클릭 이벤트 추가
    allTvMenuItems.forEach(item => {
        item.addEventListener("click", function () {
            // 모든 메뉴에서 active 클래스 제거
            allTvMenuItems.forEach(menu => menu.classList.remove("active"));

            // 현재 클릭한 메뉴에 active 클래스 추가
            this.classList.add("active");

            // "특집" 또는 "종영" 클릭 시
            if (this === specialMenu || this === endProgramMenu) {
                tvContentGrid.style.display = "none"; // TV 콘텐츠 숨김
                replayGrid.style.display = "grid"; // 다시보기 콘텐츠 표시
                numberPagination.style.display = "flex"; // 페이지네이션 표시
                
                // 최신 순 숨기기
                latestSort.style.display = 'none';
                
                // 가나다 순 두 개만 표시하고 첫 번째 가나다순 활성화
                latestSort.classList.remove('active');
                alphaDescSort.classList.add('active');
                
                // 첫 번째 가나다 순 아이콘 opacity 100%로 설정
                if (alphaDescSort.querySelector('img')) {
                    alphaDescSort.querySelector('img').style.opacity = '1';
                }
            } else {
                tvContentGrid.style.display = "grid"; // TV 콘텐츠 표시
                replayGrid.style.display = "none"; // 다시보기 콘텐츠 숨김
                numberPagination.style.display = "none"; // 페이지네이션 숨김
                
                // 최신 순 다시 표시하고 활성화
                latestSort.style.display = 'flex';
                latestSort.classList.add('active');
                alphaDescSort.classList.remove('active');
                alphaAscSort.classList.remove('active');
                
                // 모든 아이콘 opacity 초기화
                sortIcons.forEach(icon => {
                    icon.style.opacity = '0.4';
                });
            }
        });
    });

    // "기본", "최신", "가나다" 메뉴 클릭 이벤트 추가
    detailMenus.forEach(menu => {
        menu.addEventListener("click", function () {
            // 모든 상세 메뉴에서 active 클래스 제거
            detailMenus.forEach(item => item.classList.remove('active'));

            // 클릭한 메뉴에 active 클래스 추가
            this.classList.add('active');
        });
    });
    
    // 가나다 순 아이콘 호버/클릭 시 opacity 조정
    sortIcons.forEach(icon => {
        // 기본 opacity 설정
        icon.style.opacity = '0.4';
        
        // 호버 시 opacity 변경
        icon.parentElement.addEventListener('mouseenter', function() {
            icon.style.opacity = '1';
        });
        
        // 마우스 떠날 때 원래대로 (active가 아닌 경우)
        icon.parentElement.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                icon.style.opacity = '0.4';
            }
        });
        
        // 클릭 시 opacity 유지 및 active 클래스 관리
        icon.parentElement.addEventListener('click', function() {
            // 모든 메뉴 아이템에서 active 클래스 제거
            document.querySelectorAll('.tv-detail-menu li').forEach(item => {
                item.classList.remove('active');
            });
            
            // 모든 아이콘 opacity 초기화
            sortIcons.forEach(img => {
                img.style.opacity = '0.4';
            });
            
            // 현재 클릭한 아이템에 active 클래스 추가 및 아이콘 opacity 설정
            this.classList.add('active');
            icon.style.opacity = '1';
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
