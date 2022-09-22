document.addEventListener("shopify:section:load", function(event) {
var swiper = new Swiper(".featured_slider_new", {
        slidesPerView: 1,
        spaceBetween: 20,
  		loop: true,
  		speed: 1000,
  		navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          }
        }
       
});
});

var swiper = new Swiper(".featured_slider_new", {
        slidesPerView: 1,
        spaceBetween: 20,
  		loop: true,
  		speed: 1000,
  		navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          }
        }   
});
