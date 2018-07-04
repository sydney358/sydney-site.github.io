/**
 * Created by sydney on 14.06.2018.
 */
// ---------------------------------UpButton------------------------------
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
// ------------------------------scroll-------------------------------------

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});
// --------------------------------gallery-----------------------------
$('body').flipLightBox()
// ---------------------------------mobile-menu---------------------------
$(function(){
    $('#menu').slicknav();
});
// ---------------------------------readmore---------------------------------------
$(function(){
    $('.readmore').click(function(){
        $('.gallery_item').toggleClass('display');
        // return false;
    });
});
$(function(){
    $('.readmore').click(function(){
        $('.readmore').css("display", "none")
        // return false;
    });
});



