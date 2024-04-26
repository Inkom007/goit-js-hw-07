const item = document.querySelectorAll("li.item");
console.log(`Number of categories: ${item.length}`);



 
item.forEach(category => {
    const categoryName = category.querySelector("h2").textContent;
    const categoryAmount = category.querySelectorAll("li").length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryAmount}`);
});

