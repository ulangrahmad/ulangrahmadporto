const toTopButton = document.getElementById("toTop");

toTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});