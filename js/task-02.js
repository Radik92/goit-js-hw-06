const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');
ingredients.map((elem) => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = elem;
  list.append(li);
  console.log(li);
})