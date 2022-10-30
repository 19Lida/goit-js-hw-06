// let counterValue = document.querySelector("#value");
// const addBtn = document.querySelector('button[data-action="increment"]');
// addBtn.addEventListener("click" , () => {
//     counterValue.textContent += 1;
// })
// const minusBtn = document.querySelector('button[data-action="decrement"]');
// minusBtn.addEventListener("click" , () => {
//     counterValue.textContent -= 1;
// })
let counterValue = 0;
const increment = () => {
  counterValue += 1;

  document.getElementById('value').textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  document.getElementById('value').textContent = counterValue;
};

document
  .querySelector("[data-action='increment']")
  .addEventListener('click', increment);

document
  .querySelector("[data-action='decrement']")
  .addEventListener('click', decrement);