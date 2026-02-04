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
			'whateat.desc1': 'WhatEat solves the "decision paralysis" problem by integrating explicit needs (budget) with implicit behaviors (history, dwell time). It utilizes a RAG architecture to prevent hallucinations, ensuring reliable AI recommendations.',
			'whateat.features.title': 'Core Features',
			'whateat.features.1': '<strong>Contextual Intelligence:</strong> Integrates GPS, Weather, Time, and Implicit Data (history, dwell time) to understand the user\'s situation.',
			'whateat.features.2': '<strong>Explainable AI:</strong> Builds trust by explaining EXACTLY why a restaurant fits the current context (e.g., "Quiet atmosphere suitable for work").',
			'whateat.features.3': '<strong>Conversational Search:</strong> Translates natural language inputs (e.g., "Spicy food, not too expensive") into structured JSON queries.',
			'whateat.features.4': '<strong>Personalization Loop:</strong> Continuously learns from feedback using regression analysis on review features.',
			'whateat.architecture.title': 'System Architecture',
			'whateat.architecture.desc': 'Built on a rigorous RAG (Retrieval-Augmented Generation) framework:',
			'whateat.architecture.1': '<strong>Intent Parsing:</strong> LLM converts vague requests into precise JSON constraints.',
			'whateat.architecture.2': '<strong>Hybrid Retrieval:</strong> Combines SQL (Logic) and Vector DB (Semantic) for accurate candidate selection.',
			'whateat.architecture.3': '<strong>Preference Modeling:</strong> Quantifies sensitivity to food quality/service using regression models.',
			'whateat.highlights.title': 'Technical Highlights',
			'whateat.highlights.1': '<strong>Anti-Hallucination:</strong> Strict context injection ensures the AI never invents non-existent restaurants.',
			'whateat.highlights.2': '<strong>Data Fusion:</strong> Successfully merges unstructured user reviews with structured operational data.',
			'whateat.highlights.3': '<strong>Decision Support:</strong> Significantly reduces user cognitive load during the restaurant selection process.',
			'whateat.screenshots': 'Screenshots',
			'whateat.tech.title': 'Tech Stack',
			'whateat.tech.desc': 'Flutter, Python (Flask), RAG Architecture, SQL Server, Vector Database, LLM API, Google Places API',
			'whateat.team.title': 'Team',
			'whateat.back': '← Back to Work',
			'about.heading': 'About',
			'about.skills.title': 'Skills',
			'about.skills.programming': 'Programming:',
			'about.skills.frameworks': 'Frameworks & Tools:',
			'about.skills.databases': 'Databases:',
			'about.skills.other': 'Other:',
			'about.education.title': 'Education',
			'about.education.school': 'National Taiwan University of Science and Technology',
			'about.education.degree': 'B.S. in Information Management (Class of 2026)',
			'about.education.courses': 'Relevant Coursework: Database Management, Software Engineering, Capstone Project',
			'about.interests.title': 'Interests',
			'about.interests.1': 'Travel and exploring new places',
			'about.interests.2': 'Researching tools and automation',
			'about.interests.3': 'Gaming, Anime, Fitness, Web3',
			'about.goals.title': 'Goals',
			'about.goals.short.label': 'Short-term:',
			'about.goals.short.desc': 'Complete my degree and gain hands-on industry experience',
			'about.goals.long.label': 'Long-term:',
			'about.goals.long.desc': 'Deepen expertise in the Web3 space',
			'about.traits.title': 'Personal Traits',
			'about.traits.1': 'Detail-oriented with a passion for efficiency',
			'about.traits.2': 'Enjoy solving complex problems with elegant solutions',
			'about.traits.3': 'Strong team player with experience in collaborative projects',
			'about.resume': 'Download Resume',
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
			'whateat.desc1': 'WhatEat 解決了「選項過多卻不知從何下手」的決策癱瘓問題。有別於傳統 App 依賴關鍵字，我們結合顯性（預算）與隱性（停留時間、評論）數據，並採用 RAG 架構杜絕 AI 幻覺。',
			'whateat.features.title': '核心功能',
			'whateat.features.1': '<strong>情境感知：</strong>整合 GPS、天氣、時間（午/晚餐）及隱性行為數據，全方位理解當下需求。',
			'whateat.features.2': '<strong>可解釋 AI：</strong>具體說明推薦理由（如：「適合一個人安靜久坐」），建立使用者信任。',
			'whateat.features.3': '<strong>對話式搜尋：</strong>將自然語言（如「想吃辣但不要太貴」）即時轉為 JSON 結構化查詢條件。',
			'whateat.features.4': '<strong>個人化學習：</strong>透過回歸分析量化使用者對餐點/服務的敏感度，實現長期偏好學習。',
			'whateat.architecture.title': '系統架構',
			'whateat.architecture.desc': '採用 RAG (檢索增強生成) 混合架構：',
			'whateat.architecture.1': '<strong>意圖解析：</strong>利用 LLM 將口語需求轉化為精確的資料庫查詢參數。',
			'whateat.architecture.2': '<strong>混合檢索：</strong>結合 SQL (基本篩選) 與 向量資料庫 (語義搜尋) 鎖定最佳候選。',
			'whateat.architecture.3': '<strong>偏好建模：</strong>從非結構化評論中萃取特徵，建立統計模型以預測滿意度。',
			'whateat.highlights.title': '專案亮點',
			'whateat.highlights.1': '<strong>降低幻覺 (Anti-Hallucination)：</strong>嚴格限制生成範圍，確保所有推薦餐廳皆真實存在。',
			'whateat.highlights.2': '<strong>異質資料融合：</strong>成功整合文字評論的情感分析與客觀的營運數據。',
			'whateat.highlights.3': '<strong>決策優化：</strong>有效降低使用者的決策疲勞(Decision Fatigue)，提升點餐效率。',
			'whateat.screenshots': '應用程式截圖',
			'whateat.tech.title': '技術架構',
			'whateat.tech.desc': 'Flutter, Python (Flask), RAG 架構, SQL Server, 向量資料庫, LLM API, Google Places API',
			'whateat.team.title': '團隊成員',
			'whateat.back': '← 返回作品集',
			'about.heading': '關於',
			'about.skills.title': '技能',
			'about.skills.programming': '程式語言：',
			'about.skills.frameworks': '框架與工具：',
			'about.skills.databases': '資料庫：',
			'about.skills.other': '其他：',
			'about.education.title': '學歷',
			'about.education.school': '國立臺灣科技大學',
			'about.education.degree': '資訊管理學系（2026 年畢業）',
			'about.education.courses': '相關課程：資料庫管理、軟體工程、畢業專題',
			'about.interests.title': '興趣愛好',
			'about.interests.1': '旅遊，探索不同的地方',
			'about.interests.2': '研究工具及自動化',
			'about.interests.3': '遊戲、動漫、健身、Web3',
			'about.goals.title': '目標',
			'about.goals.short.label': '短期目標：',
			'about.goals.short.desc': '完成學業，累積業界實務經驗',
			'about.goals.long.label': '長期目標：',
			'about.goals.long.desc': '深耕 Web3 領域',
			'about.traits.title': '個人特質',
			'about.traits.1': '注重細節，對效率有極高追求',
			'about.traits.2': '喜歡用簡潔優雅的方案解決複雜問題',
			'about.traits.3': '具團隊合作經驗，善於協作',
			'about.resume': '下載履歷',
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
