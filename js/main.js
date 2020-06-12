function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const box = document.getElementById("boxy"),
  ctx = box.getContext("2d"),
  ping = new AudioContext();
let x, y,
  dx = 4,
  dy = 4,
  img = new Image();

img.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/mirrorball.png';
img.onload = function() {
  x = getRandomInRange(0, box.width - img.width);
  y = getRandomInRange(0, box.height - img.height);
  draw();
};

function draw() {
  ctx.clearRect(0, 0, box.width, box.height);
  ctx.drawImage(img, x, y, img.width, img.height);
  if (x < 0 || x > box.width - img.width) {
    dx=-dx;
  }
  if (y < 0 || y > box.height - img.height) {
    dy=-dy;
  }
  x+=dx;
  y+=dy;
  window.requestAnimationFrame(draw);
}
