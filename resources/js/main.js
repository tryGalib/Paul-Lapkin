// Smooth Scroll Animation
var html_body = $('html, body');
$('.ham-menu-nav-items ul li a, .down-arrow a, #hero .logo-part a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 0
            }, 800 );
            return false;
        }
    }
});

// Hamburger Menu Nav
function openMenu(){
  document.getElementById('ham-menu-nav').style.display = "block";
}

function closeMenu(){
  document.getElementById('ham-menu-nav').style.display = "none";
}

// MixitUp
var mixer = mixitup('.works-grid');

// WOW JS
wow = new WOW(
  {
  mobile:       false,
}
)
wow.init();