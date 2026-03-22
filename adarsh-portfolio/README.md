# 🍪 Adarsh Kumar Lal — TheCookieCoder Portfolio

A complete, responsive, production-ready personal portfolio website.

## 📁 Project Structure

```
adarsh-portfolio/
├── index.html                    ← Main page (open this in browser)
├── css/
│   └── style.css                 ← All styles, responsive, dark theme
├── js/
│   ├── main.js                   ← App logic, animations, interactions
│   └── mascot.js                 ← Cookie mascot SVG + state machine
├── data/
│   └── portfolio.js              ← ⭐ ALL YOUR CONTENT IS HERE
├── assets/
│   ├── images/
│   │   └── adarsh-photo.jpg      ← Your profile photo
│   ├── icons/                    ← All skill & company SVG icons
│   └── Adarsh_Kumar_Lal_SDE_Resume.pdf   ← ADD YOUR RESUME HERE
```

---

## 🚀 How to Update Content

**Everything is in `data/portfolio.js`** — no HTML or CSS knowledge needed.

### Add a new skill:
```js
{ name:"Rust", icon:"assets/icons/rust.svg", cat:"Languages", level:70, color:"#E24B4A" }
```

### Add a new project:
```js
{
  title: "My New App",
  subtitle: "What it does",
  desc: "Longer description...",
  metrics: ["Stat 1", "Stat 2"],
  tech: ["React", "Node.js"],
  banner: "🚀",
  bannerBg: "linear-gradient(135deg,#0f0f1f,#1a1a3a)",
  liveUrl: "https://yourapp.com",
  githubUrl: "https://github.com/...",
  color: "#FAC775",
  featured: false
}
```

### Add a certificate image:
1. Put the image in `assets/images/cert-name.jpg`
2. In `portfolio.js`, update the cert: `image: "assets/images/cert-name.jpg"`

### Update your resume:
Replace `assets/Adarsh_Kumar_Lal_SDE_Resume.pdf` with your new PDF.
Keep the same filename — download button auto-updates.

### Add real YouTube videos:
```js
{
  title: "My Video Title",
  thumb: "🎬",
  bg: "linear-gradient(135deg,#1a0a0a,#2a1010)",
  url: "https://youtube.com/watch?v=YOUR_VIDEO_ID",
  meta: "10K views · Jan 2025"
}
```

---

## 🌐 Deployment — 3 ways (all free)

### Option 1: Vercel (Recommended — 2 minutes)
1. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
2. Click "Add New Project" → Import your GitHub repo
3. Click Deploy → Done! You get `yourname.vercel.app`

### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the entire `adarsh-portfolio` folder
3. Done! Instant URL like `random-name.netlify.app`
4. Set custom domain in settings

### Option 3: GitHub Pages
1. Push folder to a GitHub repo named `yourusername.github.io`
2. Go to repo Settings → Pages → Source: main branch
3. Your site is live at `https://yourusername.github.io`

---

## ✏️ Customizations

| What to change | Where |
|---|---|
| All text content | `data/portfolio.js` |
| Colors | `css/style.css` → `:root` variables |
| Section order | `index.html` → move `<section>` blocks |
| Mascot messages | `data/portfolio.js` → `mascotMessages` |
| Fonts | `index.html` → Google Fonts link + `css/style.css` `--font-d/b/m` |
| Add cert image | `assets/images/` + update `certifications` in `portfolio.js` |

---

## 📱 Responsive Breakpoints

| Device | Width | Layout |
|---|---|---|
| Desktop | > 1024px | Full layout, hero photo visible |
| Tablet | 768–1024px | Adjusted grid, photo hidden |
| Mobile | < 768px | Single column, hamburger menu |
| Small mobile | < 480px | Compact layout, optimized mascot |

---

## 🍪 Mascot States

The mascot reacts automatically as you scroll. States:
- `hero` → wave + jump
- `about` → studying + head bob
- `skills` → rapid typing
- `projects` → thumbs up + proud pose
- `experience` → calculating years
- `certs` → wow reaction, arms up
- `hobbies` → holding YT remote, waving
- `resume` → reading paper
- `contact` → phone call pose

---

Made with ❤️ for **Adarsh Kumar Lal** — TheCookieCoder
