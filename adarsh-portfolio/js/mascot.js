/* ═══════════════════════════════════════════
   COOKIE MASCOT — TheCookieCoder
   Fully animated, section-reactive mascot
═══════════════════════════════════════════ */

const MASCOT = {
  el: null,
  bubble: null,
  svg: null,
  parts: {},
  bubbleTimeout: null,
  currentState: 'idle',
  idleInterval: null,

  init() {
    this.el = document.getElementById('mascot');
    this.bubble = document.getElementById('mascot-bubble');
    if (!this.el) return;

    // Cache all animatable parts
    this.parts = {
      whole:    this.el.querySelector('#mc-whole'),
      body:     this.el.querySelector('#mc-body'),
      head:     this.el.querySelector('#mc-head'),
      armL:     this.el.querySelector('#mc-arm-l'),
      armR:     this.el.querySelector('#mc-arm-r'),
      mouth:    this.el.querySelector('#mc-mouth'),
      eyeL:     this.el.querySelector('#mc-eye-l'),
      eyeR:     this.el.querySelector('#mc-eye-r'),
      propL:    this.el.querySelector('#mc-prop-l'),
      propR:    this.el.querySelector('#mc-prop-r'),
      screen:   this.el.querySelector('#mc-screen-text'),
    };

    this.setState('idle');
    this.bindSectionObserver();
    this.el.addEventListener('click', () => {
      this.showBubble(PORTFOLIO_DATA.mascotMessages['hero']);
      this.setState('hero');
    });
    this.startIdleRandom();
  },

  showBubble(text) {
    if (!this.bubble) return;
    this.bubble.textContent = text;
    this.bubble.classList.add('show');
    clearTimeout(this.bubbleTimeout);
    this.bubbleTimeout = setTimeout(() => this.bubble.classList.remove('show'), 3400);
  },

  resetAnimations() {
    const p = this.parts;
    Object.values(p).forEach(el => { if (el) el.style.animation = ''; });
    if (p.whole) p.whole.style.animation = 'mc-float 3s ease-in-out infinite';
    if (p.eyeL) p.eyeL.style.animation = 'mc-blink 4s ease-in-out infinite';
    if (p.eyeR) p.eyeR.style.animation = 'mc-blink 4s ease-in-out 0.08s infinite';
    this.setMouth('M88 128 Q100 136 112 128');
    if (p.eyeL) { p.eyeL.setAttribute('ry', '5'); }
    if (p.eyeR) { p.eyeR.setAttribute('ry', '5'); }
    if (p.propL) { p.propL.style.opacity = '0'; }
    if (p.propR) { p.propR.style.opacity = '0'; }
  },

  setMouth(d) {
    if (this.parts.mouth) this.parts.mouth.setAttribute('d', d);
  },

  setEyesWide(wide) {
    const ry = wide ? '8' : '5';
    if (this.parts.eyeL) this.parts.eyeL.setAttribute('ry', ry);
    if (this.parts.eyeR) this.parts.eyeR.setAttribute('ry', ry);
  },

  setState(state) {
    if (this.currentState === state) return;
    this.currentState = state;
    this.resetAnimations();
    const p = this.parts;

    switch (state) {
      case 'hero':
        if (p.whole) p.whole.style.animation = 'mc-jump 1s ease-in-out infinite';
        if (p.armR) p.armR.style.animation = 'mc-wave 0.6s ease-in-out infinite';
        this.setMouth('M84 126 Q100 140 116 126');
        break;

      case 'about':
        if (p.head) p.head.style.animation = 'mc-nod 1.4s ease-in-out infinite';
        if (p.screen) p.screen.style.animation = 'mc-scan 1.8s ease-in-out infinite';
        if (p.propL) { p.propL.style.opacity = '1'; p.propL.style.animation = 'mc-float 2s ease-in-out infinite'; }
        this.setMouth('M90 128 Q100 133 110 128');
        break;

      case 'skills':
        if (p.armL) p.armL.style.animation = 'mc-type 0.28s ease-in-out infinite';
        if (p.armR) p.armR.style.animation = 'mc-type 0.28s ease-in-out 0.14s infinite';
        if (p.head) p.head.style.animation = 'mc-nod 0.7s ease-in-out infinite';
        if (p.screen) p.screen.style.animation = 'mc-flicker 0.4s ease-in-out infinite';
        this.setMouth('M86 128 Q100 136 114 128');
        break;

      case 'projects':
        if (p.whole) p.whole.style.animation = 'mc-float 2s ease-in-out infinite';
        if (p.armR) { p.armR.style.animation = 'mc-thumbup 1.8s ease-in-out infinite'; p.armR.style.transformOrigin = '148px 140px'; }
        if (p.propR) { p.propR.style.opacity = '1'; }
        this.setMouth('M82 126 Q100 142 118 126');
        break;

      case 'experience':
        if (p.head) { p.head.style.animation = 'mc-nod 2s ease-in-out infinite'; p.head.style.transformOrigin = '100px 85px'; }
        if (p.armR) { p.armR.style.animation = 'mc-calc 1.2s ease-in-out infinite'; p.armR.style.transformOrigin = '148px 150px'; }
        if (p.propR) { p.propR.style.opacity = '1'; }
        this.setMouth('M91 128 Q100 132 109 128');
        break;

      case 'certs':
      case 'achievements':
        if (p.whole) p.whole.style.animation = 'mc-wow 0.75s ease-in-out infinite';
        if (p.armL) { p.armL.style.animation = 'mc-wave 0.65s ease-in-out infinite alternate'; p.armL.style.transformOrigin = '52px 140px'; }
        if (p.armR) { p.armR.style.animation = 'mc-wave 0.65s ease-in-out 0.12s infinite alternate'; p.armR.style.transformOrigin = '148px 140px'; }
        this.setEyesWide(true);
        this.setMouth('M82 124 Q100 144 118 124');
        if (p.propR) { p.propR.style.opacity = '1'; }
        break;

      case 'hobbies':
        if (p.whole) p.whole.style.animation = 'mc-float 3.5s ease-in-out infinite';
        if (p.armR) { p.armR.style.animation = 'mc-wave 0.95s ease-in-out infinite'; }
        if (p.propR) { p.propR.style.opacity = '1'; }
        this.setMouth('M84 126 Q100 140 116 126');
        break;

      case 'resume':
        if (p.head) p.head.style.animation = 'mc-nod 2.5s ease-in-out infinite';
        if (p.armL) p.armL.style.animation = 'mc-scan 2.2s ease-in-out infinite';
        if (p.armR) p.armR.style.animation = 'mc-scan 2.2s ease-in-out 0.3s infinite';
        if (p.propL) { p.propL.style.opacity = '1'; }
        this.setMouth('M90 128 Q100 132 110 128');
        break;

      case 'contact':
        if (p.armR) { p.armR.style.animation = 'mc-call 0.8s ease-in-out infinite'; p.armR.style.transformOrigin = '148px 140px'; }
        if (p.armL) { p.armL.style.animation = 'mc-wave 1.3s ease-in-out infinite'; }
        if (p.head) p.head.style.animation = 'mc-nod 1.1s ease-in-out infinite';
        if (p.propR) { p.propR.style.opacity = '1'; }
        this.setMouth('M83 126 Q100 140 117 126');
        break;

      default: // idle
        break;
    }
  },

  // bindSectionObserver() {
  //   const obs = new IntersectionObserver(entries => {
  //     entries.forEach(e => {
  //       if (e.isIntersecting) {
  //         const id = e.target.id;
  //         const msg = PORTFOLIO_DATA.mascotMessages[id];
  //         if (msg) {
  //           this.setState(id);
  //           this.showBubble(msg);
  //         }
  //       }
  //     });
  //   }, { threshold: 0.4 });

  //   document.querySelectorAll('section[id]').forEach(s => obs.observe(s));
  // },

  bindSectionObserver() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        console.log('Section visible:', id); // ← helps debug
        const msg = PORTFOLIO_DATA.mascotMessages[id];
        if (msg) {
          this.setState(id);
          this.showBubble(msg);
        }
      }
    });
  }, { threshold: 0.3 });  // ← lowered from 0.4 to 0.3

  document.querySelectorAll('section[id]').forEach(s => {
    console.log('Observing section:', s.id); // ← helps debug
    obs.observe(s);
  });
},

  startIdleRandom() {
    const idlePhrases = [
      "Keep scrolling! 🍪", "Built with ❤️ & code!",
      "Hire Adarsh! 😄", "Check the projects! 🚀",
      "Follow @TheCookieCoder!", "500+ LeetCode problems! 💪"
    ];
    setInterval(() => {
      if (this.currentState === 'idle') {
        const phrase = idlePhrases[Math.floor(Math.random() * idlePhrases.length)];
        this.showBubble(phrase);
      }
    }, 8000);
  }
};

