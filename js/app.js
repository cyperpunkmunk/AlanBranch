
$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 40) {
      $('.dropbtn').fadeIn();
    } else {
      $('.dropbtn').fadeOut();
    }
  });


function openNav() {

    document.getElementById("open").style.display = "none";
    document.getElementById("nav").style.width = "100%"
}

function closeNav() {
    document.getElementById("nav").style.width = "0";
    document.getElementById("open").style.display  = "block"
}