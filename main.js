console.log("JS Connected");
// console.log(window.innerWidth);

var toggleSideMenu = document.querySelector(".toggleSideMenu");
var sideMenu = document.querySelector(".side");

toggleSideMenu.addEventListener("click", () => {
  if (sideMenu.style.left === "-100%") {
    sideMenu.style.left = "0%";
    // sideMenu.style.opacity = "1";
  } else {
    sideMenu.style.left = "-100%";
    // sideMenu.style.opacity = "0";
  }
});
