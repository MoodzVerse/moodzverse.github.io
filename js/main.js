const message = "Hi! I'm Starry. Welcome to Moodz Lounge.";
const typedText = document.getElementById("typedText");
const menu = document.getElementById("menu");

let i = 0;

function typeText() {
  if (i < message.length) {
    typedText.textContent += message[i];
    i++;
    setTimeout(typeText, 70);
  } else {
    setTimeout(() => {
      menu.classList.remove("hidden");
    }, 600);
  }
}

typeText();
