/**
 * Created by sydney on 28.06.2018.
 */
//-------------------------------menu-------------------------------
$('#navigation').slimmenu(
    {
        resizeWidth: '640',
        collapserTitle: '',
        animSpeed: 'medium',
        easingEffect: null,
        indentChildren: false,
        childrenIndenter: '&nbsp;'
    });
// ------------------------------------pop-up-----------------------
$(document).ready(function() {
    $('#go, #go1, #go2, #go3, #go4, #go5, #go6, #go7').click( function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function(){
                $('#modal_window')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });
    $('#modal_close').click( function(){
        $('#modal_window')
            .animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });
});
// ---------------------------------acordion------------------------
var acc = document.getElementsByClassName(".accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
         to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
// -----------------------------animate----------------------
new WOW().init();
// ----------------------------slick-slider--------------------
$('.multiple-items').slick({
    responsive: [
        {
            breakpoint: 1920,
//сообщает, при какой ширине экрана нужно включать настройки
            settings: "unslick"
        },

         {
            breakpoint: 1280,
//сообщает, при какой ширине экрана нужно включать настройки
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: false,
                arrows: true
            }
        }
    ]
});


