const PORTFOLIO_DATA = {
  personal: {
    name: "Adarsh Kumar Lal",
    firstName: "Adarsh",
    lastName: "Kumar Lal",
    title: "Software Development Engineer",
    roles: [
      "Full-Stack SDE 💻",
      "React & Node.js Dev ⚛️",
      "Salesforce Engineer ☁️",
      "LeetCode 500+ 🧩",
      "TheCookieCoder on YT 🍪"
    ],
    bio: [
      "Hey! I'm a <strong>Software Development Engineer</strong> based in Mumbai, building systems that actually scale. Currently at <strong>Cognizant</strong> where I'm ranked in the <strong>Top 10%</strong> of 200+ engineers — shipping REST APIs handling 50,000+ enterprise transactions daily.",
      "My stack spans <strong>Java, React, Node.js, and Salesforce</strong>, with a growing obsession for <strong>AI/LLM integration</strong> and generative systems. I believe great software is 30% code and 70% clear thinking.",
      "Outside work, I run <strong>TheCookieCoder</strong> on YouTube — a build-in-public channel documenting real architectures and production-grade apps. Also a basketball team captain. Same ownership mindset, different court. 🏀"
    ],
    location: "Mumbai, India",
    email: "adarshkumarpro@gmail.com",
    phone: "+91 6303255124",
    linkedin: "https://linkedin.com/in/adarsh-kumar-lal",
    github: "https://github.com/Adarsh-kumar-lal",
    youtube: "https://youtube.com/@TheCookieCoder",
    photo: "assets/images/adarsh-photo.jpg",
    resume: "assets/Adarsh_Kumar_Lal_SDE_Resume.pdf",
    status: "Open to new opportunities"
  },

  stats: [
    { num: 50, suffix: "K", label: "Txns / day" },
    { num: 500, suffix: "+", label: "LeetCode" },
    { num: 2, suffix: "x", label: "SF Certs" },
    { num: 99, suffix: ".9%", label: "Uptime SLA" }
  ],

  skills: [
    { name:"Java",        icon:"assets/icons/java.svg",       cat:"Languages", level:85, color:"#E24B4A" },
    { name:"JavaScript",  icon:"assets/icons/js.svg",         cat:"Languages", level:88, color:"#FAC775" },
    { name:"Python",      icon:"assets/icons/python.svg",     cat:"Languages", level:72, color:"#378ADD" },
    { name:"SQL",         icon:"assets/icons/sql.svg",        cat:"Languages", level:80, color:"#5DCAA5" },
    { name:"TypeScript",  icon:"assets/icons/typescript.svg", cat:"Languages", level:55, color:"#378ADD" },
    { name:"React.js",    icon:"assets/icons/react.svg",      cat:"Frontend",  level:85, color:"#61DAFB" },
    { name:"HTML5",       icon:"assets/icons/html5.svg",      cat:"Frontend",  level:90, color:"#E44D26" },
    { name:"CSS3",        icon:"assets/icons/css3.svg",       cat:"Frontend",  level:85, color:"#264DE4" },
    { name:"Bootstrap",   icon:"assets/icons/bootstrap.svg",  cat:"Frontend",  level:80, color:"#7952B3" },
    { name:"Node.js",     icon:"assets/icons/nodejs.svg",     cat:"Backend",   level:83, color:"#1D9E75" },
    { name:"Express.js",  icon:"assets/icons/express.svg",    cat:"Backend",   level:82, color:"#888780" },
    { name:"REST API",    icon:"assets/icons/api.svg",        cat:"Backend",   level:88, color:"#FAC775" },
    { name:"JWT Auth",    icon:"assets/icons/jwt.svg",        cat:"Backend",   level:80, color:"#E24B4A" },
    { name:"MongoDB",     icon:"assets/icons/mongodb.svg",    cat:"Database",  level:80, color:"#1D9E75" },
    { name:"MySQL",       icon:"assets/icons/mysql.svg",      cat:"Database",  level:78, color:"#378ADD" },
    { name:"PostgreSQL",  icon:"assets/icons/postgresql.svg", cat:"Database",  level:72, color:"#336791" },
    { name:"Salesforce",  icon:"assets/icons/salesforce.svg", cat:"Cloud",     level:85, color:"#00A1E0" },
    { name:"Git",         icon:"assets/icons/git.svg",        cat:"DevOps",    level:88, color:"#F05032" },
    { name:"Selenium",    icon:"assets/icons/selenium.svg",   cat:"Testing",   level:80, color:"#43B02A" },
    { name:"LLM / AI",    icon:"assets/icons/ai.svg",         cat:"AI",        level:65, color:"#FAC775" }
  ],

  projects: [
    {
      title: "Zerodha Clone",
      subtitle: "Full-Stack Stock Trading Platform",
      desc: "Financial platform simulating real-world trading workflows with high-frequency data rendering, concurrent user sessions, and production-grade JWT-secured APIs.",
      metrics: ["Interactive UX", "Dashboard", "JWT secured"],
      tech: ["React.js","Node.js","Express.js","MongoDB","JWT","REST API"],
      banner: "📈",
      bannerBg: "linear-gradient(135deg,#0f2a0f 0%,#1a3a1a 100%)",
      liveUrl: "https://zerodha-clone-frontend-beta.vercel.app/",
      githubUrl: "https://github.com/Adarsh-kumar-lal/zerodha-clone",
      color: "#1D9E75",
      featured: false
    },
    {
      title: "Wanderlust",
      subtitle: "Full-Stack Rental Platform",
      desc: "End-to-end scalable rental web app with full CRUD operations, RESTful API design, MVC separation, Mongoose schemas, input validation and security best practices.",
      metrics: ["Full CRUD", "MVC Architecture", "Input sanitized"],
      tech: ["Node.js","Express.js","MongoDB","MVC","REST API","Bootstrap"],
      banner: "🏡",
      bannerBg: "linear-gradient(135deg,#1a1a0f 0%,#2a2a0a 100%)",
      liveUrl: "https://wanderlust-hhsk.onrender.com/listings",
      githubUrl: "https://github.com/Adarsh-kumar-lal/wanderlust",
      color: "#FAC775",
      featured: true
    }
  ],

  experience: [
    {
      role: "Programmer Analyst (SDE)",
      company: "Cognizant",
      logo: "assets/icons/cognizant.svg",
      logoFallback: "C",
      logoBg: "linear-gradient(135deg,#1557a0,#0d3d70)",
      period: "Sept 2024 – Present",
      location: "Mumbai, India",
      badge: "Full time",
      bullets: [
        "<strong>Top 10%</strong> (4/5 rating) among 200+ engineers — consistent on-time delivery across 3 major release cycles.",
        "Designed <strong>10+ scalable REST APIs</strong> (Apex/Java) processing <strong>50,000+ transactions/day</strong> with 99.9% uptime SLA.",
        "Reduced backend data model complexity by <strong>25%</strong>, improving query response time by <strong>20%</strong> for multilingual healthcare portal.",
        "Trimmed production incidents by <strong>35% QoQ</strong> by enforcing code review gates across 4 release cycles.",
        "Completed <strong>3 Salesforce certifications</strong>; onboarded 5 engineers 30% faster via documentation."
      ]
    },
    {
      role: "Technical Project Coordinator Intern",
      company: "Wegile",
      logo: "assets/icons/wegile.svg",
      logoFallback: "W",
      logoBg: "linear-gradient(135deg,#2a1a40,#1a0f30)",
      period: "June 2024 – Aug 2024",
      location: "Mohali, India",
      badge: null,
      bullets: [
        "Improved delivery timelines by <strong>15%</strong> across 4 concurrent client projects via structured sprint planning.",
        "Achieved <strong>100% on-time release adherence</strong> over 3 months by mitigating 8+ technical risks proactively.",
        "Reduced client escalations by <strong>20%</strong> via daily sync between 3 dev teams and 5 stakeholders."
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "OpenText",
      logo: "assets/icons/opentext.svg",
      logoFallback: "O",
      logoBg: "linear-gradient(135deg,#1a3a2a,#0f2a1a)",
      period: "Oct 2023 – March 2024",
      location: "Hyderabad, India",
      badge: null,
      bullets: [
        "Eliminated backend data processing errors by <strong>30%</strong> by refactoring 2,000+ lines of server-side logic.",
        "Cut manual regression testing effort by <strong>40%</strong> (~12 hrs/week) building Selenium suites with 150+ test cases.",
        "Lowered production bug escape rate by <strong>25%</strong> via pre-merge automated validation checks."
      ]
    }
  ],

  certifications: [
    {
      title: "Salesforce Certified Data Cloud Consultant",
      issuer: "Salesforce",
      icon: "☁️",
      iconColor: "#00A1E0",
      year: "2025",
      desc: "Enterprise-scale data architecture, cloud data management, and unified data profiles.",
      credentialUrl: "https://www.linkedin.com/in/adarsh-kumar-lal/details/certifications/1765805508208/single-media-viewer?type=DOCUMENT&profileId=ACoAADHHONYBq_T1wq7wOmrtsTzEqfIWNUJYf3M&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B%2BHE3w%2FqRT3eiDToMA%2FaKsw%3D%3D",
      image: null
    },
    {
      title: "Salesforce Certified Administrator",
      issuer: "Salesforce",
      icon: "🛡️",
      iconColor: "#00A1E0",
      year: "2025",
      desc: "Platform administration, automation flows, and security configuration.",
      credentialUrl: "https://www.linkedin.com/in/adarsh-kumar-lal/details/certifications/1745072063548/single-media-viewer/?type=IMAGE&profileId=ACoAADHHONYBq_T1wq7wOmrtsTzEqfIWNUJYf3M",
      image: null
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Google",
      icon: "🤖",
      iconColor: "#378ADD",
      year: "2024",
      desc: "LLM fundamentals, prompt engineering patterns, and agentic workflow concepts.",
      credentialUrl: "https://www.skills.google/public_profiles/14a0db2e-c453-4b04-9b84-cdccad985d6e/badges/15115474?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      image: null
    }
  ],

  achievements: [
    { icon:"🏆", title:"Top 10% Engineer",       body:"Ranked 4/5 among 200+ engineers at Cognizant — 3 consecutive release cycles.",      meta:"Cognizant · 2024–Present" },
    { icon:"⌨️", title:"LeetCode 500+",           body:"500+ problems solved: Arrays, Trees, Graphs, DP, Linked Lists.",                     meta:"Strong DSA foundation" },
    { icon:"🎓", title:"Admin Leadership Cert",   body:"Awarded for excellence in leadership and high-impact decision-making.",              meta:"University Award" },
    { icon:"🏀", title:"Basketball Team Captain", body:"Led team to 1st Runner-Up in university-wide tournament.",                          meta:"LPU · 2023" },
    { icon:"🍪", title:"TheCookieCoder YouTube",  body:"Build-in-public engineering channel documenting architectures and production apps.", meta:"@TheCookieCoder" },
    { icon:"🤖", title:"AI/LLM Upskilling",       body:"Actively building expertise in prompt engineering and generative AI integration.",   meta:"Google Certified · 2024" }
  ],

videos: [
  {
    title: "This MERN Project Looks EXACTLY Like Zerodha 🤯 (Full Demo)",
    videoId: "HcYfD6t-oDU",
    thumb: null,
    bg: "linear-gradient(135deg,#1a0a0a,#2a1010)",
    url: "https://youtube.com/watch?v=HcYfD6t-oDU",
    meta: "This project helped me understand how real-world trading platforms manage holdings, positions, dashboards, and user portfolios."
  },
  {
    title: "I Built a Full-Stack Vacation Rental App (Airbnb Clone) | Wanderlust Project Tour",
    videoId: "MV3CIW5f2vU",
    thumb: null,
    bg: "linear-gradient(135deg,#0a1a2a,#142035)",
    url: "https://youtube.com/watch?v=MV3CIW5f2vU",
    meta: "Wanderlust — a full-stack Airbnb-style marketplace built completely from scratch as a real-world project"
  }
],

  mascotMessages: {
    hero:         "Hey! Welcome! I'm TheCookieCoder 🍪",
    about:        "Studying hard every day! 📚",
    skills:       "Watch me type at 120 WPM! 💻",
    projects:     "I built these myself! So proud! 🚀",
    experience:   "Let me count... 1... 2... 3 years! 🧮",
    certs:        "Three Salesforce certs? WOW! 🏆",
    achievements: "Can't believe all this!! 😱",
    hobbies:      "Subscribe to TheCookieCoder! 🎬",
    resume:       "Reading very carefully... 📄",
    contact:      "Ring ring! Let's connect! 📱"
  }
};
