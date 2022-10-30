const itemEl= document.querySelectorAll(`.item`);
console.log(`Number of categories: ${itemEl.length}`);
console.log('');
itemEl.forEach(elem => { 
 
console.log('Category:', elem.firstElementChild.textContent);   
 console.log('Elements:', elem.lastElementChild.children.length);
});