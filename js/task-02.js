const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

document.querySelector("ul#ingredients").append(
  ...ingredients.map(ingredient => {
  const ingr = document.createElement("li");
  ingr.textContent = ingredient;
  ingr.classList.add("item");
  return ingr;
})
  );


