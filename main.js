console.log("JS Connected");

var toggleSideMenu = document.querySelector(".toggleSideMenu");
var sideMenu = document.querySelector(".side");

toggleSideMenu.addEventListener("click", () => {
  if (sideMenu.style.width === "0px") {
    sideMenu.style.width = "100%";
    sideMenu.style.opacity = "1";
  } else {
    sideMenu.style.width = "0px";
    sideMenu.style.opacity = "0";
  }
});
