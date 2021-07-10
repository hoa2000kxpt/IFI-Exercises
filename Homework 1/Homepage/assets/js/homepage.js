$('.product-list-item').slick({
    arrow: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
        breakpoint: 1280,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
    });


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