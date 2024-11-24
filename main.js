const hamburger = document.getElementById("hamburgerMenu");
const oneSide = document.getElementById("oneSide");
const signUp = document.getElementById("signUp");

hamburger.addEventListener("click", () => {
  oneSide.classList.toggle("active");
  signUp.classList.remove("btn-dark");
});

// hamburger.addEventListener("click", () => {});
