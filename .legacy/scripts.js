// Tailwind Configuration
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        tuft: {
          purple: "#965dbc",
          pink: "#c554b7",
          dark: "#050214",
        },
      },
      backgroundImage: {
        "metallic-text": "linear-gradient(180deg, #FFFFFF 0%, #94A3B8 100%)",
      },
    },
  },
};

// Custom Cursor Logic
const glow = document.getElementById("cursor-glow");
const dot = document.getElementById("cursor-dot");

// Smooth mouse movement for cursor
let mouseX = 0,
  mouseY = 0;
let glowX = 0,
  glowY = 0;
let dotX = 0,
  dotY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // Instant update for dot
  if (dot) {
    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";
  }
});

// Animation loop for smooth trailing glow
function animateCursor() {
  const glowSpeed = 0.12; // Even smoother

  glowX += (mouseX - glowX) * glowSpeed;
  glowY += (mouseY - glowY) * glowSpeed;

  if (glow) {
    glow.style.left = glowX + "px";
    glow.style.top = glowY + "px";
  }

  requestAnimationFrame(animateCursor);
}
animateCursor();

// Hover Effects
const hoverables = document.querySelectorAll(".cursor-hover, a, button, .glass-card");
hoverables.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    if (glow && dot) {
      glow.style.width = "800px";
      glow.style.height = "800px";
      glow.style.opacity = "0.6";
      dot.style.transform = "translate(-50%, -50%) scale(4)";
      dot.style.mixBlendMode = "normal";
      dot.style.background = "rgba(255,255,255,0.3)";
    }
  });
  el.addEventListener("mouseleave", () => {
    if (glow && dot) {
      glow.style.width = "600px";
      glow.style.height = "600px";
      glow.style.opacity = "1";
      dot.style.transform = "translate(-50%, -50%) scale(1)";
      dot.style.mixBlendMode = "difference";
      dot.style.background = "rgba(255,255,255,0.9)";
    }
  });
});

