const twinkleLayer = document.getElementById("twinkleLayer");

for (let i = 0; i < 18; i++) {
  const star = document.createElement("div");
  star.className = "pixel-star";

  star.style.left = Math.random() * 96 + "%";
  star.style.top = Math.random() * 40 + "%";
  star.style.setProperty("--speed", 1 + Math.random() * 2.5 + "s");
  star.style.animationDelay = Math.random() * 3 + "s";

  twinkleLayer.appendChild(star);
}

function slideToPage(event, page) {
  event.preventDefault();

  document.body.classList.add("slide-out");

  setTimeout(() => {
    window.location.href = page;
  }, 450);
}
