const allCategories = document.querySelectorAll("ul#categories>li.item");
console.log("Number of categories: " + allCategories.length);

allCategories.forEach(({children:[h2, ul]})=> {
    console.log("Category:" + h2.textContent );
    console.log("Element: "+ ul.childElementCount);
});
