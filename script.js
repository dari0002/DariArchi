// Remove the toggleMenu function since we're not using it anymore
// Add any additional interactivity here if needed

document.querySelectorAll('.tetris-piece').forEach(piece => {
    piece.addEventListener('click', () => {
        piece.style.transform = `rotate(${Math.random() * 360}deg)`;
        setTimeout(() => {
            piece.style.transform = 'rotate(0deg)';
        }, 500);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const category = btn.dataset.category;

            projectCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                    card.style.opacity = '1';
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});

// Обновляем объект с переводами
const translations = {
    'en': {
        about: 'ABOUT ME',
        all: 'All',
        residential: 'Residential',
        commercial: 'Commercial',
        cultural: 'Cultural',
        urban: 'Urban'
    },
    'ru': {
        about: 'ОБО МНЕ',
        all: 'Все',
        residential: 'Жилые',
        commercial: 'Коммерческие',
        cultural: 'Культурные',
        urban: 'Городские'
    },
    'cz': {
        about: 'O MNĚ',
        all: 'Vše',
        residential: 'Obytné',
        commercial: 'Komerční',
        cultural: 'Kulturní',
        urban: 'Městské'
    },
    '中文': {
        search: '+ 搜索和筛选',
        projects: '474 个项目',
        grid: '网格',
        list: '列表',
        map: '地图',
        loadMore: '加载更多',
        menuOpen: '菜单',
        menuClose: '关闭',
        project1_title: '城市发展',
        project1_desc: '综合用途建筑群',
        project1_location: '鹿特丹，荷兰',
        project2_title: '文化中心',
        project2_desc: '公共空间',
        project2_location: '首尔，韩国',
        project3_title: '交通枢纽',
        project3_desc: '基础设施',
        project3_location: '上海，中国',
        project4_title: '住宅大厦',
        project4_desc: '住房',
        project4_location: '纽约，美国'
    },
    '日本語': {
        search: '+ 検索とフィルター',
        projects: '474 プロジェクト',
        grid: 'グリッド',
        list: 'リスト',
        map: '地図',
        loadMore: 'もっと読み込む',
        menuOpen: 'メニュー',
        menuClose: '閉じる',
        project1_title: '都市開発',
        project1_desc: '複合施設',
        project1_location: 'ロッテルダム、オランダ',
        project2_title: '文化センター',
        project2_desc: '公共スペース',
        project2_location: 'ソウル、韓国',
        project3_title: '交通ハブ',
        project3_desc: 'インフラ',
        project3_location: '上海、中国',
        project4_title: '住宅タワー',
        project4_desc: '住宅',
        project4_location: 'ニューヨーク、米国'
    }
};

// Функция для фильтрации проектов
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-item');
    
    projects.forEach(project => {
        if (category === 'all') {
            project.style.display = 'block';
        } else {
            const projectCategory = project.getAttribute('data-category');
            project.style.display = projectCategory === category ? 'block' : 'none';
        }
    });
}

// Обработчики для фильтров
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Убираем активный класс у всех кнопок
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active');
        });
        
        // Добавляем активный класс нажатой кнопке
        btn.classList.add('active');
        
        // Фильтруем проекты
        const category = btn.getAttribute('data-filter');
        filterProjects(category);
    });
});

// Функция для переключения языков
function switchLanguage(lang) {
    // Убираем активный класс у всех языковых ссылок
    document.querySelectorAll('.lang-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Добавляем активный класс выбранному языку
    document.querySelector(`.lang-link[data-lang="${lang}"]`).classList.add('active');
    
    // Сохраняем выбранный язык
    localStorage.setItem('selectedLanguage', lang);
    
    // Переводим текст
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Обновляем тексты фильтров
    document.querySelectorAll('.filter-btn').forEach(btn => {
        const key = btn.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            btn.textContent = translations[lang][key];
        }
    });
}

// Обновляем HTML для языковых ссылок
document.querySelector('.language-switcher').innerHTML = `
    <a href="#" class="lang-link" data-lang="cz">cz</a>
    <a href="#" class="lang-link active" data-lang="en">en</a>
    <a href="#" class="lang-link" data-lang="ru">ru</a>
`;

// Добавляем обработчики событий
document.querySelectorAll('.lang-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = link.getAttribute('data-lang');
        switchLanguage(lang);
    });
});

// При загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Устанавливаем активный фильтр "All"
    document.querySelector('[data-filter="all"]').classList.add('active');
    
    // Загружаем сохраненный язык
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    switchLanguage(savedLanguage);
});

// Для мобильной версии
const handleMobileLanguage = () => {
    const langSwitcher = document.querySelector('.language-switcher');
    if (window.innerWidth <= 768) {
        langSwitcher.classList.toggle('show');
    }
};
