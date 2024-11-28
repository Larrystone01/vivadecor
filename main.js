const hamburger = document.getElementById("hamburgerMenu");
const oneSide = document.getElementById("oneSide");
const signUp = document.getElementById("signUp");
const burGer = document.querySelector(".burger");

hamburger.addEventListener("click", () => {
  // oneSide.classList.toggle("active");

  // Another method to do it

  // if (oneSide.classList.contains("active")) {
  //   console.log("Active class removed");
  //   oneSide.classList.remove("active");
  // } else {
  //   console.log("Active class added");
  //   oneSide.classList.add("active");
  // }

  // Another Method

  if (!oneSide.classList.contains("active")) {
    oneSide.classList.add("active");
    burGer.classList.replace("ti-menu-2", "ti-x");
    // console.log("Active class added");
  } else {
    oneSide.classList.remove("active");
    burGer.classList.replace("ti-x", "ti-menu-2");
    // console.log("Active class removed");
  }

  signUp.classList.toggle("btn-dark");
});

window.addEventListener("scroll", () => {
  oneSide.classList.remove("active");
  burGer.classList.replace("ti-x", "ti-menu-2");
});

// hamburger.addEventListener("click", () => {});
