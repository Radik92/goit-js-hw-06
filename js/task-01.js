
const list = document.querySelectorAll('li.item');
console.log('Number of categories:', list.length);
list.forEach(function (elem) {
    const title = elem.querySelector('h2');
    const elements = elem.querySelectorAll('li');
    console.log('Category :', title.textContent);
    console.log('Elements :', elements.length);
})


