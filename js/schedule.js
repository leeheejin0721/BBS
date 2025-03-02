document.addEventListener("DOMContentLoaded", function () {
    const tvMenu = document.querySelector(".dharma-menu li:nth-child(1)"); // TV 메뉴
    const radioMenu = document.querySelector(".dharma-menu li:nth-child(2)"); // 라디오 메뉴
    const programBox = document.querySelector(".program-box"); // TV 편성표
    const programBox2 = document.querySelector(".program-box2"); // 라디오 편성표

    // 초기 상태: TV 메뉴 활성화, 라디오 메뉴 비활성화
    programBox.style.display = "block";
    programBox2.style.display = "none";

    tvMenu.addEventListener("click", function () {
        tvMenu.classList.add("active");
        radioMenu.classList.remove("active");
        programBox.style.display = "block";
        programBox2.style.display = "none";
    });

    radioMenu.addEventListener("click", function () {
        radioMenu.classList.add("active");
        tvMenu.classList.remove("active");
        programBox.style.display = "none";
        programBox2.style.display = "block";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const calender = document.querySelector(".calender");
    const schedule = document.querySelector(".schedule");

    calender.addEventListener("click", function () {
        if (schedule.style.display === "none" || schedule.style.display === "") {
            schedule.style.display = "block";
        } else {
            schedule.style.display = "none";
        }
    });

    // 처음에는 숨김 처리
    schedule.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
    const days = document.querySelectorAll(".day");

    days.forEach(day => {
        day.addEventListener("click", function () {
            // 기존 선택된 요소에서 selected 클래스 제거
            document.querySelectorAll(".day").forEach(d => d.classList.remove("selected"));

            // 현재 클릭한 요소에 selected 클래스 추가
            this.classList.add("selected");
        });
    });
});