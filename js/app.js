let currentDrama = null;
let currentEpisodeIndex = 0;

// Utility to switch views
function showView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(viewId).classList.add('active');
  
  // Toggle bottom nav visibility
  const mainTabs = ['home-view', 'hadiah-view', 'daftarsaya-view', 'profil-view'];
  const bottomNav = document.getElementById('main-bottom-nav');
  if (bottomNav) {
    if (mainTabs.includes(viewId)) {
      bottomNav.style.display = 'flex';
    } else {
      bottomNav.style.display = 'none';
    }
  }
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Splash Screen Timeout
  setTimeout(() => {
    showView('home-view');
    renderHome();
  }, 2000);

  // Setup Event Listeners
  setupNavigation();
  setupModals();
});

// Render Home View
function renderHome() {
  const trendingContainer = document.getElementById('trending-dramas');
  const forYouContainer = document.getElementById('foryou-dramas');
  
  const renderDramaCard = (drama) => `
    <div class="drama-card" onclick="openDramaDetail('${drama.id}')">
      <img src="${drama.cover}" class="drama-cover" alt="${drama.title}">
      <div class="drama-title">${drama.title}</div>
    </div>
  `;

  trendingContainer.innerHTML = mockDramas.map(renderDramaCard).join('');
  forYouContainer.innerHTML = [...mockDramas].reverse().map(renderDramaCard).join('');
}

// Open Detail View
function openDramaDetail(dramaId) {
  currentDrama = mockDramas.find(d => d.id === dramaId);
  if (!currentDrama) return;

  document.getElementById('detail-cover').style.backgroundImage = `url(${currentDrama.cover})`;
  document.getElementById('detail-title').innerText = currentDrama.title;
  document.getElementById('detail-tags').innerText = currentDrama.genre.join(' • ');
  document.getElementById('detail-stats').innerText = `⭐ ${currentDrama.rating} | ${currentDrama.totalEpisodes} Episode`;
  document.getElementById('detail-synopsis').innerText = currentDrama.synopsis;

  renderEpisodesGrid();
  showView('detail-view');
}

function renderEpisodesGrid() {
  const grid = document.getElementById('episodes-grid');
  grid.innerHTML = currentDrama.episodes.map((ep, idx) => {
    const isUnlocked = ep.isFreeDefault || userState.isVIP || userState.unlockedEpisodes.has(`${currentDrama.id}_${ep.id}`);
    const cls = isUnlocked ? 'ep-btn' : 'ep-btn locked';
    return `<div class="${cls}" onclick="playEpisode(${idx})">${ep.epNumber}</div>`;
  }).join('');
}

// Video Player logic
function playEpisode(index) {
  const ep = currentDrama.episodes[index];
  const isUnlocked = ep.isFreeDefault || userState.isVIP || userState.unlockedEpisodes.has(`${currentDrama.id}_${ep.id}`);

  if (!isUnlocked) {
    showPaywall(index);
    return;
  }

  currentEpisodeIndex = index;
  document.getElementById('player-title').innerText = currentDrama.title;
  document.getElementById('player-ep-title').innerText = `Episode ${ep.epNumber}`;
  
  // Set dummy video cover
  document.getElementById('dummy-video').src = currentDrama.cover;
  
  showView('player-view');
}

function nextEpisode() {
  if (currentEpisodeIndex < currentDrama.episodes.length - 1) {
    playEpisode(currentEpisodeIndex + 1);
  }
}

function prevEpisode() {
  if (currentEpisodeIndex > 0) {
    playEpisode(currentEpisodeIndex - 1);
  }
}

// Tab Navigation
function switchTab(viewId, element) {
  document.querySelectorAll('#main-bottom-nav .nav-item').forEach(nav => {
    nav.classList.remove('active');
  });
  element.classList.add('active');
  
  showView(viewId);
  
  if (viewId === 'daftarsaya-view') {
    renderHistory();
  }
}

