const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const text = document.getElementById("todo-input").value;
  console.log(text);
});
