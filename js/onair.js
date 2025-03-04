document.addEventListener("DOMContentLoaded", function() {
    const tvMenu = document.querySelector(".dharma-menu li:first-child"); // TV 메뉴
    const radioMenu = document.querySelector(".dharma-menu li:last-child"); // 라디오 메뉴
    const newVideoSection = document.querySelector(".new-video"); // new-video 섹션

    // 초기 설정: TV 메뉴 활성화
    tvMenu.classList.add("active");
    newVideoSection.style.display = "block";

    // TV 메뉴 클릭 이벤트
    tvMenu.addEventListener("click", function() {
        tvMenu.classList.add("active");
        radioMenu.classList.remove("active");
        newVideoSection.style.display = "block";
    });

    // 라디오 메뉴 클릭 이벤트
    radioMenu.addEventListener("click", function() {
        radioMenu.classList.add("active");
        tvMenu.classList.remove("active");
        newVideoSection.style.display = "none";
    });
});

const shareBtn = document.getElementById('shareBtn');
        const shareModal = document.getElementById('shareModal');
        const closeModal = document.getElementById('closeModal');

        shareBtn.addEventListener('click', () => {
            shareModal.style.display = 'flex';
        });

        closeModal.addEventListener('click', () => {
            shareModal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === shareModal) {
                shareModal.style.display = 'none';
            }
        });

        function copyUrl() {
            const urlInput = document.getElementById('shareUrl');
            urlInput.select();
            document.execCommand('copy');
            alert('URL이 복사되었습니다!');
        }

        document.addEventListener("DOMContentLoaded", function () {
            const newModal = document.getElementById("newModal");
            const newBtn = document.querySelector(".onair-vidio-icon .new");
            
            // 새창 버튼 클릭 시 modal2 표시
            newBtn.addEventListener("click", function (event) {
                event.preventDefault(); // 기본 동작 방지
                newModal.style.display = "flex";
            });
        
            // 모달 바깥 영역 클릭 시 닫기
            newModal.addEventListener("click", function (event) {
                if (event.target === newModal) {
                    newModal.style.display = "none";
                }
            });
        });

        function openSmallWindow() {
            window.open("onair_new.html", "onairNew", "width=850,height=760,left=100,top=100");
        }