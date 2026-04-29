document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("main section[id]");
  const faqButtons = document.querySelectorAll(".faq-question");
  const revealTargets = document.querySelectorAll(".reveal");
  const trackTargets = document.querySelectorAll("[data-track]");

  const langSelect = document.getElementById("langSelect");
  const themeToggle = document.getElementById("themeToggle");
  const themeToggleLabel = document.getElementById("themeToggleLabel");
  const contactForm = document.getElementById("contactForm");
  const contactStatus = document.getElementById("contactStatus");

  // TODO: 실제 수신 이메일로 변경하세요.
  const toEmail = "contact@nextai.studio";

  const i18n = {
    ko: {
      "a11y.language_label": "언어",
      "nav.services": "서비스",
      "nav.process": "프로세스",
      "nav.tooling": "기술스택",
      "nav.results": "성과",
      "nav.contact": "문의",
      "nav.cta": "프로젝트 상담하기",
      "hero.eyebrow": "AI 에이전트 개발 에이전시",
      "hero.title": "아이디어를 AI 에이전트와 함께 제품으로.",
      "hero.copy": "NEXTAI Studio는 바이브코딩 입문자도 실행 가능한 에이전트 협업 개발 프로세스로 현대적인 애플리케이션 빌드를 가속합니다.",
      "hero.primary": "무료 진단 받기",
      "hero.secondary": "포트폴리오 보기",
      "value.title": "핵심 제안 가치",
      "value.item1": "기획부터 배포까지 AI 에이전트로 병렬 가속",
      "value.item2": "Plan → Build → Validate → Ship 반복 체계",
      "value.item3": "도구 종속이 아닌 워크플로우 최적화 중심",
      "services.title": "서비스 개요",
      "services.card1.title": "기획 보조",
      "services.card1.body": "요구사항 정리, 사용자 시나리오 구조화, 우선순위 정의를 빠르게 수행합니다.",
      "services.card2.title": "MVP 구현",
      "services.card2.body": "핵심 기능 중심의 빠른 구현으로 학습 가능한 첫 제품을 만듭니다.",
      "services.card3.title": "자동화 구축",
      "services.card3.body": "테스트, 문서화, 반복 코딩 작업을 에이전트 기반으로 자동화합니다.",
      "services.card4.title": "유지보수 최적화",
      "services.card4.body": "코드베이스 이해와 버그 대응 체계를 개선해 운영 효율을 높입니다.",
      "process.title": "에이전트 기반 개발 프로세스",
      "process.step1.label": "Plan",
      "process.step1.body": "요구사항 정의서, IA, 작업 분해",
      "process.step2.label": "Build",
      "process.step2.body": "기능 코드, UI 컴포넌트, 통합 구현",
      "process.step3.label": "Validate",
      "process.step3.body": "테스트, 코드 리뷰, 회귀 점검",
      "process.step4.label": "Ship",
      "process.step4.body": "배포 체크리스트, 릴리스 가이드",
      "capabilities.title": "핵심 역량",
      "cap.chip1": "코드베이스 이해",
      "cap.chip2": "병렬 에이전트 실행",
      "cap.chip3": "디버그 자동화",
      "cap.chip4": "배포 지원",
      "tooling.title": "도구/환경 연동",
      "tooling.p1": "Claude, NotebookLM, GPT, Gemini, Cursor, Claude Code, Kiro를 조합해 프로젝트 특성에 맞는 실행 흐름을 설계합니다.",
      "tooling.p2": "도구 종속이 아닌 워크플로우 최적화가 NEXTAI Studio의 기준입니다.",
      "results.title": "성과와 신뢰",
      "results.metric1": "개발 리드타임 단축",
      "results.metric2": "초기 MVP 제작 속도 향상",
      "results.metric3": "버그 대응 시간 단축",
      "results.testimonial1": "“입문자 팀이 3주 만에 첫 제품을 런칭했습니다.”",
      "results.testimonial2": "“도구가 아니라 프로세스가 정리되어 개발이 쉬워졌어요.”",
      "results.testimonial3": "“에이전트 협업 방식 덕분에 반복 작업이 크게 줄었습니다.”",
      "faq.title": "FAQ",
      "faq.q1": "입문자도 바로 시작할 수 있나요?",
      "faq.a1": "가능합니다. 요구사항 정리부터 에이전트 협업 루틴까지 단계별 가이드로 시작합니다.",
      "faq.q2": "기존 코드베이스에도 적용되나요?",
      "faq.a2": "네. 기존 프로젝트 분석 후 점진적으로 AI 에이전트 워크플로우를 결합합니다.",
      "faq.q3": "어떤 도구를 꼭 써야 하나요?",
      "faq.a3": "필수 도구는 없습니다. 팀 상황에 맞춰 최적의 도구 조합을 제안합니다.",
      "faq.q4": "보안과 비용은 어떻게 관리하나요?",
      "faq.a4": "권한 정책, 로그 관리, 사용량 모니터링 기준을 함께 설계해 운영 리스크를 줄입니다.",
      "contact.title": "지금, AI 에이전트와 함께 다음 제품을 시작하세요.",
      "contact.p": "NEXTAI Studio가 아이디어를 실행 가능한 애플리케이션으로 연결합니다.",
      "form.name": "이름",
      "form.email": "이메일",
      "form.company": "회사/팀",
      "form.message": "문의 사항",
      "form.submit": "무료 상담 요청",
      "form.note": "전송은 사용자의 메일 클라이언트(mailto:)에서 진행됩니다.",
      "form.placeholder.name": "이름을 입력하세요",
      "form.placeholder.email": "이메일 주소를 입력하세요",
      "form.placeholder.company": "회사/팀 이름 (선택)",
      "form.placeholder.message": "원하시는 프로젝트 방향을 알려주세요.",
      "form.status_opening": "메일 클라이언트를 열고 문의 내용을 준비하고 있습니다…",
      "form.status_invalid_email": "이메일 형식을 확인해 주세요.",
      "theme.toggle_dark": "다크",
      "theme.toggle_light": "라이트",
    },
    en: {
      "a11y.language_label": "Language",
      "nav.services": "Services",
      "nav.process": "Process",
      "nav.tooling": "Tech Stack",
      "nav.results": "Results",
      "nav.contact": "Contact",
      "nav.cta": "Project Consultation",
      "hero.eyebrow": "AI Agent Development Agency",
      "hero.title": "Turn ideas into products with AI agents.",
      "hero.copy": "NEXTAI Studio accelerates modern app building with an agent-driven collaboration workflow that even beginners can follow.",
      "hero.primary": "Get a free diagnosis",
      "hero.secondary": "View portfolio",
      "value.title": "Core Value Proposition",
      "value.item1": "Parallel acceleration from planning to shipping",
      "value.item2": "Repeatable Plan → Build → Validate → Ship cycle",
      "value.item3": "Workflow optimization over tool lock-in",
      "services.title": "Service Overview",
      "services.card1.title": "Planning Support",
      "services.card1.body": "We quickly structure requirements, user scenarios, and priorities.",
      "services.card2.title": "MVP Implementation",
      "services.card2.body": "We build your first product fast around the core features.",
      "services.card3.title": "Automation Setup",
      "services.card3.body": "We automate testing, documentation, and repetitive coding using agents.",
      "services.card4.title": "Maintenance Optimization",
      "services.card4.body": "We improve codebase understanding and bug response workflows to boost operations.",
      "process.title": "Agent-based Development Process",
      "process.step1.label": "Plan",
      "process.step1.body": "Specs, IA, and task breakdown",
      "process.step2.label": "Build",
      "process.step2.body": "Feature code, UI components, integration",
      "process.step3.label": "Validate",
      "process.step3.body": "Tests, code review, regression checks",
      "process.step4.label": "Ship",
      "process.step4.body": "Release checklist and launch guide",
      "capabilities.title": "Key Capabilities",
      "cap.chip1": "Codebase understanding",
      "cap.chip2": "Parallel agent execution",
      "cap.chip3": "Debug automation",
      "cap.chip4": "Deployment support",
      "tooling.title": "Tooling & Integrations",
      "tooling.p1": "We combine Claude, NotebookLM, GPT, Gemini, Cursor, Claude Code, and Kiro to design an execution flow tailored to your project.",
      "tooling.p2": "Your outcome matters more than tool dependencies—that is our standard.",
      "results.title": "Results & Trust",
      "results.metric1": "Reduced development lead time",
      "results.metric2": "Faster initial MVP delivery",
      "results.metric3": "Quicker bug response",
      "results.testimonial1": "“A beginner team launched their first product in 3 weeks.”",
      "results.testimonial2": "“The process was clear—development became much easier.”",
      "results.testimonial3": "“Agent collaboration significantly reduced repetitive work.”",
      "faq.title": "FAQ",
      "faq.q1": "Can beginners start right away?",
      "faq.a1": "Yes. We begin with step-by-step guidance from requirement organization to agent collaboration routines.",
      "faq.q2": "Will it work with existing codebases?",
      "faq.a2": "Yes. We analyze your project first, then gradually introduce an agent-driven workflow.",
      "faq.q3": "Do we have to use specific tools?",
      "faq.a3": "No. We recommend the best tool combination for your team and constraints.",
      "faq.q4": "How do you manage security and cost?",
      "faq.a4": "We design permission policies, log practices, and usage monitoring rules to reduce operational risk.",
      "contact.title": "Start your next product with AI agents.",
      "contact.p": "NEXTAI Studio connects your ideas to buildable, real applications.",
      "form.name": "Name",
      "form.email": "Email",
      "form.company": "Company / Team",
      "form.message": "Message",
      "form.submit": "Request a free consultation",
      "form.note": "Submission opens your email client via mailto:.",
      "form.placeholder.name": "Enter your name",
      "form.placeholder.email": "Enter your email address",
      "form.placeholder.company": "Company / Team (optional)",
      "form.placeholder.message": "Tell us what you want to build.",
      "form.status_opening": "Opening your email client and preparing your inquiry…",
      "form.status_invalid_email": "Please check your email format.",
      "theme.toggle_dark": "Dark",
      "theme.toggle_light": "Light",
    },
    ja: {
      "a11y.language_label": "言語",
      "nav.services": "サービス",
      "nav.process": "プロセス",
      "nav.tooling": "技術スタック",
      "nav.results": "成果",
      "nav.contact": "お問い合わせ",
      "nav.cta": "プロジェクト相談",
      "hero.eyebrow": "AIエージェント開発エージェンシー",
      "hero.title": "AIエージェントでアイデアをプロダクトへ。",
      "hero.copy": "NEXTAI Studioは、初心者でも実行できるエージェント駆動の協業ワークフローで、現代的なアプリ開発を加速します。",
      "hero.primary": "無料診断を受ける",
      "hero.secondary": "ポートフォリオを見る",
      "value.title": "提供価値",
      "value.item1": "企画からリリースまで並列に加速",
      "value.item2": "Plan → Build → Validate → Shipの反復サイクル",
      "value.item3": "ツール依存ではなくワークフロー最適化",
      "services.title": "サービス概要",
      "services.card1.title": "企画サポート",
      "services.card1.body": "要件整理、ユーザーシナリオの構造化、優先順位付けを素早く行います。",
      "services.card2.title": "MVP実装",
      "services.card2.body": "コア機能中心に、最初のプロダクトを素早く作ります。",
      "services.card3.title": "自動化の構築",
      "services.card3.body": "テスト、ドキュメント、反復コーディングをエージェントで自動化します。",
      "services.card4.title": "保守最適化",
      "services.card4.body": "コードベース理解と不具合対応の仕組みを改善し、運用効率を高めます。",
      "process.title": "エージェントベース開発プロセス",
      "process.step1.label": "Plan",
      "process.step1.body": "要件定義、IA、タスク分解",
      "process.step2.label": "Build",
      "process.step2.body": "機能実装、UIコンポーネント、統合",
      "process.step3.label": "Validate",
      "process.step3.body": "テスト、コードレビュー、回帰確認",
      "process.step4.label": "Ship",
      "process.step4.body": "リリースチェックリスト、ローンチガイド",
      "capabilities.title": "主要な強み",
      "cap.chip1": "コードベース理解",
      "cap.chip2": "並列エージェント実行",
      "cap.chip3": "デバッグ自動化",
      "cap.chip4": "デプロイ支援",
      "tooling.title": "ツール/環境連携",
      "tooling.p1": "Claude、NotebookLM、GPT、Gemini、Cursor、Claude Code、Kiroを組み合わせ、プロジェクトに合う実行フローを設計します。",
      "tooling.p2": "ツールへの依存よりも成果を重視します。これがNEXTAI Studioの基準です。",
      "results.title": "成果と信頼",
      "results.metric1": "開発リードタイムの短縮",
      "results.metric2": "初期MVPの納期短縮",
      "results.metric3": "不具合対応の迅速化",
      "results.testimonial1": "「初心者チームが3週間で最初のプロダクトをリリースしました。」",
      "results.testimonial2": "「ツールではなくプロセスが整理されて開発が楽になりました。」",
      "results.testimonial3": "「エージェント協業のおかげで反復作業が大幅に減りました。」",
      "faq.title": "よくある質問",
      "faq.q1": "初心者でもすぐ始められますか？",
      "faq.a1": "はい。要件整理からエージェント協業のルーティンまで、ステップごとにガイドします。",
      "faq.q2": "既存のコードベースにも適用できますか？",
      "faq.a2": "はい。まずプロジェクトを分析し、その後エージェント型ワークフローを段階的に導入します。",
      "faq.q3": "特定のツールを必ず使う必要がありますか？",
      "faq.a3": "いいえ。チーム状況に合わせて最適なツール組み合わせをご提案します。",
      "faq.q4": "セキュリティとコストはどう管理しますか？",
      "faq.a4": "権限ポリシー、ログ運用、利用量モニタリング基準を設計して運用リスクを抑えます。",
      "contact.title": "AIエージェントと一緒に、次のプロダクトを始めましょう。",
      "contact.p": "NEXTAI Studioは、アイデアを実装可能なアプリへつなぎます。",
      "form.name": "お名前",
      "form.email": "メール",
      "form.company": "会社 / チーム",
      "form.message": "お問い合わせ内容",
      "form.submit": "無料相談を依頼する",
      "form.note": "送信はmailto:経由でメールクライアントが開きます。",
      "form.placeholder.name": "お名前を入力してください",
      "form.placeholder.email": "メールアドレスを入力してください",
      "form.placeholder.company": "会社 / チーム（任意）",
      "form.placeholder.message": "作りたい内容を教えてください。",
      "form.status_opening": "メールクライアントを開いてお問い合わせ内容を準備しています…",
      "form.status_invalid_email": "メール形式をご確認ください。",
      "theme.toggle_dark": "ダーク",
      "theme.toggle_light": "ライト",
    },
  };

  function applyTranslations(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = i18n[lang]?.[key];
      if (!value) return;

      const tag = el.tagName.toUpperCase();
      if (tag === "INPUT" || tag === "TEXTAREA") {
        if (el.hasAttribute("placeholder")) el.placeholder = value;
        return;
      }
      el.textContent = value;
    });
  }

  function getInitialLang() {
    const saved = localStorage.getItem("lang");
    if (saved && i18n[saved]) return saved;
    const browser = (navigator.language || "ko").toLowerCase();
    if (browser.startsWith("en")) return "en";
    if (browser.startsWith("ja")) return "ja";
    return "ko";
  }

  function updateThemeToggle(theme, lang) {
    if (!themeToggle || !themeToggleLabel) return;
    const isDark = theme === "dark";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggleLabel.textContent = isDark ? i18n[lang]["theme.toggle_light"] : i18n[lang]["theme.toggle_dark"];
  }

  function getInitialTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  const initialLang = getInitialLang();
  const initialTheme = getInitialTheme();
  let currentLang = initialLang;
  let currentTheme = initialTheme;

  document.documentElement.dataset.theme = currentTheme;
  if (langSelect) langSelect.value = currentLang;
  applyTranslations(currentLang);
  updateThemeToggle(currentTheme, currentLang);

  langSelect?.addEventListener("change", () => {
    currentLang = langSelect.value;
    localStorage.setItem("lang", currentLang);
    applyTranslations(currentLang);
    updateThemeToggle(currentTheme, currentLang);
  });

  themeToggle?.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", currentTheme);
    document.documentElement.dataset.theme = currentTheme;
    updateThemeToggle(currentTheme, currentLang);
  });

  const statusMessages = {
    ko: { opening: i18n.ko["form.status_opening"], invalid: i18n.ko["form.status_invalid_email"] },
    en: { opening: i18n.en["form.status_opening"], invalid: i18n.en["form.status_invalid_email"] },
    ja: { opening: i18n.ja["form.status_opening"], invalid: i18n.ja["form.status_invalid_email"] },
  };

  function trackEvent(name, payload = {}) {
    // Placeholder for analytics integration.
    console.log("[trackEvent]", name, payload);
  }

  function handleScrollHeader() {
    if (window.scrollY > 8) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  function updateActiveNav() {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) current = section.id;
    });

    navLinks.forEach((link) => {
      const target = link.getAttribute("href").replace("#", "");
      link.classList.toggle("active", target === current);
    });
  }

  menuToggle?.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    navMenu?.classList.toggle("open", !expanded);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu?.classList.remove("open");
      menuToggle?.setAttribute("aria-expanded", "false");
    });
  });

  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      item?.classList.toggle("open", !expanded);
    });
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("in-view");
      });
    },
    { threshold: 0.2 }
  );

  revealTargets.forEach((el) => revealObserver.observe(el));

  trackTargets.forEach((el) => {
    el.addEventListener("click", () => {
      const name = el.getAttribute("data-track") || "cta_click";
      trackEvent(name, { path: window.location.pathname });
    });
  });

  contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!contactForm) return;

    const nameField = contactForm.querySelector('input[name="name"]');
    const emailField = contactForm.querySelector('input[name="email"]');
    const companyField = contactForm.querySelector('input[name="company"]');
    const messageField = contactForm.querySelector('textarea[name="message"]');

    const nameValue = nameField?.value?.trim() || "";
    const emailValue = emailField?.value?.trim() || "";
    const companyValue = companyField?.value?.trim() || "";
    const messageValue = messageField?.value?.trim() || "";

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    if (!emailOk) {
      if (contactStatus) contactStatus.textContent = statusMessages[currentLang].invalid;
      return;
    }

    if (contactStatus) contactStatus.textContent = statusMessages[currentLang].opening;

    const subject = `NEXTAI Studio - Inquiry (${nameValue || "Guest"})`;

    const body =
      currentLang === "ja"
        ? `=== NEXTAI Studio へのお問い合わせ ===\n\nお名前: ${nameValue}\nメール: ${emailValue}\n会社/チーム: ${companyValue || "-"}\n\nお問い合わせ内容:\n${messageValue}\n`
        : currentLang === "en"
          ? `=== NEXTAI Studio Inquiry ===\n\nName: ${nameValue}\nEmail: ${emailValue}\nCompany/Team: ${companyValue || "-"}\n\nMessage:\n${messageValue}\n`
          : `=== NEXTAI Studio 문의 ===\n\n이름: ${nameValue}\n이메일: ${emailValue}\n회사/팀: ${companyValue || "-"}\n\n문의 사항:\n${messageValue}\n`;

    const mailto = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });

  window.addEventListener("scroll", () => {
    handleScrollHeader();
    updateActiveNav();
  });

  handleScrollHeader();
  updateActiveNav();
});