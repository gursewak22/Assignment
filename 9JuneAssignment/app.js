var button = document.querySelector("#toggler");
var links = document.querySelector(".links");

button.addEventListener("click", () => {
  console.log("hiiii");
  links.classList.toggle("show-links");
});
