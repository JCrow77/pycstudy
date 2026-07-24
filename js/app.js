// ===== STARFIELD =====
(function() {
  const container = document.getElementById('stars');
  const count = 120;
  let html = '';
  for (let i = 0; i < count; i++) {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = Math.random() * 2 + 1;
    const dur = Math.random() * 4 + 3;
    const delay = Math.random() * 5;
    html += `<div class="star" style="left:${x}%;top:${y}%;width:${size}px;height:${size}px;--dur:${dur}s;--delay:${delay}s;"></div>`;
  }
  container.innerHTML = html;
})();

// ===== VIEW NAVIGATION =====
function showView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const target = document.getElementById('view-' + name);
  if (target) target.classList.add('active');
}

// ===== UTILS =====
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
function escapeHtml(s) { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
function escapeAttr(s) { return s.replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

// ===== INIT =====
updateLineNumbers();
initPyodide();
renderLogin();
