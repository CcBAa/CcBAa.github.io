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
			'whateat.desc1': 'WhatEat combats modern "Choice Fatigue" by interpreting natural language requests. It moves beyond rigid star ratings to understand "Soft Context" (mood, weather) and "Hard Indicators" (location, budget), using a personalized weighting model.',
			'whateat.features.title': 'Core Features',
			'whateat.features.1': '<strong>Contextual Intelligence:</strong> Analyzes "Hard" (GPS, Price) and "Soft" (Mood, Weather) factors to grasp the true user intent.',
			'whateat.features.2': '<strong>Explainable AI:</strong> Provides reasoning for every recommendation (e.g., "Quiet atmosphere suitable for working") based on RAG-retrieved reviews.',
			'whateat.features.3': '<strong>Conversational Search:</strong> Extracts intent from natural language inputs and converts them into precise JSON query parameters.',
			'whateat.features.4': '<strong>Personalization Loop:</strong> Quantifies motivation features (e.g., CP value, Noise level) via regression to predict user preference.',
			'whateat.architecture.title': 'System Architecture',
			'whateat.architecture.desc': 'A 4-Step RAG (Retrieval-Augmented Generation) Workflow:',
			'whateat.architecture.1': '<strong>Step 1 - Intent Analysis:</strong> LLM filters keywords and parses intent.',
			'whateat.architecture.2': '<strong>Step 2 - Retrieval:</strong> Fetches candidates from SQL and Google Places API.',
			'whateat.architecture.3': '<strong>Step 3 - Personalization:</strong> Re-ranks based on historical preference weights.',
			'whateat.architecture.4': '<strong>Step 4 - Generation:</strong> Synthesizes final answer with reasoning.',
			'whateat.highlights.title': 'Technical Highlights',
			'whateat.highlights.1': '<strong>Anti-Hallucination:</strong> RAG ensures all recommended restaurants exist and are open, solving the "fake restaurant" issue.',
			'whateat.highlights.2': '<strong>Feature Quantification:</strong> Converts unstructured text reviews into numerical tags (CP value, noise) for modeling.',
			'whateat.highlights.3': '<strong>Future Outlook:</strong> Plans to add social recommendations and reservation system integration.',
			'whateat.screenshots': 'Screenshots',
			'whateat.gallery.search': 'Conversational Search',
			'whateat.gallery.map': 'Visual Map Selection',
			'whateat.gallery.recommendation': 'AI Recommendations',
			'whateat.gallery.detail': 'Reasoning & Details',
			'whateat.gallery.rating': 'Rating & Feedback',
			'whateat.gallery.preferences': 'Personal Preferences',
			'whateat.tech.title': 'Tech Stack',
			'whateat.tech.desc': 'Flutter, Python (Flask), SQL Server, Gemini / OpenAI, Google Places API',
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
			'whateat.desc1': 'WhatEat 解決現代人的「選擇疲勞 (Choice Fatigue)」與資訊過載問題。有別於傳統僵化的標籤搜尋，我們能理解「軟性情境」（心情、天氣）與「硬性指標」（地點、預算），提供個人化的精準推薦。',
			'whateat.features.title': '核心功能',
			'whateat.features.1': '<strong>情境感知：</strong>整合 GPS、營業時間 (硬指標) 與 天氣、心情 (軟情境)，全方位理解當下需求。',
			'whateat.features.2': '<strong>可解釋 AI：</strong>依據 RAG 檢索到的評論摘要，具體說明推薦理由（如：「適合一個人安靜久坐」）。',
			'whateat.features.3': '<strong>對話式搜尋：</strong>利用 LLM 進行意圖萃取，將自然語言即時轉為 JSON 結構化查詢參數。',
			'whateat.features.4': '<strong>個人化學習：</strong>將評論特徵（CP值、環境音量）量化，透過回歸模型預測使用者喜好。',
			'whateat.architecture.title': '系統架構',
			'whateat.architecture.desc': '四階段 RAG (檢索增強生成) 流程：',
			'whateat.architecture.1': '<strong>Step 1 - 意圖分析：</strong>LLM 解析需求並過濾關鍵字。',
			'whateat.architecture.2': '<strong>Step 2 - 資料檢索：</strong>透過 SQL 與 Google API 獲取候選清單。',
			'whateat.architecture.3': '<strong>Step 3 - 個人化邏輯：</strong>結合歷史偏好進行權重排序。',
			'whateat.architecture.4': '<strong>Step 4 - 生成回覆：</strong>LLM 根據檢索結果合成最終推薦建議。',
			'whateat.highlights.title': '專案亮點',
			'whateat.highlights.1': '<strong>降低幻覺 (Anti-Hallucination)：</strong>確保推薦餐廳在 Google 地圖上真實存在且營業中。',
			'whateat.highlights.2': '<strong>特徵量化：</strong>將非結構化評論轉為數值標籤，建立精準的個人偏好模型。',
			'whateat.highlights.3': '<strong>未來展望：</strong>計畫加入社群推薦功能與餐廳訂位系統串接。',
			'whateat.screenshots': '應用程式截圖',
			'whateat.gallery.search': '對話式搜尋',
			'whateat.gallery.map': '地圖視覺化選擇',
			'whateat.gallery.recommendation': 'AI 推薦結果',
			'whateat.gallery.detail': '推薦理由與詳情',
			'whateat.gallery.rating': '評分與回饋',
			'whateat.gallery.preferences': '個人化偏好設定',
			'whateat.tech.title': '技術架構',
			'whateat.tech.desc': 'Flutter, Python (Flask), SQL Server, Gemini / OpenAI, Google Places API',
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
