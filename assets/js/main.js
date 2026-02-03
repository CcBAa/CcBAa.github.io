/*
	Dimension by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

// Language Pack
const langPack = {
	en: {
		// Header
		name: "BO AN CHEN",
		title: "Student",
		navIntro: "Intro",
		navWork: "Work",
		navAbout: "About",
		navContact: "Contact",

		// Intro Section
		introTitle: "Intro",
		introP1: "Hi, I'm Chen Bo An.",
		introP2: "I'm a student majoring in Information Management at National Taiwan University of Science and Technology.",
		introP3: "In a world full of code and databases, I'm someone who is obsessed with 'efficiency'.",
		introP4: "My inspiration comes from the way people interact with digital environments—from complex databases to everyday apps.",
		introP5: "I focus on transforming user needs into clear, logical systems, making technology experiences more intuitive.",
		introP6: "Welcome to my world.",
		introBtn: "View My Work",

		// Work Section
		workTitle: "Work",

		// About Section
		aboutTitle: "About",

		// Contact Section
		contactTitle: "Contact",
		contactName: "Name",
		contactEmail: "Email",
		contactMessage: "Message",
		contactSend: "Send Message",
		contactReset: "Reset",

		// Footer
		footerCopyright: "© 2026 BO AN CHEN. Design:",

		// Language Toggle
		langToggle: "中文"
	},
	zh: {
		// Header
		name: "陳柏安",
		title: "學生",
		navIntro: "簡介",
		navWork: "作品",
		navAbout: "關於",
		navContact: "聯繫",

		// Intro Section
		introTitle: "簡介",
		introP1: "嗨，我是陳柏安 (Chen Bo An)。",
		introP2: "我是台灣科技大學資訊管理系的學生。",
		introP3: "在充滿程式碼與資料庫的世界裡，我是一個對「效率」有執著的異類。",
		introP4: "我的靈感來自於人們與數位環境互動的方式——從複雜的資料庫到日常的 App。",
		introP5: "我專注於將使用者的需求轉化為清晰、合乎邏輯的系統，讓科技體驗變得更加直覺。",
		introP6: "歡迎來到我的世界。",
		introBtn: "查看我的專案",

		// Work Section
		workTitle: "作品",

		// About Section
		aboutTitle: "關於",

		// Contact Section
		contactTitle: "聯繫",
		contactName: "姓名",
		contactEmail: "電子郵件",
		contactMessage: "訊息",
		contactSend: "發送訊息",
		contactReset: "重置",

		// Footer
		footerCopyright: "© 2026 陳柏安. 設計：",

		// Language Toggle
		langToggle: "EN"
	}
};

// Set Language Function
function setLanguage(lang) {
	const pack = langPack[lang];
	if (!pack) return;

	// Update all elements with data-lang-key attribute
	document.querySelectorAll('[data-lang-key]').forEach(el => {
		const key = el.getAttribute('data-lang-key');
		if (pack[key]) {
			if (el.tagName === 'INPUT') {
				el.value = pack[key];
			} else {
				el.textContent = pack[key];
			}
		}
	});

	// Update document title
	document.title = lang === 'en' ? 'BO AN CHEN | 陳柏安' : '陳柏安 | BO AN CHEN';

	// Save to localStorage
	localStorage.setItem('preferredLanguage', lang);

	// Update toggle button text
	const toggleBtn = document.getElementById('lang-toggle');
	if (toggleBtn) {
		toggleBtn.textContent = pack.langToggle;
		toggleBtn.setAttribute('data-current-lang', lang);
	}
}

// Toggle Language Function
function toggleLanguage() {
	const currentLang = localStorage.getItem('preferredLanguage') || 'en';
	const newLang = currentLang === 'en' ? 'zh' : 'en';
	setLanguage(newLang);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function () {
	const savedLang = localStorage.getItem('preferredLanguage') || 'en';
	setLanguage(savedLang);
});

(function ($) {

	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		$main_articles = $main.children('article');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: ['361px', '480px'],
		xxsmall: [null, '360px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Fix: Flexbox min-height bug on IE.
	if (browser.name == 'ie') {

		var flexboxFixTimeoutId;

		$window.on('resize.flexbox-fix', function () {

			clearTimeout(flexboxFixTimeoutId);

			flexboxFixTimeoutId = setTimeout(function () {

				if ($wrapper.prop('scrollHeight') > $window.height())
					$wrapper.css('height', 'auto');
				else
					$wrapper.css('height', '100vh');

			}, 250);

		}).triggerHandler('resize.flexbox-fix');

	}

	// Nav.
	var $nav = $header.children('nav'),
		$nav_li = $nav.find('li');

	// Add "middle" alignment classes if we're dealing with an even number of items.
	if ($nav_li.length % 2 == 0) {

		$nav.addClass('use-middle');
		$nav_li.eq(($nav_li.length / 2)).addClass('is-middle');

	}

	// Main.
	var delay = 325,
		locked = false;

	// Methods.
	$main._show = function (id, initial) {

		var $article = $main_articles.filter('#' + id);

		// No such article? Bail.
		if ($article.length == 0)
			return;

		// Handle lock.

		// Already locked? Speed through "show" steps w/o delays.
		if (locked || (typeof initial != 'undefined' && initial === true)) {

			// Mark as switching.
			$body.addClass('is-switching');

			// Mark as visible.
			$body.addClass('is-article-visible');

			// Deactivate all articles (just in case one's already active).
			$main_articles.removeClass('active');

			// Hide header, footer.
			$header.hide();
			$footer.hide();

			// Show main, article.
			$main.show();
			$article.show();

			// Activate article.
			$article.addClass('active');

			// Unlock.
			locked = false;

			// Unmark as switching.
			setTimeout(function () {
				$body.removeClass('is-switching');
			}, (initial ? 1000 : 0));

			return;

		}

		// Lock.
		locked = true;

		// Article already visible? Just swap articles.
		if ($body.hasClass('is-article-visible')) {

			// Deactivate current article.
			var $currentArticle = $main_articles.filter('.active');

			$currentArticle.removeClass('active');

			// Show article.
			setTimeout(function () {

				// Hide current article.
				$currentArticle.hide();

				// Show article.
				$article.show();

				// Activate article.
				setTimeout(function () {

					$article.addClass('active');

					// Window stuff.
					$window
						.scrollTop(0)
						.triggerHandler('resize.flexbox-fix');

					// Unlock.
					setTimeout(function () {
						locked = false;
					}, delay);

				}, 25);

			}, delay);

		}

		// Otherwise, handle as normal.
		else {

			// Mark as visible.
			$body
				.addClass('is-article-visible');

			// Show article.
			setTimeout(function () {

				// Hide header, footer.
				$header.hide();
				$footer.hide();

				// Show main, article.
				$main.show();
				$article.show();

				// Activate article.
				setTimeout(function () {

					$article.addClass('active');

					// Window stuff.
					$window
						.scrollTop(0)
						.triggerHandler('resize.flexbox-fix');

					// Unlock.
					setTimeout(function () {
						locked = false;
					}, delay);

				}, 25);

			}, delay);

		}

	};

	$main._hide = function (addState) {

		var $article = $main_articles.filter('.active');

		// Article not visible? Bail.
		if (!$body.hasClass('is-article-visible'))
			return;

		// Add state?
		if (typeof addState != 'undefined'
			&& addState === true)
			history.pushState(null, null, '#');

		// Handle lock.

		// Already locked? Speed through "hide" steps w/o delays.
		if (locked) {

			// Mark as switching.
			$body.addClass('is-switching');

			// Deactivate article.
			$article.removeClass('active');

			// Hide article, main.
			$article.hide();
			$main.hide();

			// Show footer, header.
			$footer.show();
			$header.show();

			// Unmark as visible.
			$body.removeClass('is-article-visible');

			// Unlock.
			locked = false;

			// Unmark as switching.
			$body.removeClass('is-switching');

			// Window stuff.
			$window
				.scrollTop(0)
				.triggerHandler('resize.flexbox-fix');

			return;

		}

		// Lock.
		locked = true;

		// Deactivate article.
		$article.removeClass('active');

		// Hide article.
		setTimeout(function () {

			// Hide article, main.
			$article.hide();
			$main.hide();

			// Show footer, header.
			$footer.show();
			$header.show();

			// Unmark as visible.
			setTimeout(function () {

				$body.removeClass('is-article-visible');

				// Window stuff.
				$window
					.scrollTop(0)
					.triggerHandler('resize.flexbox-fix');

				// Unlock.
				setTimeout(function () {
					locked = false;
				}, delay);

			}, 25);

		}, delay);


	};

	// Articles.
	$main_articles.each(function () {

		var $this = $(this);

		// Close.
		$('<div class="close">Close</div>')
			.appendTo($this)
			.on('click', function () {
				location.hash = '';
			});

		// Prevent clicks from inside article from bubbling.
		$this.on('click', function (event) {
			event.stopPropagation();
		});

	});

	// Events.
	$body.on('click', function (event) {

		// Article visible? Hide.
		if ($body.hasClass('is-article-visible'))
			$main._hide(true);

	});

	$window.on('keyup', function (event) {

		switch (event.keyCode) {

			case 27:

				// Article visible? Hide.
				if ($body.hasClass('is-article-visible'))
					$main._hide(true);

				break;

			default:
				break;

		}

	});

	$window.on('hashchange', function (event) {

		// Empty hash?
		if (location.hash == ''
			|| location.hash == '#') {

			// Prevent default.
			event.preventDefault();
			event.stopPropagation();

			// Hide.
			$main._hide();

		}

		// Otherwise, check for a matching article.
		else if ($main_articles.filter(location.hash).length > 0) {

			// Prevent default.
			event.preventDefault();
			event.stopPropagation();

			// Show article.
			$main._show(location.hash.substr(1));

		}

	});

	// Scroll restoration.
	// This prevents the page from scrolling back to the top on a hashchange.
	if ('scrollRestoration' in history)
		history.scrollRestoration = 'manual';
	else {

		var oldScrollPos = 0,
			scrollPos = 0,
			$htmlbody = $('html,body');

		$window
			.on('scroll', function () {

				oldScrollPos = scrollPos;
				scrollPos = $htmlbody.scrollTop();

			})
			.on('hashchange', function () {
				$window.scrollTop(oldScrollPos);
			});

	}

	// Initialize.

	// Hide main, articles.
	$main.hide();
	$main_articles.hide();

	// Initial article.
	if (location.hash != ''
		&& location.hash != '#')
		$window.on('load', function () {
			$main._show(location.hash.substr(1), true);
		});

})(jQuery);