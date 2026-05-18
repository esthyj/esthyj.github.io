/* ═══════════════════════════════════════════════════════════════
   포트폴리오 인터랙션 스크립트
   ◆ 관리자가 자주 수정하는 곳: 바로 아래 phrases 배열 (HERO 타이핑 문구)
   ◆ 그 외 로직은 일반적으로 손댈 필요 없음
   ═══════════════════════════════════════════════════════════════ */

/* ── HERO 타이핑 문구 (여기서만 수정) ───────────────────────── */
const phrases = ['RAG systems.', 'LLM Agents.', 'Time-series forecasting.', 'AI that reasons.'];

/* ── 이하 인터랙션 로직 (수정 불필요) ───────────────────────── */

/* Scroll progress + nav hide + TOC show */
const progress = document.getElementById('progress');
const nav = document.getElementById('nav');
const toc = document.getElementById('toc');
let lastY = 0;
window.addEventListener('scroll', () => {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  const y = window.scrollY;
  progress.style.width = (y / h * 100) + '%';
  if (y > lastY && y > 200) nav.classList.add('hidden');
  else nav.classList.remove('hidden');
  if (y > window.innerHeight * 0.4) toc.classList.add('show');
  else toc.classList.remove('show');
  lastY = y;
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

/* Reveal on scroll */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      // animate stat counters
      e.target.querySelectorAll('.stat-num').forEach(animateCount);
      // animate accuracy bars
      e.target.querySelectorAll('.acc-fill').forEach(el => {
        el.style.width = el.dataset.pct + '%';
      });
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

function animateCount(el){
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const dur = 1500;
  const start = performance.now();
  function tick(now){
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    const v = (target * eased);
    el.textContent = (target % 1 === 0 ? Math.floor(v) : v.toFixed(1)) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* Hero typing effect */
const typed = document.getElementById('typed');
let pi = 0, ci = 0, deleting = false;
function type(){
  const cur = phrases[pi];
  if (!deleting){
    typed.textContent = cur.slice(0, ++ci);
    if (ci === cur.length){ deleting = true; setTimeout(type, 1600); return; }
  } else {
    typed.textContent = cur.slice(0, --ci);
    if (ci === 0){ deleting = false; pi = (pi + 1) % phrases.length; }
  }
  setTimeout(type, deleting ? 40 : 80);
}
setTimeout(type, 1200);

/* Subtle parallax for blobs based on mouse */
const blobs = document.querySelectorAll('.blob');
window.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5);
  const y = (e.clientY / window.innerHeight - 0.5);
  blobs.forEach((b, i) => {
    const f = (i + 1) * 18;
    b.style.transform = `translate(${x * f}px, ${y * f}px)`;
  });
});
