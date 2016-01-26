var heads = [];

var ghostVanish = function(name) {
  $(name).fadeOut(500);
};

var ghostGone = function(name) {
  $(name).css('opacity', '0');
};


$(function() {
  //-----------------------------------
  // set all initial head opacity to 0, except 1
  //-----------------------------------
  heads.push( $( ".head" ).toArray() );
  for (i=0; i<heads.length; i++) {
    $(heads[i]).addClass('nonActive');
    $('#head3').removeClass('nonActive').addClass('active');
  }

  $('#mary').hover( function() {
      var currHead = $('.active').toArray();
      $(currHead[0]).removeClass('active').addClass('nonActive');
      $('#head2').addClass('active');
      $('#mary').removeClass('slowFadeIn').addClass('fadeOut');
    },
    function() { $('#mary').removeClass('fadeOut').addClass('slowFadeIn');}
  );

  $('#ghost1').hover( function() {
      var currHead = $('.active').toArray();
      $(currHead[0]).removeClass('active').addClass('nonActive');
      $('#head5').addClass('active');
      $('#ghost1').removeClass('slowFadeIn').addClass('fadeOut');
    },
    function() { $('#ghost1').removeClass('fadeOut').addClass('slowFadeIn');}
  );


  // $('#ghost2').hover(
  //   function() {
  //     $('.active').fadeOut();
  //     $('#head2').css('opacity', '1');
  //     $('#mary').removeClass('slowFadeIn').addClass('fadeOut');
  //   },
  //   function() { $('#mary').removeClass('fadeOut').addClass('slowFadeIn');}
  // );

});
