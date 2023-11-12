var header = document.getElementById("Header");

window.addEventListener("scroll", () => {
  var scroll = window.scrollY;

  if (scroll > 10) {
    header.style.backgroundColor = "#d90833";
  } else {
    header.style.backgroundColor = "#E51A54";
  }
});
