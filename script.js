const message = "Hey friend!\nI'm Star ✨\nI'm glad you're here.";
const typedText = document.getElementById("typedText");

let i = 0;

function typeText() {
  if (i < message.length) {
    typedText.textContent += message[i];
    i++;
    setTimeout(typeText, 80);
  }
}

typeText();
