/*
	Language Toggle
	English (default) / Chinese
*/

(function () {

	var langs = {
		en: {
			'header.subtitle': 'Student',
			'nav.intro': 'Intro',
			'nav.work': 'Work',
			'nav.about': 'About',
			'nav.contact': 'Contact',
			'intro.heading': 'Intro',
			'intro.p1': 'Hi, I\'m Bo An Chen (陳柏安).<br />I\'m a student majoring in Information Management at Taiwan University of Science and Technology.',
			'intro.p2': 'In a world of code and databases, I\'m someone with an obsession for &ldquo;efficiency.&rdquo;',
			'intro.p3': 'My inspiration comes from how people interact with digital environments &mdash; from complex databases to everyday apps.<br />I focus on turning user needs into clear, logical systems that make technology feel more intuitive.',
			'intro.p4': 'Welcome to my world.',
			'intro.btn': 'View My Projects',
			'work.heading': 'Work',
			'work.description': 'Here are some of my featured projects. Click on any project to learn more.',
			'work.whateat.title': 'WhatEat APP',
			'work.whateat.short': 'AI-powered restaurant recommendation app',
			'whateat.title': 'WhatEat APP',
			'whateat.subtitle': 'AI-Powered Restaurant Recommendation',
			'whateat.desc1': 'WhatEat is a university capstone project that solves the "what to eat" decision paralysis problem. Unlike traditional food apps that rely on keyword searches, WhatEat uses AI to proactively recommend restaurants based on your implicit needs.',
			'whateat.features.title': 'Key Features',
			'whateat.features.1': '<strong>Contextual Understanding:</strong> Uses LLM to understand implicit needs (mood, weather, dining purpose)',
			'whateat.features.2': '<strong>Explainable AI:</strong> Tells users WHY a restaurant is recommended, building trust',
			'whateat.features.3': '<strong>Smart Search:</strong> AI-powered conversational search interface',
			'whateat.features.4': '<strong>Personalization:</strong> Dietary preferences and restrictions support',
			'whateat.screenshots': 'Screenshots',
			'whateat.tech.title': 'Tech Stack',
			'whateat.tech.desc': 'Android (Kotlin), LLM API, Google Places API, SQL Database',
			'whateat.team.title': 'Team',
			'whateat.back': '← Back to Work',
			'about.heading': 'About',
			'contact.heading': 'Contact',
			'contact.name': 'Name',
			'contact.email': 'Email',
			'contact.message': 'Message',
			'contact.send': 'Send Message',
			'contact.reset': 'Reset',
			'close': 'Close',
			'footer.copy': '&copy; 2026 BO AN CHEN. Design: <a href="https://html5up.net">HTML5 UP</a>.',
			'lang.toggle': '中文'
		},
		zh: {
			'header.subtitle': '學生',
			'nav.intro': '介紹',
			'nav.work': '作品',
			'nav.about': '關於',
			'nav.contact': '聯絡',
			'intro.heading': '介紹',
			'intro.p1': '嗨，我是陳柏安 (Chen Bo An)。<br />我是台灣科技大學資訊管理系的學生。',
			'intro.p2': '在充滿程式碼與資料庫的世界裡，我是一個對「效率」有執著的異類。',
			'intro.p3': '我的靈感來自於人們與數位環境互動的方式——從複雜的資料庫到日常的 App。<br />我專注於將使用者的需求轉化為清晰、合乎邏輯的系統，讓科技體驗變得更加直覺。',
			'intro.p4': '歡迎來到我的世界。',
			'intro.btn': '查看我的專案',
			'work.heading': '作品',
			'work.description': '這裡是我的精選專案。點擊任一專案了解更多。',
			'work.whateat.title': 'WhatEat APP',
			'work.whateat.short': 'AI 智慧餐廳推薦應用程式',
			'whateat.title': 'WhatEat APP',
			'whateat.subtitle': 'AI 智慧餐廳推薦',
			'whateat.desc1': 'WhatEat 是大學專題課程作品，解決「今天吃什麼」的選擇障礙問題。有別於傳統美食 App 依賴使用者主動搜尋，WhatEat 利用 AI 實現主動推薦，根據使用者的隱性需求推薦餐廳。',
			'whateat.features.title': '核心功能',
			'whateat.features.1': '<strong>情境感知：</strong>使用 LLM 理解使用者的隱性需求（心情、天氣、聚餐目的）',
			'whateat.features.2': '<strong>可解釋的 AI：</strong>告訴使用者「為什麼推這家餐廳」，建立信任感',
			'whateat.features.3': '<strong>智慧搜尋：</strong>AI 對話式搜尋介面',
			'whateat.features.4': '<strong>個人化設定：</strong>支援飲食偏好與限制',
			'whateat.screenshots': '應用程式截圖',
			'whateat.tech.title': '技術架構',
			'whateat.tech.desc': 'Android (Kotlin), LLM API, Google Places API, SQL 資料庫',
			'whateat.team.title': '團隊成員',
			'whateat.back': '← 返回作品集',
			'about.heading': '關於',
			'contact.heading': '聯絡',
			'contact.name': '姓名',
			'contact.email': '信箱',
			'contact.message': '訊息',
			'contact.send': '送出訊息',
			'contact.reset': '清除',
			'close': '關閉',
			'footer.copy': '&copy; 2026 陳柏安. 設計: <a href="https://html5up.net">HTML5 UP</a>.',
			'lang.toggle': 'EN'
		}
	};

	// Current language
	var currentLang = 'en';

	function applyLang(lang) {
		currentLang = lang;
		localStorage.setItem('lang', lang);
		var data = langs[lang];

		// Update all elements with data-i18n attribute
		document.querySelectorAll('[data-i18n]').forEach(function (el) {
			var key = el.getAttribute('data-i18n');
			if (data[key] !== undefined) {
				if (el.tagName === 'INPUT') {
					el.value = data[key];
				} else {
					el.innerHTML = data[key];
				}
			}
		});

		// Update dynamically-created close buttons (added by main.js)
		document.querySelectorAll('.close').forEach(function (el) {
			el.textContent = data['close'];
		});

		// Update toggle button text
		var toggleBtn = document.getElementById('lang-toggle');
		if (toggleBtn) {
			toggleBtn.textContent = data['lang.toggle'];
		}

		// Update html lang attribute
		document.documentElement.lang = lang === 'en' ? 'en' : 'zh-TW';

		console.log('Language set to:', lang);
	}

	// Toggle language function - exposed globally
	window.toggleLanguage = function () {
		var newLang = currentLang === 'en' ? 'zh' : 'en';
		applyLang(newLang);
	};

	// Initialize on DOM ready
	function init() {
		// Apply saved language or default to English
		var savedLang = localStorage.getItem('lang') || 'en';
		applyLang(savedLang);
	}

	// Multiple initialization methods for reliability
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}

	// Also re-apply on window load (for dynamically created elements like .close buttons)
	window.addEventListener('load', function () {
		var savedLang = localStorage.getItem('lang') || 'en';
		applyLang(savedLang);
	});

})();
