const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

let mouseX = 0, mouseY = 0, posX = 0, posY = 0;

function animateOutline() {
  posX += (mouseX - posX) / 5;
  posY += (mouseY - posY) / 5;

  cursorDot.style.top = `${mouseY}px`;
  cursorDot.style.left = `${mouseX}px`;

  cursorOutline.style.top = `${posY}px`;
  cursorOutline.style.left = `${posX}px`;

  requestAnimationFrame(animateOutline);
}

window.addEventListener("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

window.addEventListener("mousedown", function () {
  cursorOutline.style.width = "17px";
  cursorOutline.style.height = "17px";
});

window.addEventListener("mouseup", function () {
  cursorOutline.style.width = "30px";
  cursorOutline.style.height = "30px";
});

animateOutline();