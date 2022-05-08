
// const input = document.querySelector("#validation-input");
// const sizeEl = document.querySelector("[data-length]");


// input.addEventListener('blur', onInputBlur);



// function onInputBlur() { 
//     // console.log("failed blur");

//     if (this.getAttribute('data-length') >this.value.length) {
//         this.classList.remove('valid');
//         this.classList.add('invalid')
//     }
//     else {
//         this.classList.remove('invalid');
//         this.classList.add('valid') 
//     }


// };
  


const input = document.querySelector('#validation-input');

const inputLength = input.dataset.length;



input.addEventListener('input', onInputBlur);

    function onInputBlur(evn) {
        const inputText = evn.target.value;
        console.log(inputText);
  

        if (inputText.length === +inputLength) {
            input.classList.add('valid')
            input.classList.remove('invalid');

        }
        else {
            input.classList.add('invalid')
            input.classList.remove('valid');
        }
    };


