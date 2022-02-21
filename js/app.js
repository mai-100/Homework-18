$(function () {
  $('#hideBtn').click(function () {
    $('#test').hide(2000);
  })

  $('#showBtn').click(function () {
    $('#test').show(1500);
  })

  $('#toggleBtn').dblclick(function () {
    $('#test').toggle(3000);
  })


  $('#fadeOut').click(function () {
    $('#bold').fadeOut(3000);
  })

  $('#fadeIn').click(function () {
    $('#bold').fadeIn(2500);
  })

  $('#fadeToggle').dblclick(function () {
    $('#bold').fadeToggle(4000);
  })

  $('#fadeTo').click(function () {
    $('#bold').fadeTo(4000,.2);
  })

  $('#panel').click(function () {
    $('#slide').slideToggle('slow');
  })

  $('#animate').click(function () {
    $('#dock').animate ({
      width: '1200px',
      height: '250px',
    },3000);
  })

  $('#stop').click(function () {
    $('#dock').stop();
  })

  $('#mthChain').click(function () {
    $('#jade').animate({width: '1000px'},3000).hide(2000).fadeIn(2000);
  })
})
