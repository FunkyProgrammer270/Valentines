document.addEventListener("DOMContentLoaded", function () {
  var envelopeWrap = document.getElementById("envelopeWrap");
  var yesBtn = document.getElementById("yesBtn");
  var noBtn = document.getElementById("noBtn");
  var statusEl = document.getElementById("status");
  var burstLayer = document.getElementById("burstLayer");

  if (!envelopeWrap || !yesBtn || !noBtn || !statusEl || !burstLayer) {
    console.error("Valentine page failed to initialize: required elements are missing.");
    return;
  }

  var opened = false;
  var noClicks = 0;

  function shower(count) {
    var total = typeof count === "number" ? count : 26;
    var pieces = ["💖", "💌", "✨", "🌸", "💘", "🫶"];

    for (var i = 0; i < total; i += 1) {
      var item = document.createElement("span");
      item.className = "burst";
      item.textContent = pieces[Math.floor(Math.random() * pieces.length)];

      var x = String(Math.random() * 100) + "vw";
      var y = String(82 + Math.random() * 16) + "vh";
      var dx = String((Math.random() - 0.5) * 35) + "vw";

      item.style.setProperty("--x", x);
      item.style.setProperty("--y", y);
      item.style.setProperty("--dx", dx);
      item.style.animationDelay = String(Math.random() * 0.55) + "s";

      burstLayer.appendChild(item);
      item.addEventListener("animationend", function () {
        this.remove();
      });
    }
  }

  function openLetter() {
    if (opened) {
      return;
    }

    opened = true;
    envelopeWrap.classList.add("open");
    envelopeWrap.setAttribute("aria-expanded", "true");
    statusEl.textContent = "Letter opened. Read it, then choose my favorite answer 💞";
    statusEl.className = "status";
    shower(18);
  }

  function moveNoButton() {
    if (!opened) {
      return;
    }

    var maxX = window.innerWidth - noBtn.offsetWidth - 20;
    var maxY = window.innerHeight - noBtn.offsetHeight - 20;

    noBtn.style.position = "fixed";
    noBtn.style.left = String(Math.max(10, Math.random() * maxX)) + "px";
    noBtn.style.top = String(Math.max(10, Math.random() * maxY)) + "px";
  }

  envelopeWrap.addEventListener("click", openLetter);
  envelopeWrap.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openLetter();
    }
  });

  yesBtn.addEventListener("click", function () {
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

  noBtn.addEventListener("click", function () {
    noClicks += 1;

    var lines = [
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
