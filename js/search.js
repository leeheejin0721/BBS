// 초기 설정: 전체 메뉴에서는 각 섹션의 일부만 표시
document.addEventListener('DOMContentLoaded', function() {
    // 초기 상태 설정
    initializeView();
    
    // 메뉴 클릭 이벤트 리스너 추가
    const menuItems = document.querySelectorAll('.program-menu ul li');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // 이전 활성 메뉴 비활성화
            menuItems.forEach(i => i.classList.remove('active'));
            // 현재 메뉴 활성화
            this.classList.add('active');
            // 메뉴에 따른 뷰 업데이트
            updateView(this.textContent);
        });
    });
});

function initializeView() {
    // TV 프로그램 섹션 제한
    limitContent('.program-tv .replay-grid article', 8);
    hideElement('.program-tv .number');
    hideElement('.program-tv .search-container');
    
    // 라디오 프로그램 섹션 제한
    limitContent('.program-radio .replay-grid article', 3);
    hideElement('.program-radio .number');
    hideElement('.program-radio .search-container');
    
    // 다시보기 섹션 제한
    limitContent('.program-replay .replay-grid article', 8);
    hideElement('.program-replay .number');
    hideElement('.program-replay .search-container');
    
    // 다시듣기 섹션 제한
    limitContent('.radio-program-replay tbody tr', 5);
    hideElement('.radio-program-replay .number');
    hideElement('.radio-program-replay .search-container');
    
    // 모든 섹션 표시
    showAllSections();
}

function updateView(menuText) {
    // 모든 섹션 숨기기
    hideAllSections();
    
    switch(menuText) {
        case 'TV 프로그램':
            showSection('.program-tv');
            showAllContent('.program-tv .replay-grid article');
            showElement('.program-tv .number');
            showElement('.program-tv .search-container');
            break;
        case '라디오 프로그램':
            showSection('.program-radio');
            showAllContent('.program-radio .replay-grid article');
            showElement('.program-radio .number');
            showElement('.program-radio .search-container');
            break;
        case '다시보기':
            showSection('.program-replay');
            showAllContent('.program-replay .replay-grid article');
            showElement('.program-replay .number');
            showElement('.program-replay .search-container');
            break;
        case '다시듣기':
            showSection('.radio-program-replay');
            showAllContent('.radio-program-replay tbody tr');
            showElement('.radio-program-replay .number');
            showElement('.radio-program-replay .search-container');
            break;
        default: // '전체' 메뉴
            initializeView();
            break;
    }
}

function hideAllSections() {
    const sections = ['.program-tv', '.program-radio', '.program-replay', '.radio-program-replay'];
    sections.forEach(section => hideSection(section));
}

function showAllSections() {
    const sections = ['.program-tv', '.program-radio', '.program-replay', '.radio-program-replay'];
    sections.forEach(section => showSection(section));
}

function limitContent(selector, limit) {
    const items = document.querySelectorAll(selector);
    items.forEach((item, index) => {
        if (index >= limit) {
            item.style.display = 'none';
        } else {
            item.style.display = '';
        }
    });
}

function showAllContent(selector) {
    const items = document.querySelectorAll(selector);
    items.forEach(item => item.style.display = '');
}

function hideElement(selector) {
    const element = document.querySelector(selector);
    if (element) element.style.display = 'none';
}

function showElement(selector) {
    const element = document.querySelector(selector);
    if (element) element.style.display = '';
}

function hideSection(selector) {
    const section = document.querySelector(selector);
    if (section) section.style.display = 'none';
}

function showSection(selector) {
    const section = document.querySelector(selector);
    if (section) section.style.display = '';
}