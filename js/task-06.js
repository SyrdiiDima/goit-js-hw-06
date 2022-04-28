
const input = document.querySelector("#validation-input");
const sizeEl = document.querySelector("[data-length]");


input.addEventListener('blur', onInputBlur);



function onInputBlur() { 
    // console.log("failed blur");

    if (this.getAttribute('data-length') > this.value.length) {
        this.classList.remove('valid');
        this.classList.add('invalid')
    }
    else {
        this.classList.remove('invalid');
        this.classList.add('valid') 
    }


};
  













