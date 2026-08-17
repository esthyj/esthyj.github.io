/* ═══════════════════════════════════════════════════════════════
   포트폴리오 인터랙션 스크립트
   ◆ 스크롤 진행바 · 좌측 TOC · 등장 애니메이션 · 모바일 메뉴
   ◆ 일반적으로 손댈 필요 없음
   ═══════════════════════════════════════════════════════════════ */

const progress = document.getElementById('progress');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

/* 모바일 햄버거 메뉴 */
function setMenu(open){
  navLinks.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}
navToggle.addEventListener('click', () => {
  setMenu(!navLinks.classList.contains('open'));
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => setMenu(false));
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navLinks.classList.contains('open')){
    setMenu(false);
    navToggle.focus();
  }
});

/* 상단 스크롤 진행바.
   좌측 TOC 와 상단 nav 는 둘 다 항상 노출 — 숨김/등장 처리는 여기 없다.
   (TOC 는 예전엔 40% 스크롤해야 나타났지만, 첫 화면부터 보이도록 바꿨다.
    등장 효과는 styles.css 의 @keyframes tocIn 이 담당) */
window.addEventListener('scroll', () => {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (window.scrollY / h * 100) + '%';
});

/* TOC active section highlight */
const tocLinks = document.querySelectorAll('.toc a[data-target]');
const tocSections = Array.from(tocLinks)
  .map(a => document.getElementById(a.dataset.target))
  .filter(Boolean);
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting){
      tocLinks.forEach(a => a.classList.toggle(
        'active', a.dataset.target === e.target.id
      ));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
tocSections.forEach(s => sectionObserver.observe(s));

/* 정확도 막대 채우기 — data-pct 값을 CSS 너비로 옮기면 트랜지션이 돈다 */
function fillBars(root){
  root.querySelectorAll('.acc-fill').forEach(el => {
    el.style.width = el.dataset.pct + '%';
  });
}

/* Reveal on scroll */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      // 접힌 아코디언 안의 막대는 여기서 건너뛴다 — 지금 채우면
      // 나중에 펼쳤을 때 이미 다 차 있어서 애니메이션이 보이지 않는다
      e.target.querySelectorAll('.acc-fill').forEach(el => {
        if (el.closest('.exp-panel')) return;
        el.style.width = el.dataset.pct + '%';
      });
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* Experience 아코디언 — 처음엔 제목 줄만, 누르면 상세 내용이 펼쳐진다.
   여러 개를 동시에 펼쳐 둘 수 있다 (경력끼리 비교하기 편하도록) */
document.querySelectorAll('.exp-head').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.exp');
    const open = !card.classList.contains('open');
    card.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    if (open) fillBars(card);
  });
});

/* 연락처 복사 버튼 — 복사할 값은 화면 글자가 아니라 button 의 data-copy 속성에서 읽는다
   (LINKEDIN 은 화면엔 아이디만 보이지만 복사되는 건 전체 주소) */
function copyText(text){
  // 표준 API 는 https 나 localhost 에서만 동작한다.
  // index.html 을 파일로 바로 열면(file://) 없으므로 아래 예전 방식으로 넘어간다.
  if (navigator.clipboard && window.isSecureContext){
    return navigator.clipboard.writeText(text).then(() => true, () => false);
  }
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    // 화면 밖으로 보내면 iOS 가 복사를 거부하므로, 보이는 자리에 두되 투명하게 만든다
    ta.style.cssText = 'position:fixed;top:50%;left:0;opacity:0;pointer-events:none';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');   // 폐기 예정 API 지만 file:// 에서는 이것뿐
    document.body.removeChild(ta);
    return Promise.resolve(ok);
  } catch {
    return Promise.resolve(false);
  }
}

document.querySelectorAll('.copy-btn').forEach(btn => {
  const idleLabel = btn.getAttribute('aria-label');   // 한 번만 읽어 둔다 —
  let timer;                                         // 연타해도 "Copied" 가 원래 이름을 덮어쓰지 않도록
  btn.addEventListener('click', () => {
    copyText(btn.dataset.copy).then(ok => {
      if (!ok) return;
      btn.classList.add('copied');
      btn.setAttribute('aria-label', 'Copied');
      clearTimeout(timer);
      timer = setTimeout(() => {
        btn.classList.remove('copied');
        btn.setAttribute('aria-label', idleLabel);
      }, 1600);
    });
  });
});
