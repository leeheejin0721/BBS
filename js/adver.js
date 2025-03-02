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
