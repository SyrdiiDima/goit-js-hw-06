const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];




// const liEl = document.createElement('li')
// console.log(liEl);

// liEl.classList.add('item');
// console.log(liEl.classList);


// liEl.textContent = ingredient;


const elements = ingredients.map(ingredient => {
  
  const liEl = document.createElement('li');
  // console.log(liEl);
  liEl.classList.add('item');
  liEl.textContent = ingredient;
  // console.log(liEl.textContent);
  return liEl;
})
document.ul.append(elements);
console.log(...elements)










// const elements = ingredients.map(ingredient => {

//     const liEl = document.createElement('li');
//     liEl.classList.add('item');
//     liEl.textContent = ingredient;
//   return liEl;
  
//   });
// liEl.append(...elements);
// console.log(...elements);