$(document).ready(function() {



  $('#menu-toggle').on('click', function() {
    $('.nav').addClass('showing');
    $('.nav ul').addClass('showing');
    $('#menu-toggle').css("color", "blue");
  });

  $('.restofbody').on('click', function() {
    $('.nav').removeClass('showing');
    $('.nav ul').removeClass('showing');
    $('#menu-toggle').css("color", "black");
  });

  $('.subnav').on('click', function() {
    $('.nav').removeClass('showing');
    $('.nav ul').removeClass('showing');
    $('#menu-toggle').css("color", "black");
  });

  $('.ultrasubnav').on('click', function() {
    $('.nav').removeClass('showing');
    $('.nav ul').removeClass('showing');
    $('#menu-toggle').css("color", "black");
  });


  $('.post-wrapper').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),


  });

  $('.post-wrapper1').slick({
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: $('.next'),
    prevArrow: $('.prev'),
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

  });

});

window.onscroll = function() {
  myFunction()
};

// Get the navbar
var navbar = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");

  } else {
    navbar.classList.remove("sticky");
  }
}
