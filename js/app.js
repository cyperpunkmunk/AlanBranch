
$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 40) {
      $('.dropbtn').fadeIn();
    } else {
      $('.dropbtn').fadeOut();
    }
  });


