const list = document.querySelectorAll("li.item");
console.log(`Number of categories: ${list.length}`);
 
list.forEach(category => {
    const categoryName = category.querySelector("h2").textContent;
    const categoryAmount = category.querySelectorAll("li").length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryAmount}`);
});