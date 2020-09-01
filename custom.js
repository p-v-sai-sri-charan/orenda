$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});


$('.carousel').carousel({
    interval: 2000
  })


var $numberofSlides = $('.carousel-item').length;
var $currentSlide = Math.floor((Math.random() * $numberofSlides));
  
$('.carousel-indicators li').each(function(){
    var $slideValue = $(this).attr('data-slide-to');
    if($currentSlide == $slideValue) {
      $(this).addClass('active');
      $item.eq($slideValue).addClass('active');
    } else {
      $(this).removeClass('active');
      $item.eq($slideValue).removeClass('active');
    }
  });



  function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }