document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const passwordConfirmInput = document.getElementById("passwordConfirm");
    const errorText = document.querySelector(".error-text");
    const nextButton = document.querySelector(".resit");

    function validatePassword() {
        const passwordValue = passwordInput.value;
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/; // 특수문자 정규식

        if (!specialCharRegex.test(passwordValue)) {
            errorText.style.display = "block"; // 오류 메시지 표시
            return false;
        } else {
            errorText.style.display = "none"; // 오류 메시지 숨김
            return true;
        }
    }

    // 입력 중에는 오류 메시지를 표시하지 않음
    passwordInput.addEventListener("input", function () {
        errorText.style.display = "none";
    });

    // 엔터를 누르거나 다른 입력 필드로 이동할 때 검증
    passwordInput.addEventListener("blur", validatePassword);
    passwordInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            validatePassword();
        }
    });

    // "비밀번호 확인" 입력창으로 이동 시 검증
    passwordConfirmInput.addEventListener("focus", validatePassword);

    // "다음" 버튼 클릭 시 검증
    nextButton.addEventListener("click", function (event) {
        if (!validatePassword()) {
            event.preventDefault(); // 폼 제출 또는 이동 방지
            alert("비밀번호에 특수문자를 포함해야 합니다.");
        }
    });

    // 처음에는 오류 메시지를 숨겨둠
    errorText.style.display = "none";
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
