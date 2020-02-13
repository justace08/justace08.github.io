jQuery(function () {
    jQuery('.targetDiv').hide();
    jQuery('#div1').show();
    jQuery('#showall').click(function () {
        jQuery('.targetDiv').show();
    });
    jQuery('.showSingle').click(function () {
        jQuery('.targetDiv').hide();
        jQuery('#div' + $(this).attr('target')).fadeIn();
    });
});

$('.prod-main-container').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    autoplaySpeed: 3000,
});

$(window).scroll(function () {   
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $("nav").addClass("hide-nav");
    } else {
        $("nav").removeClass("hide-nav");
    }
});

$('.slider-team').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 6000,
    dots: true
});

$('.oa-slider').slick({
    centerMode: true,
    centerPadding: '60px',
    dots: true,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    dots: true,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

$('.portfolio-slides').slick({
    dots:true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    mobileFirst: true
});

$('.portfolio-slides').slickLightbox({
    itemSelector: 'a',
    navigateByKeyboard: true
});

var text = $('.text-overflow'),
    btn = $('.btn-overflow'),
    h = text[0].scrollHeight; 

if(h > 120) {
	btn.addClass('less');
	btn.css('display', 'block');
}

btn.click(function(e) 
{
  e.stopPropagation();

  if (btn.hasClass('less')) {
      btn.removeClass('less');
      btn.addClass('more');
      btn.text('Show less');

      text.animate({'height': h});
  } else {
      btn.addClass('less');
      btn.removeClass('more');
      btn.text('Show more');
      text.animate({'height': '120px'});
  }  
});

$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
    centerMode: true,
    centerPadding: '60px',
    asNavFor: '.slider-for',
    dots: false,
    autoplaySpeed: 10000,
    autoplay: true,
    focusOnSelect: true,
    centerPadding: '10px',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

$("#typed").typed({
    strings: ["Simple Solution for a Complex World"],
    typeSpeed: 30,
    startDelay: 9500,
    backSpeed: 10,
    backDelay: 2000,
    loop: true,
    cursorChar: "_",
    contentType: 'html'
});
$("#typed2").typed({
    strings: ["Products and Solutions for Critical Facilities and Building Management"],
    typeSpeed: 30,
    startDelay: 0,
    backSpeed: 10,
    backDelay: 7000,
    loop: true,
    cursorChar: "|",
    contentType: 'html'
});


particlesJS("particles-js", { "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#3fa9f5" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#ffffff" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 100, "color": "#313498", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 4, "direction": "none", "random": false, "straight": false, "out_mode": "bounce", "bounce": false, "attract": { "enable": false, "rotateX": 1736.124811591, "rotateY": 7496.902595506591 } } }, "interactivity": { "detect_on": "window", "events": { "onhover": { "enable": false, "mode": "repulse" }, "onclick": { "enable": false, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }); var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function () { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);



    