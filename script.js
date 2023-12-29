const noButton = document.getElementById("noButton");

noButton.addEventListener("mouseover", () => {
  const randomX = Math.random() * window.innerWidth;
  const randomY = Math.random() * window.innerHeight;
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
});

const yesButton = document.getElementById("yesButton");

yesButton.addEventListener("click", () => {
  window.location.href = "hurray.html";
});
