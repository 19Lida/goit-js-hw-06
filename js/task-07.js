const input = document.getElementById("font-size-control");
const span = document.getElementById("text");
input.addEventListener("input", onBlur);
function onBlur(event) {
  span.style.fontSize = event.currentTarget.value + "px";
}
