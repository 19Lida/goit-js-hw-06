const refs = {
  validationInput: document.querySelector("#validation-input"),
};
const testValidation = (event) => {
  // event.currentTarget.value.length > refs.validationInput.dataset.length ? refs.validationInput.classList.add("invalid") : refs.validationInput.classList.add("valid");
  event.currentTarget.value.length == refs.validationInput.dataset.length
    ? refs.validationInput.classList.add("valid")
    : refs.validationInput.classList.add("invalid");
  if (event.currentTarget.value === "") {
    refs.validationInput.classList.remove("invalid", "valid");
  }
};
const reseValidation = (event) => {
  refs.validationInput.classList.remove("valid", "invalid");
};

refs.validationInput.addEventListener("blur", testValidation);
refs.validationInput.addEventListener("focus", reseValidation);

// event.currentTarget.value.length - Длина символов в инпуте;
//  refs.validationInput.dataset.length - дата атрибут инпута (несет исключительно информационный для js характер, в нашем случае, говорит сколько символов должно быть и равен 6);

//   refs.validationInput.classList.add("invalid") - добавляет класс invalid и делает инпут красным
//  refs.validationInput.classList.add("valid") - Добавляет класс valid и делает инпут зеленым
// Это я тебе распимал 6 строку

// 14 и 15 строки - это функция которая сбрасывает валидацию, она удаляет все классы, которые с ней связанны с помощью classlist.remove("invalid", "valid") в скобочках передаем строки классы, которые мы хотим удалить.

// 19 строка это слушатель события, который следит за событием blur (это обратное от события focus, а именно - focus срабатывает, когда мы клацаем на input, а blur когда клацаем в другое место, как бы идет потеря фокуса.) так вот когда мы клацаем в любое другое место у нас срабатывает валидация, потому что слушатель события применяет в это время функцию testValidation.

// Теперь нам нужно сбрасывать валидацию, когда мы снова клацаем на инпут, что бы не перезагружать каждый раз страницу.
// Это делает функция на 14 15 строке resetValidation.
// refs.validationInput.addEventListener("focus", reseValidation);

// Вот так: Мы вешаем на инпут еще один слушатель событий (addEventListener), что бы он слушал событие focus, и когда оно происходит, вызываем функцию resetValidation
