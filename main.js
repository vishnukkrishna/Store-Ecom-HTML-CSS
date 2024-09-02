const menuBtn = document.querySelector(".menuBtn");
const navlinks = document.querySelector(".navlinks");

menuBtn.addEventListener("click", () => {
  navlinks.classList.toggle("active");
});
