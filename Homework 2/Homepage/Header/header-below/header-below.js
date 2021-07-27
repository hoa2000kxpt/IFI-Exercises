// window.onscroll = function() {myFunction()};

var navbar = document.getElementsByClassName("myTopnav")[0];
var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {

//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

function responsiveTopNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "header-below-menu") {
      x.className += " responsive";
  } else {
      x.className = "header-below-menu";
  }
}


$(document).ready(function () {

  // Hover the "Sản phẩm" button, and display its product dropdown 
  $(".dropdown .drop_btn").hover(function () {
      $(".dropdown_content").css({
          "display": "flex",
          "min-width": "400px",
          "justify-content": "space-between"
      })    
  })

  // Once moving away the product dropdown, it is disappeared 
  $(".dropdown_content").mouseleave(function () {
      $(this).css("display", "none")
  })  

  // Hover the "Bộ sưu tập" button, and display its category dropdown 
  $(".dropdown-2 .drop_btn_2").hover(function () {
      $(".dropdown_content_2").css({
          "display": "flex",
          "min-width": "400px",
          "justify-content": "space-between"
      })    
  })

  // Once moving away the category dropdown , it is disappeared 
  $(".dropdown_content_2").mouseleave(function () {
      $(this).css("display", "none")
  }) 

  

});
