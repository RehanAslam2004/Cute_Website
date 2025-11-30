const hugs = [
  // Cute cat‑hug / cuddle GIFs (recent & accessible)
  "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
  "https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif",
  "https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif",
  "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
  "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
  "https://media.giphy.com/media/wnsgren9NtITS/giphy.gif",

  // Cartoon / animated “cute hug” cats
  "https://media.giphy.com/media/ARSp9T7wwxNcs/giphy.gif",  // two cartoon cats hugging :contentReference[oaicite:0]{index=0}
  "https://media.giphy.com/media/FPDZV2JGkNGeUZdi7G/giphy.gif",  
  "https://media.giphy.com/media/ZBQhoZC0nqknSviPqT/giphy.gif",
];


const messages = [
  "Your smile makes even the toughest days gentle 💗",
  "Every minute you study — you’re turning stress into strength 🌸",
  "I’m sending all the love and kitty‑hugs your way 😽",
  "Focus now, shine later. You’re already amazing ✨",
  "Take a deep breath, beautiful. You’ve got this 💕",
  "I believe in you, even when you doubt yourself 🩷",
  "One exam at a time — and then endless hugs from me 🐱💖",
  "You don’t just survive the pressure — you grow because of it 🌟",
  // Hidden sweet message
  "Can’t wait for you Raha ki mama to be mine… until then keep shining. Muwaah 😘"
];


function sendHug() {
  const randomHug = hugs[Math.floor(Math.random() * hugs.length)];
  const img = document.getElementById("hugImage");
  img.src = randomHug;
  img.style.display = "block";

  document.getElementById("message").innerHTML = "Sending you a tight kitty hug 😻💗";

  createHeart();
}

function motivate() {
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("message").innerHTML = randomMsg;

  document.getElementById("hugImage").style.display = "none";
  createHeart();
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "🩷";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
const icons = ["🩷", "💕", "💖", "🐱"];

function backgroundFloat() {
  const float = document.createElement("div");
  float.classList.add("float");
  float.innerHTML = icons[Math.floor(Math.random() * icons.length)];
  float.style.left = Math.random() * 100 + "vw";
  float.style.animationDuration = (Math.random() * 5 + 6) + "s";

  document.body.appendChild(float);

  setTimeout(() => {
    float.remove();
  }, 11000);
}

setInterval(backgroundFloat, 800);
    