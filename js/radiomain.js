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