// Reveal Logic
const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, observerOptions);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Scroll Engines
const featureSection = document.getElementById("features");
const pulse = document.getElementById("scroll-pulse");
const statementSection = document.getElementById("statement-section");
const statementCard = document.getElementById("statement-card");
const statementDesc = document.getElementById("statement-desc");
const statementBg = document.getElementById("statement-bg");
const convergenceSection = document.getElementById("convergence-section");
const convergenceTitle = document.getElementById("convergence-title");
const convergenceCenter = document.getElementById("convergence-center");
const convergenceItems = document.querySelectorAll(".convergence-item");
const mockup = document.getElementById("mockup");
const nav = document.getElementById("nav");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const viewHeight = window.innerHeight;
  const delta = scrollY - lastScrollY;
  lastScrollY = scrollY;

  requestAnimationFrame(() => {
    // 0. Nav Visibility Logic
    if (nav) {
      if (delta > 0 && scrollY > 100) {
        nav.classList.add("nav-hidden");
      } else if (delta < 0 || scrollY < 50) {
        nav.classList.remove("nav-hidden");
      }
    }

    // 1. Convergence Logic
    if (convergenceSection) {
      const rect = convergenceSection.getBoundingClientRect();
      let progress = Math.max(0, Math.min(1, -rect.top / (rect.height - viewHeight)));

      if (rect.top < viewHeight && rect.bottom > 0) {
        // Fade out title faster
        if (convergenceTitle) {
          convergenceTitle.style.transform = `scale(${1 + (1 - progress) * 0.5})`;
          convergenceTitle.style.opacity = Math.max(0, 1 - progress * 2);
        }
        if (convergenceCenter) {
          convergenceCenter.style.opacity = Math.max(0, 1 - progress * 2);
        }

        // Grid Layout Logic
        const isDesktop = window.innerWidth >= 768;
        const colCount = isDesktop ? 4 : 2;
        const rowCount = isDesktop ? 2 : 4;
        const spacingX = isDesktop ? 240 : 180;
        const spacingY = isDesktop ? 240 : 190;

        convergenceItems.forEach((item, index) => {
          const itemProgress = Math.max(0, (progress - 0.2) / 0.8);

          const row = Math.floor(index / colCount);
          const col = index % colCount;

          const gridWidth = (colCount - 1) * spacingX;
          const gridHeight = (rowCount - 1) * spacingY;

          const targetX = col * spacingX - gridWidth / 2;
          const targetY = row * spacingY - gridHeight / 2;

          const startX = parseFloat(item.dataset.x);
          const startY = parseFloat(item.dataset.y);

          const currentX = startX * (1 - itemProgress) + targetX * itemProgress;
          const currentY = startY * (1 - itemProgress) + targetY * itemProgress;

          const scale = 0.5 + itemProgress * 0.5;
          const opacity = Math.min(1, itemProgress * 3);

          item.style.transform = `translate(${currentX}px, ${currentY}px) scale(${scale})`;
          item.style.opacity = opacity;
          item.style.zIndex = itemProgress > 0.5 ? 100 : 1;
        });
      }
    }

    // 2. Feature Section - Pulse & Phone Dynamic Tilt
    if (featureSection) {
      const featRect = featureSection.getBoundingClientRect();
      if (featRect.top < viewHeight && featRect.bottom > 0) {
        const scrollProgress = Math.max(0, Math.min(1, -featRect.top / (featRect.height - viewHeight)));
        if (pulse) pulse.style.transform = `translateY(${scrollProgress * (featRect.height - 150)}px)`;

        const tiltX = Math.max(-5, Math.min(5, delta * 0.15));
        const tiltY = Math.sin(scrollProgress * Math.PI) * 12;

        if (mockup) {
          mockup.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        }
      } else if (mockup) {
        mockup.style.transform = `rotateX(0deg) rotateY(0deg)`;
      }
    }

    // 3. Statement Section Reveal
    if (statementSection) {
      const rect = statementSection.getBoundingClientRect();
      let progress = Math.max(0, Math.min(1, -rect.top / (rect.height - viewHeight)));
      const revealProgress = Math.max(0, (progress - 0.2) / 0.5);

      if (statementCard) {
        statementCard.style.backgroundColor = `rgba(255, 255, 255, ${revealProgress * 0.02})`;
        statementCard.style.borderColor = `rgba(255, 255, 255, ${revealProgress * 0.08})`;
        statementCard.style.boxShadow = `0 50px 100px -20px rgba(150, 93, 188, ${revealProgress * 0.15})`;
        statementCard.style.transform = `scale(${0.9 + revealProgress * 0.1})`;
      }
      if (statementDesc) {
        statementDesc.style.opacity = revealProgress;
        statementDesc.style.transform = `translateY(${(1 - revealProgress) * 40}px)`;
      }
      if (statementBg) {
        statementBg.style.opacity = revealProgress;
        statementBg.style.transform = `translate(-50%, -50%) scale(${1 + revealProgress})`;
      }
    }
  });
});

// Mockup Screen Swapping Logic
const triggers = document.querySelectorAll(".scroll-trigger");
const screens = {
  feed: document.getElementById("screen-feed"),
  chat: document.getElementById("screen-chat"),
  meetings: document.getElementById("screen-meetings"),
  files: document.getElementById("screen-files"),
  payments: document.getElementById("screen-payments"),
};

const triggerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const screenName = entry.target.dataset.screen;
        Object.keys(screens).forEach((key) => {
          const s = screens[key];
          if (!s) return;
          if (key === screenName) {
            s.classList.add("active");
            s.classList.remove("exit");
          } else if (s.classList.contains("active")) {
            s.classList.remove("active");
            s.classList.add("exit");
          } else {
            s.classList.remove("active", "exit");
          }
        });
      }
    });
  },
  { threshold: 0.5, rootMargin: "-10% 0px -10% 0px" }
);

triggers.forEach((t) => triggerObserver.observe(t));