// Category Filter
function filterCategory(categoryName, element) {
  document.querySelectorAll('.categories .category-chip').forEach(chip => {
    chip.classList.remove('active');
  });
  element.classList.add('active');
  
  const trendingContainer = document.getElementById('trending-dramas');
  const forYouContainer = document.getElementById('foryou-dramas');
  
  let filteredDramas = mockDramas;
  if (categoryName !== 'Untuk Anda') {
    filteredDramas = mockDramas.filter(d => 
      d.genre.includes(categoryName) || d.tags.includes(categoryName) || categoryName === 'Terbaru'
    );
  }
  
  const renderDramaCard = (drama) => `
    <div class="drama-card" onclick="openDramaDetail('${drama.id}')">
      <img src="${drama.cover}" class="drama-cover" alt="${drama.title}">
      <div class="drama-title">${drama.title}</div>
    </div>
  `;

  if (filteredDramas.length === 0) {
    trendingContainer.innerHTML = '<p class="text-secondary text-small">Belum ada drama.</p>';
    forYouContainer.innerHTML = '';
  } else {
    trendingContainer.innerHTML = filteredDramas.map(renderDramaCard).join('');
    forYouContainer.innerHTML = [...filteredDramas].reverse().map(renderDramaCard).join('');
  }
}

function renderHistory() {
  const container = document.getElementById('history-dramas');
  if (!container) return;
  
  const renderDramaCard = (drama) => `
    <div class="drama-card" onclick="openDramaDetail('${drama.id}')">
      <img src="${drama.cover}" class="drama-cover" alt="${drama.title}">
      <div class="drama-title">${drama.title}</div>
    </div>
  `;
  container.innerHTML = mockDramas.slice(0, 2).map(renderDramaCard).join('');
}

// Modals & Monetization
function showPaywall(index) {
  currentEpisodeIndex = index; // Store intent
  document.getElementById('paywall-modal').classList.add('active');
}

function watchAd() {
  // Simulate Ad Watch
  const btn = document.getElementById('ad-btn');
  btn.innerText = "Memutar Iklan...";
  btn.disabled = true;
  
  setTimeout(() => {
    const ep = currentDrama.episodes[currentEpisodeIndex];
    userState.unlockedEpisodes.add(`${currentDrama.id}_${ep.id}`);
    document.getElementById('paywall-modal').classList.remove('active');
    
    btn.innerText = "Tonton 1 Iklan Video";
    btn.disabled = false;
    
    // Auto play after ad
    playEpisode(currentEpisodeIndex);
    // update grid in background
    renderEpisodesGrid();
  }, 1500);
}

function showVIPModal() {
  document.getElementById('paywall-modal').classList.remove('active');
  document.getElementById('vip-modal').classList.add('active');
}

function selectVIP(tier) {
  document.querySelectorAll('.vip-card').forEach(c => c.classList.remove('selected'));
  document.getElementById(`vip-${tier}`).classList.add('selected');
}

function purchaseVIP() {
  // Simulate payment gateway
  setTimeout(() => {
    userState.isVIP = true;
    document.getElementById('vip-modal').classList.remove('active');
    alert("Pembayaran Berhasil! Status VIP aktif.");
    
    // Auto play intended episode
    playEpisode(currentEpisodeIndex);
    renderEpisodesGrid();
  }, 1000);
}

// Navigation Events
function setupNavigation() {
  // Setup swipe for player
  let touchstartY = 0;
  let touchendY = 0;
  const player = document.getElementById('player-view');

  player.addEventListener('touchstart', e => {
    touchstartY = e.changedTouches[0].screenY;
  });

  player.addEventListener('touchend', e => {
    touchendY = e.changedTouches[0].screenY;
    handleSwipe();
  });

  function handleSwipe() {
    if (touchendY < touchstartY - 50) nextEpisode(); // Swipe Up
    if (touchendY > touchstartY + 50) prevEpisode(); // Swipe Down
  }
}

function setupModals() {
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.target.closest('.modal-overlay').classList.remove('active');
    });
  });
}