// ── MASCOT SVG TEMPLATE ──
function buildMascotSVG() {
  return `
<svg id="mascot-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 220" style="width:114px;height:auto;display:block">
<defs>
  <radialGradient id="mg1" cx="45%" cy="40%" r="55%">
    <stop offset="0%" stop-color="#F5C878"/>
    <stop offset="100%" stop-color="#D4892A"/>
  </radialGradient>
  <radialGradient id="mg2" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="#C47820"/>
    <stop offset="100%" stop-color="#A05C10"/>
  </radialGradient>
  <radialGradient id="mg3" cx="40%" cy="35%" r="60%">
    <stop offset="0%" stop-color="#2a5580"/>
    <stop offset="100%" stop-color="#152d45"/>
  </radialGradient>
  <style>
    @keyframes mc-float   {0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
    @keyframes mc-blink   {0%,88%,100%{transform:scaleY(1)}94%{transform:scaleY(0.06)}}
    @keyframes mc-wave    {0%,100%{transform:rotate(0deg)}30%{transform:rotate(-30deg)}70%{transform:rotate(22deg)}}
    @keyframes mc-nod     {0%,100%{transform:rotate(0deg) translateY(0)}50%{transform:rotate(-7deg) translateY(-2px)}}
    @keyframes mc-type    {0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
    @keyframes mc-scan    {0%,100%{transform:translateX(0)}50%{transform:translateX(5px)}}
    @keyframes mc-flicker {0%,100%{opacity:0.9}50%{opacity:1}}
    @keyframes mc-jump    {0%,100%{transform:translateY(0)}35%{transform:translateY(-18px)}65%{transform:translateY(-7px)}}
    @keyframes mc-wow     {0%,100%{transform:scale(1)}30%{transform:scale(1.09)}60%{transform:scale(0.97)}}
    @keyframes mc-thumbup {0%,100%{transform:rotate(0deg)}50%{transform:rotate(-45deg)}}
    @keyframes mc-calc    {0%,100%{transform:translateX(0)}33%{transform:translateX(4px)}66%{transform:translateX(-3px)}}
    @keyframes mc-call    {0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}
    #mc-whole {animation:mc-float 3s ease-in-out infinite}
    #mc-eye-l,#mc-eye-r {transform-origin:center;animation:mc-blink 4s ease-in-out infinite}
    #mc-eye-r {animation-delay:.08s}
  </style>
</defs>

<g id="mc-whole">
  <!-- Shadow -->
  <ellipse cx="100" cy="218" rx="50" ry="7" fill="rgba(0,0,0,0.18)"/>

  <!-- Arms -->
  <g id="mc-arm-l" style="transform-origin:52px 150px">
    <ellipse cx="52" cy="152" rx="16" ry="11" fill="#D4892A" transform="rotate(-20 52 152)"/>
    <ellipse cx="43" cy="161" rx="10" ry="8" fill="#C47820"/>
  </g>
  <g id="mc-arm-r" style="transform-origin:148px 150px">
    <ellipse cx="148" cy="152" rx="16" ry="11" fill="#D4892A" transform="rotate(20 148 152)"/>
    <ellipse cx="157" cy="161" rx="10" ry="8" fill="#C47820"/>
  </g>

  <!-- Cookie body -->
  <g id="mc-body">
    <circle cx="100" cy="92" r="72" fill="url(#mg1)" stroke="#8B5E1A" stroke-width="3.5"/>
    <circle cx="100" cy="92" r="68" fill="none" stroke="#C47820" stroke-width="0.8" opacity="0.35"/>
    <!-- Choc chips -->
    <circle cx="72" cy="76" r="5.5" fill="url(#mg2)"/>
    <circle cx="118" cy="68" r="4" fill="url(#mg2)"/>
    <circle cx="88" cy="117" r="4.5" fill="url(#mg2)"/>
    <circle cx="120" cy="106" r="3.5" fill="url(#mg2)"/>
    <circle cx="64" cy="106" r="3" fill="url(#mg2)"/>
    <circle cx="107" cy="86" r="3" fill="url(#mg2)"/>
    <circle cx="81" cy="98" r="2.5" fill="url(#mg2)"/>
    <circle cx="130" cy="84" r="4" fill="url(#mg2)"/>
    <!-- Bite chunk -->
    <path d="M143 30 Q159 18 168 28 Q178 40 167 51 Q155 37 143 30 Z" fill="#FAF0D8"/>
    <path d="M143 30 Q155 37 167 51 Q153 47 143 30 Z" fill="#E8D8A0" opacity="0.5"/>
  </g>

  <!-- Laptop -->
  <rect x="42" y="152" width="116" height="42" rx="6" fill="#1a3a5a" stroke="#0d2035" stroke-width="2"/>
  <rect x="46" y="155" width="108" height="35" rx="4" fill="url(#mg3)"/>
  <text id="mc-screen-text" x="100" y="175" text-anchor="middle" font-family="monospace" font-size="14" fill="#85B7EB" font-weight="bold">&lt;/&gt;</text>
  <text x="100" y="186" text-anchor="middle" font-family="monospace" font-size="7" fill="#5DCAA5" opacity="0.8">TheCookieCoder</text>
  <rect x="40" y="193" width="120" height="5" rx="2.5" fill="#0d2035"/>
  <rect x="83" y="197" width="34" height="2.5" rx="1.25" fill="#1a3a5a"/>

  <!-- Glasses -->
  <rect x="55" y="72" width="40" height="26" rx="8" fill="#2a5a8a" stroke="#5a3520" stroke-width="2.5" opacity="0.9"/>
  <rect x="105" y="72" width="40" height="26" rx="8" fill="#2a5a8a" stroke="#5a3520" stroke-width="2.5" opacity="0.9"/>
  <line x1="95" y1="82" x2="105" y2="82" stroke="#5a3520" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="42" y1="80" x2="55" y2="80" stroke="#5a3520" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="145" y1="80" x2="158" y2="80" stroke="#5a3520" stroke-width="2.5" stroke-linecap="round"/>
  <text x="75" y="89" text-anchor="middle" font-family="monospace" font-size="11" fill="#85B7EB">&lt;&gt;</text>
  <text x="125" y="89" text-anchor="middle" font-family="monospace" font-size="11" fill="#85B7EB">&lt;&gt;</text>
  <!-- Glass shine -->
  <ellipse cx="67" cy="78" rx="6" ry="4" fill="white" opacity="0.12"/>
  <ellipse cx="117" cy="78" rx="6" ry="4" fill="white" opacity="0.12"/>

  <!-- Eyes & face -->
  <g id="mc-head" style="transform-origin:100px 92px">
    <ellipse id="mc-eye-l" cx="75" cy="110" rx="5" ry="5" fill="#3d2000" style="transform-origin:75px 110px"/>
    <ellipse id="mc-eye-r" cx="125" cy="110" rx="5" ry="5" fill="#3d2000" style="transform-origin:125px 110px"/>
    <circle cx="77" cy="108" r="1.5" fill="white" opacity="0.75"/>
    <circle cx="127" cy="108" r="1.5" fill="white" opacity="0.75"/>
    <path id="mc-mouth" d="M88 128 Q100 136 112 128" stroke="#8B3A20" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <ellipse cx="65" cy="118" rx="7" ry="4" fill="#F09595" opacity="0.42"/>
    <ellipse cx="135" cy="118" rx="7" ry="4" fill="#F09595" opacity="0.42"/>
  </g>

  <!-- Props Left (book, paper) -->
  <g id="mc-prop-l" opacity="0">
    <rect x="18" y="136" width="34" height="44" rx="4" fill="#F1EFE8" stroke="#B4B2A9" stroke-width="0.8"/>
    <rect x="18" y="136" width="4" height="44" rx="2" fill="#D3D1C7"/>
    <rect x="25" y="143" width="22" height="2.5" rx="1" fill="#444441"/>
    <rect x="25" y="149" width="18" height="2" rx="1" fill="#888780"/>
    <rect x="25" y="154" width="20" height="2" rx="1" fill="#888780"/>
    <rect x="25" y="159" width="14" height="2" rx="1" fill="#888780"/>
    <rect x="25" y="164" width="18" height="2" rx="1" fill="#888780"/>
    <rect x="25" y="169" width="16" height="2" rx="1" fill="#378ADD" opacity="0.7"/>
    <rect x="25" y="174" width="12" height="2" rx="1" fill="#378ADD" opacity="0.5"/>
  </g>

  <!-- Props Right (trophy, thumb, calc, yt, phone) -->
  <g id="mc-prop-r" opacity="0">
    <ellipse cx="157" cy="146" rx="14" ry="16" fill="#FAC775" stroke="#EF9F27" stroke-width="1.5"/>
    <ellipse cx="157" cy="146" rx="10" ry="12" fill="#EF9F27"/>
    <text x="157" y="151" text-anchor="middle" font-size="13" fill="#854F0B" font-weight="bold">1</text>
    <path d="M143 137 C139 137 139 151 145 151" stroke="#FAC775" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <path d="M171 137 C175 137 175 151 169 151" stroke="#FAC775" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <rect x="150" y="160" width="14" height="5" rx="1" fill="#EF9F27"/>
    <rect x="146" y="164" width="22" height="4" rx="1" fill="#BA7517"/>
  </g>
</g>
</svg>`;
}
