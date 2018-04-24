// -----------------mixItUp-----------------------
var mixer = mixitup('.portfolio_content', {
    selectors: {
        target: '.portfolio_item'
    },
    animation: {
        duration: 800
    }
});
// --------------------------------------------------
// -----------------------------slider-----------------
$('.slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
});
// ----------------------------------------------------
// ---------------------mobile-menu----------------------

$(function(){
    $('#menu').slicknav();
});


// // -----------------------menu------------------------------
// $(function () {
//     $('.menu ul  li  a').each(function () {
//         var location = window.location.href;
//         var link = this.href;
//         if(location == link) {
//             $(this).addClass('active');
//         }
//     });
// });
// --------------------------scroll-------------------------------
//
// $(document).ready(function(){
//     $(".menu").on("click","a", function (event) {
//         event.preventDefault();
//         var id  = $(this).attr('href'),
//             top = $(id).offset().top;
//         $('body,html').animate({scrollTop: top}, 600);
//     });
// });