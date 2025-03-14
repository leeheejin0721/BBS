document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".form-box").forEach(box => {
        let button = box.querySelector("button");
        let input = box.querySelector("input");
        
        button.addEventListener("click", function () {
            let phoneNumber = input.value.trim();
            
            if (phoneNumber === "") {
                alert("핸드폰 번호를 입력해주세요.");
                return;
            }
            
            if (button.textContent === "가입확인") {
                alert("가입된 핸드폰 번호로 확인되었습니다.");
            } else if (button.textContent === "비밀번호 찾기") {
                alert("가입된 휴대폰번호로 비밀번호를 전송해드렸습니다.");
            }
        });
    });
});