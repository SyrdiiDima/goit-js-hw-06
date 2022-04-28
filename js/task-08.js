const form = document.querySelector('.login-form');


form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();
    
    // 	const {
	// 	elements: {
	// 		email: { value: email },
	// 		password: { value: password },
	// 	},
	// } = event.currentTarget;


    const formData = new FormData(event.currentTarget);

    console.log(formData);

    formData.forEach((name, value) => {
        console.log('name', name);
        console.log('value', value);
        form.reset();  
    })

    !name || !value
		? alert('Пожалуйста, заполните ВСЕ поля')
		: console.log({ name: value });


}

// const loginFormRef = document.querySelector('.login-form');

// const onFormSubmit = (event) => {
// 	event.preventDefault();

// 	const {
// 		elements: {
// 			email: { value: email },
// 			password: { value: password },
// 		},
// 	} = event.currentTarget;

// 	!email || !password
// 		? alert('Пожалуйста, заполните ВСЕ поля')
// 		: console.log({ email: password });

// 	loginFormRef.reset();
// };

// loginFormRef.addEventListener('submit', onFormSubmit);