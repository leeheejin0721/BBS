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
        } else {
            // 비밀번호가 유효할 때만 페이지 이동
            window.location.href = 'membership_success.html';
        }
    });

    // 처음에는 오류 메시지를 숨겨둠
    errorText.style.display = "none";
});

document.addEventListener('DOMContentLoaded', function() {
    // 체크박스 요소들 가져오기
    const allAgreeCheckbox = document.querySelector('.form-box label:first-of-type input[type="checkbox"]');
    const individualCheckboxes = document.querySelectorAll('.form-box .terms-box + label input[type="checkbox"]');
    const nextButton = document.querySelector('.resit');
    
    // "모두 동의합니다" 체크박스 이벤트 처리
    allAgreeCheckbox.addEventListener('change', function() {
        // 모든 개별 체크박스의 상태를 "모두 동의합니다" 체크박스와 동일하게 설정
        individualCheckboxes.forEach(checkbox => {
            checkbox.checked = allAgreeCheckbox.checked;
        });
    });
    
    // 개별 체크박스 이벤트 처리
    individualCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // 모든 개별 체크박스가 체크되었는지 확인
            const allChecked = Array.from(individualCheckboxes).every(cb => cb.checked);
            // "모두 동의합니다" 체크박스 상태 업데이트
            allAgreeCheckbox.checked = allChecked;
        });
    });
    
    // 다음 버튼 클릭 이벤트 처리
    nextButton.addEventListener('click', function(event) {
        // 모든 개별 체크박스 확인
        const anyUnchecked = Array.from(individualCheckboxes).some(cb => !cb.checked);
        
        // 체크되지 않은 항목이 있으면 경고 메시지 표시 및 페이지 이동 취소
        if (anyUnchecked) {
            event.preventDefault(); // 기본 동작 취소 (링크 이동 방지)
            alert('이용약관에 동의하셔야 회원가입을 하실 수 있습니다.');
        }
        // 모두 체크되었으면 기본 동작 실행 (페이지 이동)
    });
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