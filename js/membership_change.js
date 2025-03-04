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
