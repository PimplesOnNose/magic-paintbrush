/**
 * 神笔马良 — The Magic Paintbrush
 * Application Logic — Painter's Studio UI
 */
(function () {
  'use strict';

  // ── State ──────────────────────────────────────────────
  const state = {
    lang: 'zh',          // default to Chinese (matches hero)
    started: false,
    heroDismissed: false,
    currentChapter: 0,
    totalChapters: STORY.chapters.length,
    isPlaying: false,
    autoPlay: false,
    currentAudioChapter: -1
  };

  // ── DOM refs ───────────────────────────────────────────
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  const hero          = $('#hero');
  const beginBtn      = $('#begin-btn');
  const header        = $('#header');
  const scrollTray    = $('#scrollTray');
  const scrollTrack   = $('#scrollTrack');
  const scrollBrush   = $('#scrollBrush');
  const storyEl       = $('#story');
  const audioPlayer   = $('#audioPlayer');
  const prevBtn       = $('#prevBtn');
  const nextBtn       = $('#nextBtn');
  const langEn        = $('#langEn');
  const langZh        = $('#langZh');
  const autoplayBtn   = $('#autoplayBtn');
  const inkstoneLabelZh  = $('#inkstoneLabelZh');
  const inkstoneLabelEn  = $('#inkstoneLabelEn');
  const inkstonePlay  = $('#inkstonePlay');
  const inkstoneStone = $('#inkstoneStone');
  const inkstoneInk   = $('#inkstoneInk');
  const inkstonePlayhead = $('#inkstonePlayhead');
  const inkstoneTime  = $('#inkstoneTime');
  const inkSplashLayer = $('#inkSplashLayer');

  // ── Helpers ────────────────────────────────────────────
  const CN_NUM = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九'];

  // ── Ink-splash particles ───────────────────────────────
  function spawnInkSplash() {
    if (!inkSplashLayer) return;
    const el = document.createElement('div');
    const x = Math.random() * 100;
    const dur = 3 + Math.random() * 4;
    const size = 2 + Math.random() * 3;
    el.style.cssText = `
      position: absolute;
      left: ${x}%; top: -10px;
      width: ${size}px; height: ${size}px;
      background: var(--ink);
      border-radius: 50%;
      opacity: 0;
      animation: inkDrip ${dur}s ease-in forwards;
    `;
    inkSplashLayer.appendChild(el);
    setTimeout(() => el.remove(), dur * 1000);
  }

  // inject keyframes once
  (function injectInkKeyframes() {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes inkDrip {
        0%   { opacity: 0; transform: translateY(0); }
        15%  { opacity: 0.12; }
        85%  { opacity: 0.06; }
        100% { opacity: 0; transform: translateY(100vh); }
      }
    `;
    document.head.appendChild(style);
  })();

  // spawn a few particles periodically
  let inkInterval;
  function startInkParticles() {
    spawnInkSplash();
    inkInterval = setInterval(spawnInkSplash, 2200);
  }

  // ── Chapter rendering ─────────────────────────────────
  function renderChapters() {
    storyEl.innerHTML = '';

    STORY.chapters.forEach((ch, idx) => {
      const article = document.createElement('article');
      article.className = `story-chapter${idx === 0 ? ' active' : ''}`;
      article.dataset.chapter = ch.id;
      article.dataset.magic = ch.magic ? '1' : '0';

      const magicClass = ch.magic ? ' magic' : '';
      const numCN = CN_NUM[ch.id] || String(ch.id);

      article.innerHTML = `
        <div class="chapter-badge">
          <span class="chapter-num${magicClass}">Chapter ${ch.id} · 第${numCN}章</span>
        </div>

        <div class="illustration-frame">
          <img src="images/${ch.image}"
               alt="${ch.title.en} — ${ch.title.zh}"
               loading="${idx === 0 ? 'eager' : 'lazy'}"
               width="1024" height="768">
          <div class="illustration-vignette"></div>
          <div class="illustration-flourish" data-flourish></div>
        </div>

        <div class="chapter-titles">
          <h2 class="chapter-title-en">${ch.title.en}</h2>
          <h2 class="chapter-title-zh">${ch.title.zh}</h2>
          <p class="chapter-title-pinyin">${ch.title.pinyin}</p>
        </div>

        <div class="chapter-audio">
          <button class="audio-play-btn" data-chapter="${ch.id}" aria-label="Play chapter ${ch.id}">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </button>
          <div class="audio-progress" data-chapter="${ch.id}">
            <div class="audio-progress-fill" data-chapter="${ch.id}"></div>
          </div>
          <span class="audio-time" data-chapter="${ch.id}">0:00</span>
        </div>

        <div class="seal-divider">
          <div class="seal-divider__line"></div>
          <div class="seal-divider__seal" data-seal></div>
          <div class="seal-divider__line"></div>
        </div>

        <div class="chapter-content">
          <div class="content-en">
            ${ch.content.en.split('\n\n').map(p => `<p>${p}</p>`).join('')}
          </div>
          <div class="content-zh-grid">
            <p class="zh-text">${ch.content.zh}</p>
            <p class="pinyin-line">${ch.content.pinyin}</p>
          </div>
        </div>

        ${ch.magic ? '<div class="magic-accent"></div>' : ''}
      `;

      storyEl.appendChild(article);
    });
  }

  // ── Scroll-tray nav ───────────────────────────────────
  function renderScrollTray() {
    scrollTray.innerHTML = '';
    STORY.chapters.forEach((ch, idx) => {
      const chip = document.createElement('button');
      chip.className = `scroll-chip${idx === 0 ? ' active' : ''}`;
      chip.dataset.ch = ch.id;
      chip.setAttribute('aria-label', `Chapter ${ch.id}: ${ch.title.en}`);
      chip.addEventListener('click', () => goToChapter(idx));
      scrollTray.appendChild(chip);
    });
  }

  // ── Navigation ────────────────────────────────────────
  function goToChapter(idx) {
    if (idx < 0 || idx >= state.totalChapters) return;
    if (idx === state.currentChapter && state.heroDismissed) return;

    state.currentChapter = idx;

    // stop any playing audio
    if (state.isPlaying) {
      audioPlayer.pause();
      state.isPlaying = false;
    }

    // show/hide chapters
    $$('.story-chapter').forEach((el, i) => {
      const isActive = i === idx;
      el.classList.toggle('active', isActive);
      el.style.display = isActive ? 'block' : 'none';
    });

    // scroll tray
    $$('.scroll-chip').forEach((chip, i) => {
      chip.classList.toggle('active', i === idx);
      chip.classList.toggle('visited', i < idx);
    });

    // prev/next buttons
    prevBtn.disabled = idx === 0;
    nextBtn.disabled = idx === state.totalChapters - 1;

    // update inkstone labels
    const ch = STORY.chapters[idx];
    inkstoneLabelZh.textContent = `第${CN_NUM[ch.id]}章`;
    inkstoneLabelEn.textContent = `Ch ${ch.id}`;

    // reset audio progress displays
    $$('.audio-progress-fill').forEach(el => el.style.width = '0%');
    $$('.audio-time').forEach(el => el.textContent = '0:00');

    // update inkstone ink level
    updateInkstone(0);

    // scroll to story top
    storyEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // trigger illustration flourish + seal animations
    setTimeout(() => triggerChapterAnimations(idx), 200);

    // update handscroll progress
    updateScrollProgress();

    // auto-play
    if (state.autoPlay) {
      setTimeout(() => playChapter(idx), 600);
    }
  }

  // ── Chapter animations ────────────────────────────────
  function triggerChapterAnimations(idx) {
    const chapter = $$('.story-chapter')[idx];
    if (!chapter) return;

    // brush-flourish on illustration
    const flourish = chapter.querySelector('[data-flourish]');
    if (flourish) {
      flourish.classList.remove('animate');
      void flourish.offsetWidth; // reflow
      flourish.classList.add('animate');
    }

    // seal stamp in divider
    const seal = chapter.querySelector('[data-seal]');
    if (seal) {
      seal.classList.remove('visible');
      void seal.offsetWidth;
      seal.classList.add('visible');
    }
  }

  // ── Handscroll progress ───────────────────────────────
  function updateScrollProgress() {
    const pct = ((state.currentChapter + 1) / state.totalChapters) * 100;
    scrollTrack.style.setProperty('--pct', pct + '%');
    scrollBrush.style.setProperty('--pct', pct + '%');
    scrollBrush.classList.add('visible');
  }

  // ── Inkstone (audio console) ──────────────────────────
  function updateInkstone(pct) {
    const p = Math.min(Math.max(pct, 0), 100);
    inkstoneInk.style.setProperty('--pct', p + '%');
    inkstonePlayhead.style.setProperty('--pct', p + '%');
  }

  // ── Audio ─────────────────────────────────────────────
  function getAudioSrc(chapterId) {
    return `audio/${state.lang === 'zh' ? 'zh' : 'en'}/chapter-${chapterId}.mp3`;
  }

  function playChapter(idx) {
    const ch = STORY.chapters[idx];
    if (!ch) return;

    state.currentAudioChapter = idx;
    audioPlayer.src = getAudioSrc(ch.id);
    audioPlayer.currentTime = 0;

    audioPlayer.play().then(() => {
      state.isPlaying = true;
      updateAllPlayButtons();
    }).catch(err => {
      console.warn('Audio play failed:', err);
      state.isPlaying = false;
    });
  }

  function togglePlay(idx) {
    const ch = STORY.chapters[idx];
    if (!ch) return;

    if (state.isPlaying && state.currentAudioChapter === idx) {
      audioPlayer.pause();
      state.isPlaying = false;
    } else if (state.currentAudioChapter === idx) {
      audioPlayer.play().then(() => {
        state.isPlaying = true;
      }).catch(() => { state.isPlaying = false; });
    } else {
      playChapter(idx);
    }
    updateAllPlayButtons();
  }

  function updateAllPlayButtons() {
    // chapter-level buttons
    $$('.audio-play-btn').forEach(btn => {
      const cid = parseInt(btn.dataset.chapter);
      const isOn = cid === state.currentAudioChapter && state.isPlaying;
      btn.classList.toggle('playing', isOn);
      btn.innerHTML = isOn
        ? `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`
        : `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`;
      btn.setAttribute('aria-label', isOn ? 'Pause' : 'Play');
    });

    // inkstone play/pause icons
    const inkPlaySvg = inkstonePlay.querySelector('.icon-play');
    const inkPauseSvg = inkstonePlay.querySelector('.icon-pause');
    if (state.isPlaying) {
      inkPlaySvg.style.display = 'none';
      inkPauseSvg.style.display = '';
      inkstonePlay.classList.add('playing');
    } else {
      inkPlaySvg.style.display = '';
      inkPauseSvg.style.display = 'none';
      inkstonePlay.classList.remove('playing');
    }
  }

  // ── Audio events ──────────────────────────────────────
  audioPlayer.addEventListener('timeupdate', () => {
    if (state.currentAudioChapter < 0 || !audioPlayer.duration) return;
    const ch = STORY.chapters[state.currentAudioChapter];
    if (!ch) return;

    const pct = audioPlayer.currentTime / audioPlayer.duration;

    // chapter-level progress
    const fill = $(`.audio-progress-fill[data-chapter="${ch.id}"]`);
    if (fill) fill.style.width = `${Math.min(pct * 100, 100)}%`;

    const timeEl = $(`.audio-time[data-chapter="${ch.id}"]`);
    if (timeEl) {
      const m = Math.floor(audioPlayer.currentTime / 60);
      const s = Math.floor(audioPlayer.currentTime % 60);
      timeEl.textContent = `${m}:${s.toString().padStart(2, '0')}`;
    }

    // inkstone updates
    updateInkstone(pct * 100);
    const m = Math.floor(audioPlayer.currentTime / 60);
    const s = Math.floor(audioPlayer.currentTime % 60);
    inkstoneTime.textContent = `${m}:${s.toString().padStart(2, '0')}`;
  });

  audioPlayer.addEventListener('ended', () => {
    const chIdx = state.currentAudioChapter;
    state.isPlaying = false;
    updateAllPlayButtons();

    // reset progress
    const ch = STORY.chapters[chIdx];
    if (ch) {
      const fill = $(`.audio-progress-fill[data-chapter="${ch.id}"]`);
      if (fill) fill.style.width = '0%';
    }
    updateInkstone(0);
    inkstoneTime.textContent = '0:00';

    // auto-advance
    if (state.autoPlay && chIdx < state.totalChapters - 1) {
      setTimeout(() => goToChapter(chIdx + 1), 1200);
    }
  });

  audioPlayer.addEventListener('error', () => {
    state.isPlaying = false;
    updateAllPlayButtons();
  });

  // ── Click to seek (chapter-level progress bar) ────────
  document.addEventListener('click', (e) => {
    const bar = e.target.closest('.audio-progress');
    if (!bar) return;
    const cid = parseInt(bar.dataset.chapter);
    if (cid !== state.currentAudioChapter) return;
    if (!audioPlayer.duration) return;

    const rect = bar.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audioPlayer.currentTime = pct * audioPlayer.duration;
  });

  // ── Click to seek (inkstone stone) ────────────────────
  inkstoneStone.addEventListener('click', (e) => {
    if (!audioPlayer.duration) return;
    const rect = inkstoneStone.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    audioPlayer.currentTime = pct * audioPlayer.duration;
  });

  // ── Play button clicks (chapter-level) ────────────────
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.audio-play-btn');
    if (!btn) return;
    const cid = parseInt(btn.dataset.chapter);
    togglePlay(STORY.chapters.findIndex(c => c.id === cid));
  });

  // ── Inkstone play button ──────────────────────────────
  inkstonePlay.addEventListener('click', () => {
    if (state.isPlaying) {
      togglePlay(state.currentAudioChapter);
    } else if (state.currentAudioChapter >= 0) {
      togglePlay(state.currentAudioChapter);
    } else {
      playChapter(state.currentChapter);
    }
  });

  // ── Nav buttons ───────────────────────────────────────
  prevBtn.addEventListener('click', () => {
    if (state.currentChapter > 0) goToChapter(state.currentChapter - 1);
  });
  nextBtn.addEventListener('click', () => {
    if (state.currentChapter < state.totalChapters - 1) goToChapter(state.currentChapter + 1);
  });

  // ── Language toggle ───────────────────────────────────
  function setLang(lang) {
    state.lang = lang;
    document.documentElement.dataset.lang = lang;
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-Hans';

    langEn.classList.toggle('active', lang === 'en');
    langEn.setAttribute('aria-pressed', lang === 'en');
    langZh.classList.toggle('active', lang === 'zh');
    langZh.setAttribute('aria-pressed', lang === 'zh');

    // swap audio if playing
    if (state.isPlaying && state.currentAudioChapter >= 0) {
      const ch = STORY.chapters[state.currentAudioChapter];
      if (ch) {
        const src = getAudioSrc(ch.id);
        const ct = audioPlayer.currentTime;
        audioPlayer.src = src;
        audioPlayer.currentTime = ct;
        audioPlayer.play().catch(() => {});
      }
    }
  }

  langEn.addEventListener('click', () => setLang('en'));
  langZh.addEventListener('click', () => setLang('zh'));

  // ── Auto-play ─────────────────────────────────────────
  autoplayBtn.addEventListener('click', () => {
    state.autoPlay = !state.autoPlay;
    autoplayBtn.classList.toggle('active', state.autoPlay);

    if (state.autoPlay && !state.isPlaying) {
      playChapter(state.currentChapter);
    }
  });

  // ── Keyboard shortcuts ────────────────────────────────
  document.addEventListener('keydown', (e) => {
    if (!state.started) return;
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        if (state.currentChapter > 0) goToChapter(state.currentChapter - 1);
        break;
      case 'ArrowRight':
        e.preventDefault();
        if (state.currentChapter < state.totalChapters - 1) goToChapter(state.currentChapter + 1);
        break;
      case ' ':
        e.preventDefault();
        if (state.isPlaying) {
          togglePlay(state.currentAudioChapter);
        } else if (state.currentAudioChapter >= 0) {
          togglePlay(state.currentAudioChapter);
        } else {
          playChapter(state.currentChapter);
        }
        break;
      case 'a': case 'A':
        if (!e.ctrlKey && !e.metaKey) {
          autoplayBtn.click();
        }
        break;
    }
  });

  // ── Hero → Story transition ───────────────────────────
  beginBtn.addEventListener('click', () => {
    state.started = true;
    hero.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    hero.style.opacity = '0';
    hero.style.transform = 'translateY(-20px)';
    setTimeout(() => {
      hero.style.display = 'none';
      state.heroDismissed = true;
      header.style.display = '';
      document.getElementById('scrollProgress').style.display = '';
      goToChapter(0);
      startInkParticles();
    }, 600);
  });

  // ── Init ──────────────────────────────────────────────
  function init() {
    renderChapters();
    renderScrollTray();

    // hide header + progress initially (hero visible)
    header.style.display = 'none';
    document.getElementById('scrollProgress').style.display = 'none';

    prevBtn.disabled = true;
    nextBtn.disabled = false;

    // set initial lang
    setLang('zh');
  }

  init();
})();
