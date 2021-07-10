function responsiveTopNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "header-below-menu") {
        x.className += " responsive";
    } else {
        x.className = "header-below-menu";
    }
  }