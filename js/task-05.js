const input = document.querySelector("#name-input");

const titleEl = document.querySelector("#name-output");



input.addEventListener('input', onInputValue);


function onInputValue(event) {
    
    // console.log(event.currentTarget.value);
    titleEl.textContent = event.currentTarget.value;
}