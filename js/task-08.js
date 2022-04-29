const form = document.querySelector('.login-form');


form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    console.log(formData);


    formData.forEach((name, value) => {
        // console.log('name', name);
        // console.log('value', value);

        if (!name || !value) {
            alert('Please fill in the empty field ')
        }

    });
        form.reset();
 
};
