// Create a clone of the menu, right next to original.
$('.menu').addClass('original').clone().insertAfter('.menu').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;               

  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.     
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}



// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 1500) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

// ----------------------------------------------------------



// Responsive Navigation

$(document).on("ready",function() {
  // 0 = hide, 1 = visible
  var menuState = 0;
  //if($(".mini-menu-options").is(":hidden")) {
    /* Add a Click event listener to btn-select */
    $(".btn-select").on("click",function() {
      if(menuState === 0) {
        $(".mini-menu-options").slideDown("slow");
        menuState = 1;
      } else {
        $(".mini-menu-options").slideUp("slow");
        menuState = 0;
      }
    });
  //}
  $(".mini-menu-options li").on("click", function() {
    var numHijos = $(this).children().length;
    if(numHijos < 2) {
      // hide the menu
      $(".mini-menu-options").hide("fast");

      var texto = $(this).text();

      $(".menu-select .menu-actual").text(texto);
    }
    menuState = 0;
  });
});