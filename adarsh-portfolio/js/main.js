/* ═══════════════════════════════════════════
   ADARSH KUMAR LAL — Portfolio Main JS
═══════════════════════════════════════════ */

/* ── UTILS ── */
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

/* ── INIT on DOM ready ── */
document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  initMascot();
  initCanvas();
  initTypewriter();
  initNav();
  initCursor();
  initReveal();
  initCounters();
  initTilt3D();
  initSkillFilter();
  initMobileNav();
});

/* ── RENDER ALL SECTIONS ── */
function renderAll() {
  renderSkills();
  renderProjects();
  renderExperience();
  renderCerts();
  renderAchievements();
  renderVideos();
}

/* ── SKILLS ── */
function renderSkills() {
  const grid = $('skills-grid');
  const filter = $('skills-filter');
  if (!grid || !filter) return;

  const cats = ['All', ...new Set(PORTFOLIO_DATA.skills.map(s => s.cat))];
  cats.forEach((c, i) => {
    const b = document.createElement('button');
    b.className = 'filter-btn' + (i === 0 ? ' active' : '');
    b.textContent = c;
    b.onclick = () => {
      $$('.filter-btn').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      $$('.skill-card').forEach(card => {
        card.dataset.hidden = (c !== 'All' && card.dataset.cat !== c) ? 'true' : 'false';
      });
    };
    filter.appendChild(b);
  });

  PORTFOLIO_DATA.skills.forEach((s, i) => {
    const d = document.createElement('div');
    d.className = 'skill-card reveal';
    d.dataset.cat = s.cat;
    d.style.transitionDelay = `${(i % 5) * 0.07}s`;
    d.innerHTML = `
      <div class="skill-logo">
        <img src="${s.icon}" alt="${s.name}" onerror="this.style.display='none';this.parentElement.textContent='${getSkillEmoji(s.name)}'">
      </div>
      <div class="skill-name">${s.name}</div>
      <div class="skill-bar"><div class="skill-bar-fill" data-level="${s.level}" style="background:${s.color}"></div></div>`;
    grid.appendChild(d);
  });
}

function getSkillEmoji(name) {
  const map = { 'Java':'☕','JavaScript':'🟨','Python':'🐍','SQL':'🗄️','TypeScript':'🔷','React.js':'⚛️','HTML5':'🌐','CSS3':'🎨','Bootstrap':'🅱️','Node.js':'🟩','Express.js':'🚂','REST API':'🔌','JWT Auth':'🔐','MongoDB':'🍃','MySQL':'🐬','PostgreSQL':'🐘','Salesforce':'☁️','Git':'🐙','Selenium':'🧪','LLM / AI':'🤖' };
  return map[name] || '⚡';
}

/* ── PROJECTS ── */
function renderProjects() {
  const grid = $('projects-grid');
  if (!grid) return;

  PORTFOLIO_DATA.projects.forEach(p => {
    const d = document.createElement('div');
    d.className = 'project-card reveal';
    d.innerHTML = `
      <div class="project-banner" style="background:${p.bannerBg}">
        <div class="project-banner-icon">${p.banner}</div>
        <div class="project-overlay"></div>
        ${p.featured ? '<div class="project-featured-badge">⭐ Featured</div>' : ''}
      </div>
      <div class="project-body">
        <div class="project-title">${p.title}</div>
        <div class="project-subtitle">${p.subtitle}</div>
        <div class="project-desc">${p.desc}</div>
        <div class="project-metrics">${p.metrics.map(m => `<span class="p-metric gold">${m}</span>`).join('')}</div>
        <div class="tech-tags">${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}</div>
        <div class="project-links">
          <a href="${p.liveUrl}" target="_blank" class="p-link primary">Live Demo ↗</a>
          <a href="${p.githubUrl}" target="_blank" class="p-link outline">GitHub ⌥</a>
        </div>
      </div>`;
    grid.appendChild(d);
  });
}

/* ── EXPERIENCE ── */
function renderExperience() {
  const tl = $('timeline');
  if (!tl) return;

  PORTFOLIO_DATA.experience.forEach((e, i) => {
    const d = document.createElement('div');
    d.className = 'tl-item';
    d.style.transitionDelay = `${i * 0.15}s`;
    d.innerHTML = `
      <div class="tl-dot"></div>
      <div class="exp-card">
        <div class="exp-header">
          <div class="company-logo" style="background:${e.logoBg}">
            <img src="${e.logo}" alt="${e.company}" onerror="this.style.display='none';this.parentElement.innerHTML='<span style=color:white;font-family:var(--font-d)>${e.logoFallback}</span>'">
          </div>
          <div class="exp-info">
            <div class="exp-role">${e.role}${e.badge ? `<span class="exp-badge">${e.badge}</span>` : ''}</div>
            <div class="exp-company">${e.company}</div>
            <div class="exp-meta">
              <span>📅 ${e.period}</span>
              <span>📍 ${e.location}</span>
            </div>
          </div>
        </div>
        <ul class="exp-bullets">${e.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
      </div>`;
    tl.appendChild(d);
  });
}

