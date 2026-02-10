const envelopeWrap = document.getElementById("envelopeWrap");
const openBtn = document.getElementById("openBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const statusEl = document.getElementById("status");
const burstLayer = document.getElementById("burstLayer");

let opened = false;
let noClicks = 0;

const shower = (count = 26) => {
  const pieces = ["💖", "💌", "✨", "🌸", "💘", "🫶"];

  for (let i = 0; i < count; i += 1) {
    const item = document.createElement("span");
    item.className = "burst";
    item.textContent = pieces[Math.floor(Math.random() * pieces.length)];

    const x = `${Math.random() * 100}vw`;
    const y = `${82 + Math.random() * 16}vh`;
    const dx = `${(Math.random() - 0.5) * 35}vw`;

    item.style.setProperty("--x", x);
    item.style.setProperty("--y", y);
    item.style.setProperty("--dx", dx);
    item.style.animationDelay = `${Math.random() * 0.55}s`;

    burstLayer.appendChild(item);
    item.addEventListener("animationend", () => item.remove());
  }
};

openBtn.addEventListener("click", () => {
  opened = true;
  envelopeWrap.classList.add("open");
  statusEl.textContent = "Letter opened. Read it, then choose my favorite answer 💞";
  statusEl.className = "status";
  shower(18);
  openBtn.textContent = "Opened 💌";
});

yesBtn.addEventListener("click", () => {
  if (!opened) {
    statusEl.textContent = "Open the letter first, pretty please ✨";
    statusEl.className = "status";
    return;
  }

  statusEl.textContent = "YAY!! Best Feb 14 ever. Date mode activated 💕";
  statusEl.className = "status yes-state";
  yesBtn.textContent = "My Valentine 🥹💖";
  shower(45);
});

noBtn.addEventListener("mouseenter", () => {
  if (!opened) {
    return;
  }

  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;

  noBtn.style.position = "fixed";
  noBtn.style.left = `${Math.max(10, Math.random() * maxX)}px`;
  noBtn.style.top = `${Math.max(10, Math.random() * maxY)}px`;
});

noBtn.addEventListener("click", () => {
  noClicks += 1;

  const lines = [
    "That button is shy today 🙈",
    "Hmm... maybe your smile means yes? 😊",
    "Counter-offer: I bring flowers + dessert? 🌸🍰",
    "System override: romance wins 💘",
  ];

  statusEl.textContent = lines[(noClicks - 1) % lines.length];
  statusEl.className = "status no-state";
  shower(14);

  if (noClicks >= 3) {
    noBtn.textContent = "Okay okay... yes 💗";
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const statusEl = document.getElementById("status");
const heartsLayer = document.getElementById("heartsLayer");

let noClickCount = 0;

const makeHearts = (count = 28) => {
  const emojis = ["💖", "💘", "💞", "✨", "🌸"];

  for (let i = 0; i < count; i += 1) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    const x = Math.random() * 100;
    const y = 85 + Math.random() * 14;
    const drift = (Math.random() - 0.5) * 26;

    heart.style.setProperty("--x", `${x}vw`);
    heart.style.setProperty("--y", `${y}vh`);
    heart.style.setProperty("--drift", `${drift}vw`);
    heart.style.animationDelay = `${Math.random() * 0.65}s`;

    heartsLayer.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }
};

yesBtn.addEventListener("click", () => {
  statusEl.textContent = "Valentine request accepted. Mission accomplished 💚";
  statusEl.className = "status accepted";
  yesBtn.textContent = "Best decision ever ✨";
  makeHearts(42);
});

noBtn.addEventListener("mouseenter", () => {
  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;
  const moveX = Math.max(10, Math.random() * maxX);
  const moveY = Math.max(10, Math.random() * maxY);

  noBtn.style.position = "fixed";
  noBtn.style.left = `${moveX}px`;
  noBtn.style.top = `${moveY}px`;
});

noBtn.addEventListener("click", () => {
  noClickCount += 1;
  statusEl.className = "status playful";

  const messages = [
    "Nice try 😏 but my heart says yes.",
    "Button detected: maximum cuteness defense activated.",
    "Are you sure? Our playlist already said yes.",
    "Recalculating... outcome still: be my Valentine 💗",
  ];

  statusEl.textContent = messages[(noClickCount - 1) % messages.length];
  makeHearts(14);

  if (noClickCount >= 3) {
    noBtn.textContent = "Okay fine... yes?";
  }
});

window.addEventListener("load", () => {
  shower(16);
  setTimeout(() => makeHearts(18), 260);
});
