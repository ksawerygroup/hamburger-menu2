$('.burger').on('click', function () {
  $('.fas, nav').toggleClass('off');
  $('.fa-angle-up').css({
    'color': 'white'
  })
  $('.wrapper').toggleClass('top');
})