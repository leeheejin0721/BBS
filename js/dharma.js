document.addEventListener("DOMContentLoaded", function() {
    const dharmaMenu = document.querySelector(".dharma-menu li:first-child"); // 법회 메뉴
    const lanternMenu = document.querySelector(".dharma-menu li:last-child"); // 연등 메뉴
    const dharmaContent = document.querySelector(".dharma-content"); // 법회 콘텐츠
    const lanternContent = document.querySelector(".lantern-content"); // 연등 콘텐츠

    // 메뉴 클릭 이벤트
    dharmaMenu.addEventListener("click", function() {
        dharmaMenu.classList.add("active");
        lanternMenu.classList.remove("active");
        dharmaContent.style.display = "block";
        lanternContent.style.display = "none"; // 연등 콘텐츠 숨김
    });

    lanternMenu.addEventListener("click", function() {
        lanternMenu.classList.add("active");
        dharmaMenu.classList.remove("active");
        dharmaContent.style.display = "none"; // 법회 콘텐츠 숨김
        lanternContent.style.display = "block"; // 연등 콘텐츠 표시
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

