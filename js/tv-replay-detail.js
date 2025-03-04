document.addEventListener("DOMContentLoaded", function () {
    const orderItems = document.querySelectorAll(".order li");

    orderItems.forEach((item) => {
        item.addEventListener("click", function () {
            // 모든 항목에서 active 클래스 제거
            orderItems.forEach((li) => li.classList.remove("active"));

            // 클릭된 항목에 active 클래스 추가
            this.classList.add("active");
        });
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
            window.open("tv-replay.html", "onairNew", "width=850,height=760,left=100,top=100");
        }