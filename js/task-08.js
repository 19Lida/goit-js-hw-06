const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const password = formEl.password.value;
  if (email === "" || password === "") {
    alert("Заповніть всі поля вводу");
  } else {
    console.log({ email, password });
    form.reset();
  }
  return alert;
}
