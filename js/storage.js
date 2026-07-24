const LEVELS = {};
const TOTAL_LEVELS = 62;
  const USERS_KEY = 'codequest_users';

  function getUsers() {
    try { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; }
    catch(e) { return []; }
  }
  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }
  function storageKey(username) {
    return `codequest_${username}_python`;
  }

  let state = {
    username: null,
    track: 'python',
    completedLevels: new Set(),
    currentLevel: 1,
    hintRevealed: false,
  };

  // Load a specific user's progress
  function loadUserProgress(username) {
    // Special user "1": unlock all levels for review
    if (username === '20070820') {
      state.completedLevels = new Set();
      for (let i = 1; i <= TOTAL_LEVELS; i++) state.completedLevels.add(i);
      state.currentLevel = TOTAL_LEVELS;
      return;
    }
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey(username)));
      if (saved) {
        state.completedLevels = new Set(saved.completedLevels || []);
        state.currentLevel = saved.currentLevel || 1;
      } else {
        state.completedLevels = new Set();
        state.currentLevel = 1;
      }
    } catch(e) {
      state.completedLevels = new Set();
      state.currentLevel = 1;
    }
  }

  function saveProgress() {
    if (!state.username || state.username === '20070820') return;
    localStorage.setItem(storageKey(state.username), JSON.stringify({
      completedLevels: [...state.completedLevels],
      currentLevel: state.currentLevel,
    }));
  }

  // ===== GAME STATE =====

  // ===== CHINESE PUNCTUATION DETECTION =====
  function renderLogin() {
    const users = getUsers();
    const listEl = document.getElementById('user-list');
    const existingDiv = document.getElementById('existing-users');

    if (users.length === 0) {
      existingDiv.style.display = 'none';
      listEl.innerHTML = '';
    } else {
      existingDiv.style.display = 'block';
      listEl.innerHTML = users.map(name => {
        const p = getUserProgress(name);
        return `
          <div class="user-slot" onclick="loginAs('${escapeAttr(name)}')">
            <div class="user-avatar">${name[0].toUpperCase()}</div>
            <div class="user-info">
              <div class="user-name">${escapeHtml(name)}</div>
              <div class="user-progress">🐍 Python: ${p.completed}/${TOTAL_LEVELS} 关</div>
            </div>
            <button class="btn-delete" onclick="event.stopPropagation();deleteUser('${escapeAttr(name)}')">删除</button>
          </div>
        `;
      }).join('');
    }

    document.getElementById('username-input').value = '';
    showView('login');
  }

  function getUserProgress(username) {
    if (username === '20070820') return { completed: TOTAL_LEVELS, currentLevel: TOTAL_LEVELS };
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey(username)));
      return { completed: saved ? (saved.completedLevels || []).length : 0, currentLevel: saved ? (saved.currentLevel || 1) : 1 };
    } catch(e) { return { completed: 0, currentLevel: 1 }; }
  }

  function createUser() {
    const input = document.getElementById('username-input');
    const name = input.value.trim();
    if (!name) { input.focus(); return; }

    const users = getUsers();
    if (users.includes(name)) {
      // User exists — just log in
      loginAs(name);
      return;
    }

    users.push(name);
    saveUsers(users);
    loginAs(name);
  }

  function loginAs(username) {
    state.username = username;
    state.hintRevealed = false;
    loadUserProgress(username);
    document.getElementById('home-username').textContent = `👤 飞行员：${username}`;
    showView('home');
  }

  function deleteUser(username) {
    if (!confirm(`确定要删除「${username}」的存档吗？此操作不可恢复！`)) return;
    const users = getUsers().filter(u => u !== username);
    saveUsers(users);
    localStorage.removeItem(storageKey(username));
    renderLogin();
  }

  function goHome() {
    state.hintRevealed = false;
    showView('home');
  }

  function switchUser() {
    renderLogin();
  }

  function selectTrack(track) {
    if (track !== 'python') return;
    state.track = track;
    state.hintRevealed = false;
    renderMap();
    showView('map');
  }

  function goMap() {
    state.hintRevealed = false;
    renderMap();
    showView('map');
  }

  // ===== MAP RENDERING =====