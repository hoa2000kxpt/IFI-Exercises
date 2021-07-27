window.onscroll = function() {myFunction()};

var navbar = document.getElementsByClassName("myTopnav")[0];
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {

    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function responsiveTopNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "header-below-menu") {
      x.className += " responsive";
  } else {
      x.className = "header-below-menu";
  }
}