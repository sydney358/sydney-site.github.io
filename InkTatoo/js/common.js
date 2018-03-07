/**
 * Created by sydney on 20.02.2018.
 */
// ---------------------------scroll--------------------------------
$(document).ready(function(){
    $(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 600);
    });
});
// --------------------------------------------------------------------
// ----------------------------scroll_to_top---------------------------
$(document).ready(function() {
    /*
     var defaults = {
     containerID: 'toTop', // fading element id
     containerHoverID: 'toTopHover', // fading element hover id
     scrollSpeed: 500,
     easingType: 'linear'
     };
     */
    $().UItoTop({ easingType: 'easeOutQuart' });
});
// -----------------------------------------------------------------------
// ------------------------preloader--------------------------
// $(window).ready(function(){
//     setTimeout ("$('#axis').fadeIn('slow');",500);
//     setTimeout ("$('#axis').fadeOut('slow');",3000);
//     setTimeout ("$('.d-none').fadeOut('slow');",4000);
//     setTimeout ("$('#axis').animate({transform: 'translateX(600%)'})",1000);
//
// });




