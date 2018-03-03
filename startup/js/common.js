/**
 * Created by sydney on 01.12.2017.
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
// --------------------------------------slick-1--------------------------------
$(document).ready(function() {
    $('.team').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: true,
        prevArrow: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
})
// ----------------------------------slick-2---------------------------------
//
$(document).ready(function() {
$('.clients_content').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 860,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
})
// --------------------------mixItUp-------------------------------
var mixer = mixitup('.work_content');
// ----------------------------Menu-----------------------------
$('#navigation').slimmenu(
    {
        resizeWidth: '768',
        collapserTitle: 'Menu',
        animSpeed: 'medium',
        easingEffect: null,
        indentChildren: false,
        childrenIndenter: '&nbsp;'
    });
// -------------------------------readMore--------------------------------
$('.blog_text').readmore({
    speed: 75,
    collapsedHeight: 135,
    moreLink: '<a href="#">Read more</a>',
    lessLink: '<a href="#">Close</a>'
});

