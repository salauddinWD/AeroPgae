
      
  $('.counter').counterUp({
    delay: 20,
    time: 2000
});

$('.test_slide_body').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: true,
  prevArrow: '<i class="fa-solid fa-arrow-left-long prev_arr"></i>',
  nextArrow: '<i class="fa-solid fa-arrow-right-long next_arr"></i>',
});



let main_manu = document.querySelector('.main_menu')
console.log(main_manu);
window.addEventListener('scroll',()=>{
  let scrollAmount = window.scrollY
  if(scrollAmount > 300){
main_manu.classList.add('fixed_menu')
  }
  else{
    main_manu.classList.remove('fixed_menu')
  }
})
	

