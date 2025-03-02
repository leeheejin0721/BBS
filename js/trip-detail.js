document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.program-menu li');
    const mainContent = document.querySelector('body'); // 전체 컨텐츠를 감싸는 요소로 변경
    
    // 초기 상태 설정 (홈 메뉴 활성화)
    mainContent.classList.add('menu-home');
    document.querySelector('.program-menu li:nth-child(2)').classList.add('active');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // 모든 메뉴 클래스 제거
            mainContent.classList.remove('menu-home', 'menu-oversea', 'menu-domestic', 'menu-review', 'menu-inquiry');
            
            // 클릭된 메뉴에 따라 클래스 추가
            switch(this.textContent.trim()) {
                case '홈':
                    mainContent.classList.add('menu-home');
                    break;
                case '해외성지순례':
                    mainContent.classList.add('menu-oversea');
                    break;
                case '국내성지순례':
                    mainContent.classList.add('menu-domestic');
                    break;
                case '여행후기':
                    mainContent.classList.add('menu-review');
                    break;
                case '문의사항':
                    mainContent.classList.add('menu-inquiry');
                    break;
            }
            
            // 활성 메뉴 표시
            menuItems.forEach(m => m.classList.remove('active'));
            this.classList.add('active');
        });
    });
});