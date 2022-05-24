const menu = document.querySelector(".menu");
const button = document.querySelector(".btn");
const nav = document.querySelector(".menuOptions");

menu.addEventListener("click", () => {
  if (nav.classList.contains("hide")) {
    //console.log(nav);
    nav.classList.remove("hide");
    //console.log(nav);
  } else {
    //console.log(nav);
    nav.classList.add("hide");
    //console.log(nav);
  }

  //   nav.classList.toggle("hide");
});

// button.addEventListener("click", () => {
//   console.log(" btn clicked");
// });
