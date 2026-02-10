document.addEventListener("DOMContentLoaded", () => {
  const envelopeWrap = document.getElementById("envelopeWrap");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const statusEl = document.getElementById("status");
  const burstLayer = document.getElementById("burstLayer");

  if (!envelopeWrap || !yesBtn || !noBtn || !statusEl || !burstLayer) {
    console.error("Valentine page failed to initialize: required elements are missing.");
    return;
  }

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

  const openLetter = () => {
    if (opened) {
      return;
    }

    opened = true;
    envelopeWrap.classList.add("open");
    envelopeWrap.setAttribute("aria-expanded", "true");
    statusEl.textContent = "Letter opened. Read it, then choose my favorite answer 💞";
    statusEl.className = "status";
    shower(18);
  };

  const moveNoButton = () => {
    if (!opened) {
      return;
    }

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    noBtn.style.position = "fixed";
    noBtn.style.left = `${Math.max(10, Math.random() * maxX)}px`;
    noBtn.style.top = `${Math.max(10, Math.random() * maxY)}px`;
  };

  envelopeWrap.addEventListener("click", openLetter);
  envelopeWrap.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLetter();
    }
  });

  yesBtn.addEventListener("click", () => {
    if (!opened) {
      statusEl.textContent = "Tap the envelope first, pretty please ✨";
      statusEl.className = "status";
      return;
    }

    statusEl.textContent = "YAY!! Best Feb 14 ever. Date mode activated 💕";
    statusEl.className = "status yes-state";
    yesBtn.textContent = "My Valentine 🥹💖";
    shower(45);
  });

  noBtn.addEventListener("mouseenter", moveNoButton);
  noBtn.addEventListener("touchstart", moveNoButton, { passive: true });

  noBtn.addEventListener("click", () => {
    noClicks += 1;

    const lines = [
      "That button is shy today 🙈",
      "Hmm... maybe your smile means yes? 😊",
      "Counter-offer: I bring flowers + dessert? 🌹🍰",
      "Okay okay, I heard a tiny yes 💗",
    ];

    statusEl.textContent = lines[(noClicks - 1) % lines.length];
    statusEl.className = "status no-state";
    shower(16);

    if (noClicks >= 3) {
      noBtn.textContent = "Maybe yes? 😅";
    }
  });

  shower(16);
});
