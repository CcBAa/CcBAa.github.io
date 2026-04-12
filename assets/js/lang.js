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
			'nav.experience': 'Experience',
			'nav.about': 'About',
			'nav.contact': 'Contact',
			'intro.heading': 'Intro',
			'intro.p1': 'Hi, I\'m Bo An Chen (陳柏安).<br />I\'m a student majoring in Information Management at National Taiwan University of Science and Technology.',
			'intro.p2': 'I enjoy using technology to make things simpler and more intuitive.',
			'intro.p3': 'Whether it\'s building an app, integrating AI, or designing a system workflow, what matters most to me is that the people using it find it helpful and natural.',
			'intro.p4': 'I believe great products come from understanding people\'s needs &mdash; not just what\'s technically possible, but what truly feels right to use. That\'s what I care about most in every project I take on.',
			'intro.p5': 'Feel free to look around and learn more about my story.',
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
			'work.kmcss.title': 'KM_CSS',
			'work.kmcss.short': 'Enterprise customer satisfaction survey & service management system',
			'kmcss.title': 'KM_CSS',
			'kmcss.subtitle': 'Customer Satisfaction Survey & Service Management System',
			'kmcss.desc1': 'KM_CSS is an enterprise-grade customer satisfaction survey and service management system developed during my internship at KENMEC. The system enables end-to-end management of customer satisfaction surveys, service tracking, engineering progress monitoring, and data-driven analytics — all through a modern dark-themed admin dashboard.',
			'kmcss.features.title': 'Key Features',
			'kmcss.features.1': '<strong>Analytics Dashboard:</strong> Real-time overview with KPI cards, Chart.js visualizations (bar charts, doughnut charts), and latest feedback display',
			'kmcss.features.2': '<strong>Survey Management:</strong> Token-based survey link generation, customizable survey questions, and customer satisfaction data collection',
			'kmcss.features.3': '<strong>Engineering Progress:</strong> Track maintenance and renovation projects with ERP data synchronization, quotation tracking, and status management',
			'kmcss.features.4': '<strong>Customer & Employee Management:</strong> Full CRUD operations for customer and employee records, employee-customer mapping, and shift scheduling',
			'kmcss.features.5': '<strong>Satisfaction Analysis:</strong> Per-customer satisfaction trends, score distribution analysis, service type statistics, and time-filtered detailed reports',
			'kmcss.features.6': '<strong>Service Request Portal:</strong> Customer-facing forms for submitting service requests with contact info, problem descriptions, and photo uploads',
			'kmcss.features.7': '<strong>Employee KPI:</strong> Automated KPI calculation based on customer satisfaction scores linked to assigned technicians',
			'kmcss.features.8': '<strong>AI Service Report Analysis:</strong> Integrated LLM-powered analysis that automatically grades service request severity (Emergency / Medium / Normal) and generates concise AI summaries for rapid triage',
			'kmcss.security.title': 'Security Implementation',
			'kmcss.security.1': '<strong>Multi-level RBAC:</strong> Session-based authentication with 3-tier permission levels — Admin (Level 2), Department Member (Level 1), and Guest (Level 0)',
			'kmcss.security.2': '<strong>Token-based Access:</strong> Unique cryptographic tokens for each customer survey link with expiration and activation controls',
			'kmcss.security.3': '<strong>Input Validation:</strong> Server-side strict validation on all API endpoints to prevent SQL Injection and XSS attacks',
			'kmcss.tech.title': 'Tech Stack',
			'kmcss.tech.desc': 'Flask (Python), SQLite, Vue.js 3, Element Plus, Chart.js, Groq AI (LLM)',
			'kmcss.role.title': 'My Role',
			'kmcss.role.desc': 'Full Stack Developer (Internship Project)',
			'kmcss.screenshots': 'Screenshots',
			'kmcss.gallery.dashboard': 'Admin Dashboard',
			'kmcss.gallery.engineering': 'Engineering Progress',
			'kmcss.gallery.customers': 'Customer Statistics',
			'kmcss.gallery.satisfaction': 'Satisfaction Analysis',
			'kmcss.gallery.service': 'Service Statistics',
			'kmcss.gallery.ai': 'AI Service Report Analysis',
			'kmcss.gallery.login': 'Admin Login',
			'kmcss.back': '← Back to Work',
			'work.txobserver.title': 'TX-Observer',
			'work.txobserver.short': 'Automated Taiwan futures & spot K-line chart push notification system',
			'txobserver.title': 'TX-Observer',
			'txobserver.subtitle': 'Automated Taiwan Futures & Spot K-line Chart Push Notification System',
			'txobserver.desc1': 'TX-Observer is a fully automated technical analysis push notification bot deployed on a headless Linux server. The system follows strict trading session schedules to automatically fetch market data via Shioaji API, generate professional-grade K-line charts with moving averages, and push them to Discord and Telegram — all without any GUI or manual intervention.',
			'txobserver.features.title': 'Key Features',
			'txobserver.features.1': '<strong>Dual-Period Combined Charts:</strong> Futures: 60K + 5K dual-panel chart; Spot: Daily K + 60K dual-panel chart, with MA5/10/20/60/240, high/low annotations, and Doji candlestick highlighting',
			'txobserver.features.2': '<strong>Smart Scheduling:</strong> Dual-layer protection — XTAI market calendar (handles holidays, Chinese New Year, typhoon closures, Saturday make-up sessions) + trading session time-gate filter',
			'txobserver.features.3': '<strong>Settlement Day Alerts:</strong> Automatically detects the third Wednesday of each month (futures settlement day) and prepends a settlement day notice to push messages',
			'txobserver.features.4': '<strong>Data Freshness Diagnostics:</strong> Three-layer guard (session / holiday / Snapshot comparison) with automatic token-expiry re-login and stale data detection',
			'txobserver.features.5': '<strong>Dual-Platform Push:</strong> Discord Webhook + Telegram Bot with independent error isolation — one platform\'s failure never blocks the other',
			'txobserver.features.6': '<strong>Error Isolation:</strong> Single-symbol failures are logged without affecting other symbols; the scheduler keeps running without crashes',
			'txobserver.architecture.title': 'System Architecture',
			'txobserver.architecture.desc': 'Fully automated data pipeline running on a headless Linux VPS:',
			'txobserver.architecture.1': '<strong>Data Layer:</strong> Shioaji API → 1-min OHLCV bars → session-aware resample to 5K / 60K / Daily',
			'txobserver.architecture.2': '<strong>Rendering Layer:</strong> matplotlib GridSpec single-figure combined chart with mplfinance external-axes mode, dark theme, CJK font support',
			'txobserver.architecture.3': '<strong>Push Layer:</strong> Direct binary upload to Discord Webhook (multipart) + Telegram Bot API (sendPhoto), no external image host needed',
			'txobserver.architecture.4': '<strong>Scheduling Layer:</strong> APScheduler cron triggers with market calendar integration, closing summary retry×3, and misfire grace handling',
			'txobserver.tech.title': 'Tech Stack',
			'txobserver.tech.desc': 'Python, Shioaji API, pandas, matplotlib / mplfinance, APScheduler, Discord Webhook, Telegram Bot API, Linux systemd',
			'txobserver.role.title': 'My Role',
			'txobserver.role.desc': 'Solo Developer — Full pipeline from data fetching, resample logic, dark-themed chart rendering, to dual-platform push and systemd deployment',
			'txobserver.screenshots': 'Screenshots',
			'txobserver.gallery.chart': '60K + 5K Combined Chart',
			'txobserver.gallery.discord': 'Discord Push Notification',
			'txobserver.gallery.telegram': 'Telegram Push Notification',
			'txobserver.links.title': 'Links',
			'txobserver.back': '← Back to Work',
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
			'about.goals.long.desc': 'Deepen expertise in Automation, Quantitative Trading, and Web3',
			'about.traits.title': 'Personal Traits',
			'about.traits.1': 'Detail-oriented with a passion for efficiency',
			'about.traits.2': 'Enjoy solving complex problems with elegant solutions',
			'about.traits.3': 'Skilled communicator who bridges technical and non-technical perspectives',
			'about.traits.4': 'Strong team player with experience in collaborative projects',
			'about.resume': 'Download Resume',
			'contact.heading': 'Contact',
			'contact.name': 'Name',
			'contact.email': 'Email',
			'contact.message': 'Message',
			'contact.send': 'Send Message',
			'contact.reset': 'Reset',
			'close': 'Close',
			'footer.copy': '&copy; 2026 BO AN CHEN. Design: <a href="https://html5up.net">HTML5 UP</a>.',
			'exp.heading': 'Experience',
			'exp.0.date': '2026',
			'exp.0.title': 'TX-Observer — Personal Project',
			'exp.0.desc': 'Built a fully automated Taiwan futures & spot index K-line chart push notification system, deployed on a headless Linux server with dual-platform push to Discord & Telegram.',
			'exp.0.tag': 'Solo Developer',
			'exp.1.date': '2025',
			'exp.1.title': 'KM_CSS — KENMEC Internship',
			'exp.1.desc': 'Developed an enterprise-grade customer satisfaction survey & service management system. Built the full stack with Flask, Vue.js 3, and SQLite.',
			'exp.2.date': '2025',
			'exp.2.title': 'WhatEat APP — Capstone Project',
			'exp.2.desc': 'Led frontend development of an AI-powered restaurant recommendation app using Flutter and Gemini API.',
			'exp.3.date': '2022 – 2026',
			'exp.3.title': 'National Taiwan University of Science and Technology',
			'exp.3.desc': 'B.S. in Information Management.',
			'exp.3.tag': 'Education',
			'lang.toggle': '中文'
		},
		zh: {
			'header.subtitle': '學生',
			'nav.intro': '介紹',
			'nav.work': '作品',
			'nav.experience': '經歷',
			'nav.about': '關於',
			'nav.contact': '聯絡',
			'intro.heading': '介紹',
			'intro.p1': '嗨，我是陳柏安 (BO-AN CHEN)。<br />目前就讀於臺灣科技大學資訊管理系。',
			'intro.p2': '我喜歡用科技讓事情變得更簡單、順手。',
			'intro.p3': '不管是打造一個 App、串接 AI，還是設計一套系統流程，我最在意的是：使用的人覺得順手有幫助。',
			'intro.p4': '我相信好的產品來自於理解人的需求——不只是技術上能做到，而是用起來真的舒服。這也是我做每個專案時最重視的事。',
			'intro.p5': '歡迎來逛逛，了解更多關於我的故事。',
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
			'work.kmcss.title': 'KM_CSS',
			'work.kmcss.short': '企業客服滿意度調查與服務管理系統',
			'kmcss.title': 'KM_CSS',
			'kmcss.subtitle': '客服滿意度調查與服務管理系統',
			'kmcss.desc1': 'KM_CSS 是我在廣運實習期間開發的企業級客服滿意度調查與服務管理系統，涵蓋問卷管理、滿意度分析、工程進度追蹤與數據驅動的分析儀表板。',
			'kmcss.features.title': '核心功能',
			'kmcss.features.1': '<strong>分析儀表板：</strong>即時 KPI 指標卡片、Chart.js 圖表視覺化（長條圖、環圈圖）與最新回饋顯示',
			'kmcss.features.2': '<strong>問卷管理：</strong>Token-based 問卷連結產生、自訂問卷題目與客戶滿意度資料收集',
			'kmcss.features.3': '<strong>工程進度：</strong>維修與改造工程案件追蹤，支援 ERP 資料同步、報價單追蹤與狀態管理',
			'kmcss.features.4': '<strong>客戶與員工管理：</strong>客戶與員工資料 CRUD、員工-客戶指派配對與排班管理',
			'kmcss.features.5': '<strong>滿意度分析：</strong>逐客戶滿意度趨勢、評分分布分析、服務類型統計與時間篩選詳細報表',
			'kmcss.features.6': '<strong>客服通報入口：</strong>客戶端線上提交服務通報表單，含聯絡資訊、問題描述與照片上傳',
			'kmcss.features.7': '<strong>員工 KPI：</strong>依據客戶滿意度評分自動計算指派技師的 KPI 績效',
			'kmcss.features.8': '<strong>AI 客服通報分析：</strong>整合 LLM 大語言模型，自動對客服通報進行嚴重度分級（緊急/中等/一般）並生成精準摘要，加速問題分流與處理',
			'kmcss.security.title': '資安實踐',
			'kmcss.security.1': '<strong>多層級 RBAC：</strong>Session-based 認證機制，三級權限劃分 — 管理員（Level 2）、部門成員（Level 1）、訪客（Level 0）',
			'kmcss.security.2': '<strong>Token 存取控制：</strong>每個客戶問卷連結使用唯一加密 Token，支援過期時間與啟停控制',
			'kmcss.security.3': '<strong>輸入驗證：</strong>伺服器端對所有 API 端點進行嚴格驗證，有效防禦 SQL Injection 與 XSS 攻擊',
			'kmcss.tech.title': '技術架構',
			'kmcss.tech.desc': 'Flask (Python), SQLite, Vue.js 3, Element Plus, Chart.js, Groq AI (LLM)',
			'kmcss.role.title': '我的角色',
			'kmcss.role.desc': '全端開發（實習專案）',
			'kmcss.screenshots': '系統截圖',
			'kmcss.gallery.dashboard': '管理儀表板',
			'kmcss.gallery.engineering': '工程進度',
			'kmcss.gallery.customers': '客戶統計分析',
			'kmcss.gallery.satisfaction': '滿意度詳細分析',
			'kmcss.gallery.service': '服務統計',
			'kmcss.gallery.ai': 'AI 客服通報分析',
			'kmcss.gallery.login': '管理員登入',
			'kmcss.back': '← 返回作品集',
			'work.txobserver.title': 'TX-Observer',
			'work.txobserver.short': '台灣期貨 + 現貨 K 線自動推播系統',
			'txobserver.title': 'TX-Observer',
			'txobserver.subtitle': '台灣期貨 + 現貨 K 線自動推播系統',
			'txobserver.desc1': 'TX-Observer 是一套部署於無頭 Linux 伺服器的全自動台股技術分析推播機器人。系統依據嚴格的交易時段排程，自動透過永豐金 Shioaji API 抓取行情數據、繪製含均線的專業級 K 線圖，並即時推播至 Discord 與 Telegram——全程無需 GUI 或人工介入。',
			'txobserver.features.title': '核心功能',
			'txobserver.features.1': '<strong>雙週期合圖：</strong>期貨模式：60K + 5K 雙面板合圖；現貨模式：日K + 60K 雙面板合圖，含 MA5/10/20/60/240 均線、最高最低價標注、十字線 Doji 標記',
			'txobserver.features.2': '<strong>智慧排程：</strong>雙層防護機制——XTAI 行事曆層（正確處理國定假日、農曆年、颱風停市、週六補班）+ 交易時段過濾層',
			'txobserver.features.3': '<strong>結算日提醒：</strong>自動偵測每月第三個週三（台指期結算日），推播訊息自動加上【今日台指結算日】前綴',
			'txobserver.features.4': '<strong>資料停滯診斷：</strong>三層守衛（時段 / 假日 / Snapshot 對比）自動診斷 K 線資料延遲，Token 過期自動重新登入',
			'txobserver.features.5': '<strong>雙平台推播：</strong>Discord Webhook + Telegram Bot 獨立隔離推播，一方失敗不影響另一方',
			'txobserver.features.6': '<strong>錯誤隔離：</strong>單一品種失敗僅記錄 Error log，不影響其他品種繼續執行，排程器持續運作不崩潰',
			'txobserver.architecture.title': '系統架構',
			'txobserver.architecture.desc': '部署於無頭 Linux VPS 的全自動資料管線：',
			'txobserver.architecture.1': '<strong>資料層：</strong>Shioaji API → 1 分 K OHLCV → Session 感知 Resample 至 5K / 60K / 日K',
			'txobserver.architecture.2': '<strong>繪圖層：</strong>matplotlib GridSpec 單一 Figure 合圖，搭配 mplfinance 外部 axes 模式、暗色主題、CJK 字體支援',
			'txobserver.architecture.3': '<strong>推播層：</strong>直接以 binary 上傳至 Discord Webhook (multipart) + Telegram Bot API (sendPhoto)，不依賴外部圖床',
			'txobserver.architecture.4': '<strong>排程層：</strong>APScheduler Cron 排程搭配市場行事曆整合、收盤總結 retry×3 與 misfire 容錯機制',
			'txobserver.tech.title': '技術架構',
			'txobserver.tech.desc': 'Python, Shioaji API, pandas, matplotlib / mplfinance, APScheduler, Discord Webhook, Telegram Bot API, Linux systemd',
			'txobserver.role.title': '我的角色',
			'txobserver.role.desc': '獨立開發——從資料採集、Resample 邏輯、暗色圖表渲染，到雙平台推播和 systemd 部署的完整管線',
			'txobserver.screenshots': '系統截圖',
			'txobserver.gallery.chart': '60K + 5K 合圖',
			'txobserver.gallery.discord': 'Discord 推播畫面',
			'txobserver.gallery.telegram': 'Telegram 推播畫面',
			'txobserver.links.title': '連結',
			'txobserver.back': '← 返回作品集',
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
			'about.goals.long.desc': '深耕自動化、量化交易與 Web3 領域',
			'about.traits.title': '個人特質',
			'about.traits.1': '注重細節，對效率有極高追求',
			'about.traits.2': '喜歡用簡潔優雅的方案解決複雜問題',
			'about.traits.3': '擅長溝通，能有效連結技術與非技術觀點',
			'about.traits.4': '具團隊合作經驗，善於協作',
			'about.resume': '下載履歷',
			'contact.heading': '聯絡',
			'contact.name': '姓名',
			'contact.email': '信箱',
			'contact.message': '訊息',
			'contact.send': '送出訊息',
			'contact.reset': '清除',
			'close': '關閉',
			'footer.copy': '&copy; 2026 陳柏安. 設計: <a href="https://html5up.net">HTML5 UP</a>.',
			'exp.heading': '經歷',
			'exp.0.date': '2026',
			'exp.0.title': 'TX-Observer — 個人專案',
			'exp.0.desc': '獨立開發全自動台灣期貨與現貨指數 K 線圖推播系統，部署於無頭 Linux 伺服器，雙平台推播至 Discord 與 Telegram。',
			'exp.0.tag': '獨立開發',
			'exp.1.date': '2025',
			'exp.1.title': 'KM_CSS — 廣運實習',
			'exp.1.desc': '開發企業級客服滿意度調查與服務管理系統，使用 Flask、Vue.js 3 與 SQLite 完成全端開發。',
			'exp.2.date': '2025',
			'exp.2.title': 'WhatEat APP — 畢業專題',
			'exp.2.desc': '主導前端開發，使用 Flutter 與 Gemini API 打造 AI 智慧餐廳推薦應用程式。',
			'exp.3.date': '2022 – 2026',
			'exp.3.title': '臺灣科技大學',
			'exp.3.desc': '資訊管理系學士。',
			'exp.3.tag': '學歷',
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
