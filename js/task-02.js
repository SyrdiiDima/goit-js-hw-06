// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
  
// ];


// const elements = ingredients.map(ingredient => {
  
  
//   const liEl = document.createElement('li');

//   liEl.classList.add('item');
//   liEl.textContent = ingredient;


//   const ulEl = document.querySelector('ul');
//   ulEl.appendChild(liEl)

//   console.log(ulEl);
 
// });


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
  
];

const ingredientsList = document.querySelector('#ingredients');
const elements = ingredients.map(ingredient => {
  
  const liEl = document.createElement('li');

  liEl.classList.add('item');
  liEl.textContent = ingredient;
  
  return liEl;
  
});
ingredientsList.append(...elements);
 

