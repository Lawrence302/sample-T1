const menu = document.querySelector(".menu");

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

  // one line toggle menu
  //   nav.classList.toggle("hide");
});
