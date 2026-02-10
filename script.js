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
  setTimeout(() => makeHearts(18), 260);
});
