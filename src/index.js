// save header nav and links to variables
var nav = document.querySelector(".header__nav");
var links = document.querySelector(".header__links");

// reset header class to default when resizing to close the mobile menu
// reset link styling to default above 900px
// display links on screen sizes larger than 900px
function screenWidth() {
  if (screen.width > 900) {
    links.className = "links header__links flex";
  } 
  else {
    links.clasName += " hide"
    nav.className = "header__nav";
  }
}

// add mobile-menu class to header nav along with styling and display property for links
function mobileMenu() {
  if (nav.className === "header__nav") {
    nav.className += " mobile-menu";
    links.className += " heading heading--300 flex";
  } else {
    nav.className = "header__nav";
    links.className = "header__links hide";

  }
}

// reset nav and link classes back to default and hide links below 900px
function reDirect() {
  if (screen.width <= 900) {
    nav.className = "header__nav";
    links.className = "links header__links hide";
  }
}
