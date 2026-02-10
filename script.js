document.addEventListener("DOMContentLoaded", () => {
  const envelopeWrap = document.getElementById("envelopeWrap");
  const openBtn = document.getElementById("openBtn");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const statusEl = document.getElementById("status");
  const burstLayer = document.getElementById("burstLayer");

  if (!envelopeWrap || !openBtn || !yesBtn || !noBtn || !statusEl || !burstLayer) {
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

  noBtn.style.position = "fixed";
  noBtn.style.left = `${Math.max(10, Math.random() * maxX)}px`;
  noBtn.style.top = `${Math.max(10, Math.random() * maxY)}px`;
});

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
