/*
	Language Toggle
	English (default) / Chinese
*/

(function() {

	var langs = {
		en: {
			'header.subtitle':   'Student',
			'nav.intro':         'Intro',
			'nav.work':          'Work',
			'nav.about':         'About',
			'nav.contact':       'Contact',
			'intro.heading':     'Intro',
			'intro.p1':          'Hi, I\'m Bo An Chen (陳柏安).<br />I\'m a student majoring in Information Management at Taiwan University of Science and Technology.',
			'intro.p2':          'In a world of code and databases, I\'m someone with an obsession for &ldquo;efficiency.&rdquo;',
			'intro.p3':          'My inspiration comes from how people interact with digital environments &mdash; from complex databases to everyday apps.<br />I focus on turning user needs into clear, logical systems that make technology feel more intuitive.',
			'intro.p4':          'Welcome to my world.',
			'intro.btn':         'View My Projects',
			'work.heading':      'Work',
			'about.heading':     'About',
			'contact.heading':   'Contact',
			'contact.name':      'Name',
			'contact.email':     'Email',
			'contact.message':   'Message',
			'contact.send':      'Send Message',
			'contact.reset':     'Reset',
			'close':             'Close',
			'footer.copy':       '&copy; 2026 BO AN CHEN. Design: <a href="https://html5up.net">HTML5 UP</a>.'
		},
		zh: {
			'header.subtitle':   '學生',
			'nav.intro':         '介紹',
			'nav.work':          '作品',
			'nav.about':         '關於',
			'nav.contact':       '聯絡',
			'intro.heading':     '介紹',
			'intro.p1':          '嗨，我是陳柏安 (Chen Bo An)。<br />我是台灣科技大學資訊管理系的學生。',
			'intro.p2':          '在充滿程式碼與資料庫的世界裡，我是一個對「效率」有執著的異類。',
			'intro.p3':          '我的靈感來自於人們與數位環境互動的方式——從複雜的資料庫到日常的 App。<br />我專注於將使用者的需求轉化為清晰、合乎邏輯的系統，讓科技體驗變得更加直覺。',
			'intro.p4':          '歡迎來到我的世界。',
			'intro.btn':         '查看我的專案',
			'work.heading':      '作品',
			'about.heading':     '關於',
			'contact.heading':   '聯絡',
			'contact.name':      '姓名',
			'contact.email':     '信箱',
			'contact.message':   '訊息',
			'contact.send':      '送出訊息',
			'contact.reset':     '清除',
			'close':             '關閉',
			'footer.copy':       '&copy; 2026 陳柏安. 設計: <a href="https://html5up.net">HTML5 UP</a>.'
		}
	};

	function applyLang(lang) {
		localStorage.setItem('lang', lang);
		var data = langs[lang];

		// Update all elements with data-i18n attribute
		document.querySelectorAll('[data-i18n]').forEach(function(el) {
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
		document.querySelectorAll('.close').forEach(function(el) {
			el.textContent = data['close'];
		});

		// Update toggle active state
		document.querySelectorAll('.lang-toggle span[data-lang]').forEach(function(span) {
			if (span.getAttribute('data-lang') === lang) {
				span.classList.add('active');
			} else {
				span.classList.remove('active');
			}
		});
	}

	// Bind toggle clicks
	document.querySelectorAll('.lang-toggle span[data-lang]').forEach(function(span) {
		span.addEventListener('click', function() {
			applyLang(this.getAttribute('data-lang'));
		});
	});

	// Apply saved language or default to English
	applyLang(localStorage.getItem('lang') || 'en');

})();
