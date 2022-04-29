function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonChangeColor = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('.color');




buttonChangeColor.addEventListener('click', onButtonChangeColor);
  

function onButtonChangeColor(event) {
  // console.log("click the button");

  const createdColor = getRandomHexColor();
  bodyEl.style.backgroundColor = createdColor;
  spanEl.textContent = createdColor;
}



