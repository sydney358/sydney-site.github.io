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
// -------------------menu-spy--------------------------------------
var elm = document.querySelector('.main-header');
var ms = new MenuSpy(elm, {
    activeClass: 'current-item'
});

var elm = document.querySelector('.main-header1');
var ms = new MenuSpy(elm, {
    activeClass: 'current-item'
});

var elm = document.querySelector('.main-header2');
var ms = new MenuSpy(elm, {
    activeClass: 'current-item'
});

var elm = document.querySelector('.main-header3');
var ms = new MenuSpy(elm, {
    activeClass: 'current-item'
});

var elm = document.querySelector('.main-header4');
var ms = new MenuSpy(elm, {
    activeClass: 'current-item'
});

// var elm = document.querySelector('.main-header1');
// var ms = new MenuSpy(elm, {
//     activeClass: 'menu_red'
// });

$(window).on('scroll', function(){
    if($(window).scrollTop() >= $('.home').offset().top){
        $('.slicknav_menu').css('background', '#74c7d5' );
    }
});

$(window).on('scroll', function(){
    if($(window).scrollTop() >= $('.services').offset().top){
        $('.slicknav_menu').css('background', '#b24a50' );
    }
});

$(window).on('scroll', function(){
    if($(window).scrollTop() >= $('.about').offset().top){
        $('.slicknav_menu').css('background', '#665464' );
    }
});

$(window).on('scroll', function(){
    if($(window).scrollTop() >= $('.work').offset().top){
        $('.slicknav_menu').css('background', '#83a457' );
    }
});

$(window).on('scroll', function(){
    if($(window).scrollTop() >= $('.contacts').offset().top){
        $('.slicknav_menu').css('background', '#75b4aa' );
    }
});