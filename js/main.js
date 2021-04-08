const swiper = new Swiper('.chanell-slider', {

   loop: true,
   slidesPerView: 6,
 
    // Navigation arrows
   navigation: {
     nextEl: '.chanell-button-next',
     prevEl: '.chanell-button-prev',
   },
 
 
 });


 const recommendedSlider = new Swiper('.recommended-slider', {

   loop: true,
   slidesPerView: 3,
 
    // Navigation arrows
   navigation: {
     nextEl: '.recommended-slider-next',
     prevEl: '.recommended-slider-prev',
   },
 
 
 });

 const foodDrink = new Swiper('.food-Drink', {

   loop: true,
   slidesPerView: 6,
 
    // Navigation arrows
   navigation: {
     nextEl: '.food-Drink-next',
     prevEl: '.food-Drink-prev',
   },
 
 
 });