/* ── CERTIFICATIONS ── */
function renderCerts() {
  const grid = $('certs-grid');
  if (!grid) return;

  PORTFOLIO_DATA.certifications.forEach(c => {
    const d = document.createElement('div');
    d.className = 'cert-card reveal';
    d.innerHTML = `
      <div class="cert-image-area" style="--cert-color:${c.iconColor}">
        ${c.image
          ? `<img src="${c.image}" alt="${c.title}">`
          : `<div class="cert-icon-wrap" style="background:${c.iconColor}18">${c.icon}</div>`}
        <div class="cert-glow"></div>
      </div>
      <div class="cert-body">
        <div class="cert-title">${c.title}</div>
        <div class="cert-issuer">
          <span class="cert-issuer-name">${c.issuer}</span>
          <span class="cert-year">${c.year}</span>
        </div>
        <div class="cert-desc">${c.desc}</div>
        <a href="${c.credentialUrl}" target="_blank" class="cert-link">View Credential ↗</a>
      </div>`;
    grid.appendChild(d);
  });
}

/* ── ACHIEVEMENTS ── */
function renderAchievements() {
  const grid = $('ach-grid');
  if (!grid) return;

  PORTFOLIO_DATA.achievements.forEach((a, i) => {
    const d = document.createElement('div');
    d.className = 'ach-card reveal';
    d.style.transitionDelay = `${(i % 3) * 0.1}s`;
    d.innerHTML = `
      <span class="ach-icon">${a.icon}</span>
      <div class="ach-title">${a.title}</div>
      <div class="ach-body">${a.body}</div>
      <div class="ach-meta">${a.meta}</div>`;
    grid.appendChild(d);
  });
}

/* ── VIDEOS ── */
function renderVideos() {
  const grid = $('videos-grid');
  if (!grid) return;

  PORTFOLIO_DATA.videos.forEach(v => {
    // YouTube auto-thumbnail URL — free, always works!
    const thumbUrl = v.videoId 
      ? `https://img.youtube.com/vi/${v.videoId}/hqdefault.jpg`
      : null;

    const d = document.createElement('a');
    d.className = 'video-card reveal';
    d.href = v.url;
    d.target = '_blank';
    d.rel = 'noopener';

    d.innerHTML = `
      <div class="video-thumb" style="${thumbUrl ? '' : 'background:' + v.bg}">
        ${thumbUrl 
          ? `<img src="${thumbUrl}" alt="${v.title}" 
               style="width:100%;height:100%;object-fit:cover;display:block"
               onerror="this.style.display='none';this.parentElement.style.background='${v.bg}'">`
          : `<div class="video-thumb-icon">${v.thumb}</div>`
        }
        <div class="video-play-btn" style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)">▶</div>
      </div>
      <div class="video-info">
        <div class="video-title">${v.title}</div>
        <div class="video-meta">${v.meta}</div>
      </div>`;

    grid.appendChild(d);
  });
}

/* ── MASCOT INIT ── */
function initMascot() {
  const el = $('mascot');
  if (!el) return;
  el.innerHTML = buildMascotSVG();
  MASCOT.init();
}

/* ── PARTICLE CANVAS ── */
function initCanvas() {
  const canvas = $('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animId;

  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < 90; i++) {
    particles.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      o: Math.random() * 0.45 + 0.1,
      c: Math.random() > 0.55 ? '#FAC775' : Math.random() > 0.5 ? '#378ADD' : '#5DCAA5'
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      const hex = Math.round(p.o * 255).toString(16).padStart(2, '0');
      ctx.fillStyle = p.c + hex;
      ctx.fill();
      p.x += p.vx; p.y += p.vy;
      if (p.x < -2) p.x = canvas.width + 2;
      if (p.x > canvas.width + 2) p.x = -2;
      if (p.y < -2) p.y = canvas.height + 2;
      if (p.y > canvas.height + 2) p.y = -2;
    });
    animId = requestAnimationFrame(draw);
  }
  draw();

  // Connect nearby particles
  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(250,199,117,${0.06 * (1 - dist / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }
  // Enhanced draw with connections
  cancelAnimationFrame(animId);
  function drawFull() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawConnections();
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      const hex = Math.round(p.o * 255).toString(16).padStart(2, '0');
      ctx.fillStyle = p.c + hex;
      ctx.fill();
      p.x += p.vx; p.y += p.vy;
      if (p.x < -2) p.x = canvas.width + 2;
      if (p.x > canvas.width + 2) p.x = -2;
      if (p.y < -2) p.y = canvas.height + 2;
      if (p.y > canvas.height + 2) p.y = -2;
    });
    requestAnimationFrame(drawFull);
  }
  drawFull();
}

