document.addEventListener("click", randomBackground);

function randomBackground() {
  let rgb = randomColor();
  let color = rgbToCSS(rgb);

  document.body.style.backgroundColor = color;
}

function randomColor() {
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);

  rgb = { r, g, b };

  return rgb;
}

function rgbToCSS(object) {
  color = `rgb(${object.r},${object.g},${object.b})`;
  return color;
}