/* ── TYPEWRITER ── */
function initTypewriter() {
  const el = $('typewriter');
  if (!el) return;
  const roles = PORTFOLIO_DATA.personal.roles;
  let ri = 0, ci = 0, deleting = false;

  function tick() {
    const cur = roles[ri];
    if (!deleting) {
      ci++;
      el.innerHTML = cur.slice(0, ci) + '<span class="cursor-blink">|</span>';
      if (ci === cur.length) { setTimeout(() => { deleting = true; tick(); }, 1800); return; }
    } else {
      ci--;
      el.innerHTML = cur.slice(0, ci) + '<span class="cursor-blink">|</span>';
      if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
    }
    setTimeout(tick, deleting ? 48 : 82);
  }
  setTimeout(tick, 900);
}

/* ── NAV SCROLL ── */
function initNav() {
  const nav = $('navbar');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── CUSTOM CURSOR ── */
function initCursor() {
  const cur = $('cursor'), ring = $('cursor-ring');
  if (!cur || !ring) return;
  if (window.matchMedia('(hover: none)').matches) return;

  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  function animCursor() {
    rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
    cur.style.left = mx + 'px'; cur.style.top = my + 'px';
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animCursor);
  }
  animCursor();

  $$('a, button, .skill-card, .project-card, .fact-card, .cert-card, .ach-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cur.style.transform = 'translate(-50%,-50%) scale(2.2)';
      ring.style.transform = 'translate(-50%,-50%) scale(1.4)';
      ring.style.borderColor = 'var(--gold)';
    });
    el.addEventListener('mouseleave', () => {
      cur.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.style.transform = 'translate(-50%,-50%) scale(1)';
    });
  });
}

/* ── INTERSECTION OBSERVER REVEALS ── */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('v');
      // Animate skill bars when revealed
      e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.level + '%';
      });
      // Animate timeline items with stagger
      e.target.querySelectorAll('.tl-item').forEach((item, i) => {
        setTimeout(() => item.classList.add('v'), i * 160);
      });
      obs.unobserve(e.target);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  $$('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => obs.observe(el));

  // Timeline observer
  const tlObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.tl-item').forEach((item, i) => {
          setTimeout(() => item.classList.add('v'), i * 160);
        });
        tlObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.05 });
  $$('#timeline').forEach(t => tlObs.observe(t));
}

/* ── COUNTERS ── */
function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('[data-count]').forEach(el => {
          const target = parseInt(el.dataset.count);
          let cur = 0;
          const step = Math.max(1, Math.ceil(target / 45));
          const t = setInterval(() => {
            cur = Math.min(cur + step, target);
            el.textContent = cur;
            if (cur >= target) clearInterval(t);
          }, 38);
        });
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  $$('#hero').forEach(s => obs.observe(s));
}

/* ── 3D TILT (About card) ── */
function initTilt3D() {
  const card = $('about-3d-card');
  if (!card || window.matchMedia('(hover: none)').matches) return;

  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(700px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.04)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(700px) rotateY(0) rotateX(0) scale(1)';
  });
}

/* ── SKILL FILTER ── */
function initSkillFilter() {
  // Already handled in renderSkills, this just adds keyboard accessibility
  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('keydown', e => { if (e.key === 'Enter') btn.click(); });
  });
}

/* ── MOBILE NAV ── */
function initMobileNav() {
  const hamburger = $('hamburger');
  const mobileNav = $('mobile-nav');
  const overlay = $('mobile-overlay');
  if (!hamburger || !mobileNav) return;

  function toggleNav(open) {
    hamburger.classList.toggle('open', open);
    mobileNav.classList.toggle('open', open);
    if (overlay) overlay.classList.toggle('show', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  hamburger.addEventListener('click', () => toggleNav(!mobileNav.classList.contains('open')));
  if (overlay) overlay.addEventListener('click', () => toggleNav(false));
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleNav(false)));
}

/* ── CONTACT FORM ── */
function handleFormSubmit() {
  const btn = $('form-submit-btn');
  const name = document.querySelector('.form-field input[type=text]');
  const email = document.querySelector('.form-field input[type=email]');
  const msg = document.querySelector('.form-field textarea');

  if (!name.value.trim() || !email.value.trim() || !msg.value.trim()) {
    btn.textContent = 'Please fill all fields!';
    btn.style.background = '#E24B4A';
    setTimeout(() => { btn.textContent = 'Send Message ✉'; btn.style.background = ''; }, 2000);
    return;
  }

  btn.textContent = 'Sending... ✈️'; btn.disabled = true;
  setTimeout(() => {
    btn.textContent = '✓ Sent! Thanks :)'; btn.style.background = '#1D9E75';
    name.value = ''; email.value = ''; msg.value = '';
    setTimeout(() => { btn.textContent = 'Send Message ✉'; btn.style.background = ''; btn.disabled = false; }, 3000);
  }, 1400);
}
