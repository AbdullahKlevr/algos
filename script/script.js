// Form Fields Fill 

// VA

$('.btn-reg').on('click',function(){
   var servicepriceva = $(this).siblings('span').text();
   var servicepricevasplited = servicepriceva.split('/');
   $('.modal-form .serviceprice').val(servicepricevasplited[0])
});

$('.btn-reg').on('click',function(){
   var servicenameva = $(this).closest('.text-container-text').find('h3').text();
   $('.modal-form .servicename').val(servicenameva);
});

// VA

// Single Package 

$('.heading-list-single-package.pricing-single-package .btn-reg').on('click',function(){
   var servicenamesingle = $(this).siblings('i').text();
   $('.modal-form .servicename').val(servicenamesingle);
});

// Single Package

// Multi Package

$('.package-item .package-btn').on('click',function(){
   var servicenamemulti = $(this).siblings('h4').text();
   $('.modal-form .servicename').val(servicenamemulti);
});


// Multi Package

// Form Fields Fill 

// $(document).ready(function(){
$(window).on('load', function(){
    $('.amazon-dropshipping').addClass("van-animation");
    $('.contactbannerimage').addClass("contactanimation");
    $('.shopifybanner').addClass("shopifyanimation");
    $('.services-apl').addClass("aplanimation");
    $('.loader').addClass('loader-loaded');
    $('body.overflow-hidden').removeClass('overflow-hidden');
    // $('.loader').addClass('loaded');
    // $('.loader').slideUp();
    
    
    // setTimeout(function(){
    //       $('div#singupmodal').modal('show'); 
    // }, 8000);

    // Count One By One 
    
    // Video
        
    $(".btn-video,.video-parent video").click(function() {
        var video = $(".video-parent video").get(0);
    
        if ( video.paused ) {
            video.play();
            $('.layer-top-video').addClass('layer-remove');
            $('.btn-video').addClass('btn-noshow');
        } else {
            video.pause();
            $(".play").show();
            $(".pause").hide();
            $('.layer-top-video').removeClass('layer-remove');
            $('.btn-video').removeClass('btn-noshow');
        }
    
        return false;
        
    });
        
    // Video
    
    
    // Testimonial Videos
    
    $('.btn-testimonial').on('click',function(){
        var videoget = $(this).closest('.inner-testimonial-box').find('.video-source-hidden').html();
        $('.modal-video').html(videoget);
    })
    
    $(document).on('show.bs.modal','#videomodal', function () {
      setTimeout(function() { 
            $(".modal-video video").trigger('play');
      }, 1000);
    })
    
    $(document).on('hidden.bs.modal','#videomodal', function () {
      $('.testimonial-slider').slick("setPosition", 0);
      $(".modal-video video").trigger('pause');
    })
    
    // Testimonial Videos
    
    
    
    var count = -1;
    
    function arrowsparking() {
        var service = $('.arrow-bg-clip');
        var serviceslength = service.length - 1;
        count < serviceslength ? count++ : count = 0;
        service.removeClass('arrow-spark').eq(count).addClass('arrow-spark');
    }
    
    setInterval(arrowsparking, 3000);

    
    
    $(".video-parent video").removeAttr('preload');
});
  
$(document).ready(function () {

    $('.testimonial-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 7000,
        cssEase: 'linear',
        dots: false,
        arrows: true,
        prevArrow: $('.testimonial-slider-btn .prev-btn'),
        nextArrow: $('.testimonial-slider-btn .next-btn'),
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
            }
        }]
    
    });
    
    $('.slider-mobile').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        cssEase: 'linear',
        dots: false,
        arrows: true,
        prevArrow: $('.slider-mobile-btn .prev-btn'),
        nextArrow: $('.slider-mobile-btn .next-btn'),
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
            }
        }]
    
    });
    
    $('.service-box-parent').mouseenter(function(){
        $('.service-box-parent').removeClass('active-service-box');
        $(this).addClass('active-service-box');
    })
    
    $('.aspectbox').mouseenter(function(){
        $('.aspectbox').removeClass('active-aspectbox');
        $(this).addClass('active-aspectbox');
    })
    
    $('.testimonials-page-testimonials-items .testimonial-box').mouseenter(function(){
        $('.testimonial-box').removeClass('active-testimonial-box');
        $(this).addClass('active-testimonial-box');
    })
    
    $('.package-item').mouseenter(function(){
        $('.package-item').removeClass('active-package');
        $(this).addClass('active-package');
    })
    
    // Services-line-Down

    var items = $(".text-container-text h3"),
    timelineHeight = $(".line-center-all-service-items").height(),
    greyLine = $('.line-center-all-service-items'),
    lineToDraw = $('.line-drawn');
    
    if(lineToDraw.length) {
      $(window).on('scroll', function () {
    
        var redLineHeight = lineToDraw.height(),
        greyLineHeight = greyLine.height(),
        windowDistance = $(window).scrollTop(),
        windowHeight = $(window).height() / 2,
        timelineDistance = $(".services-we-provide").offset().top;
    
        if(windowDistance >= timelineDistance - windowHeight) {
          line = windowDistance - timelineDistance + windowHeight;
    
          if(line <= greyLineHeight) {
            lineToDraw.css({
              'height' : line + 12 + 'px'
            });
          }
        }
    
        var bottom = lineToDraw.offset().top + lineToDraw.outerHeight(true);
        items.each(function(index){
          var circlePosition = $(this).offset();
    
          if(bottom > circlePosition.top) {				
            $(this).addClass('in-view');
          } else {
            $(this).removeClass('in-view');
          }
        });	
      });
    }
    
    

    // Services-line-Down
    
    // Small Menu
    
});






function resizeonloadslider() {
  if (window.innerWidth <= 991) { 
        jQuery('.packages-row').on('afterChange', function(event, slick,currentSlide, nextSlide){
            $('.packages-row .package-item').removeClass('active-package');
            $('.packages-row .slick-active .package-item').addClass('active-package');
        });
        
        $('.btn-menu-small-screen').on('click',function(){
            $('.btn-menu-small-screen').toggleClass('active-submenu-icon');
            $('.links-columns > ul').toggleClass('active-submenu');
            $('body').toggleClass('body-overflow');
        });
        $('.services-dropdown-anchor > a').on('click',function(){
            
            $(this).siblings('.services-dropdown').addClass('open-services-dropdown');
        });
        $('.close-dropdownonsmallscreen button').on('click',function(){
            $(this).closest('.services-dropdown').removeClass('open-services-dropdown');
        });
        $(document).mouseup(function(e){
           var menu = $('.links-columns ul, .btn-menu-small-screen');
           if (!menu.is(e.target) // The target of the click isn't the container.
           && menu.has(e.target).length === 0) // Nor a child element of the container
           {
             $('.btn-menu-small-screen').removeClass('active-submenu-icon');
             $('.links-columns > ul').removeClass('active-submenu');
             $('body').removeClass('body-overflow');
           }
        });
        $('.packages-row').slick({
          dots: false,
          arrows:false,
          infinite: true,
          speed: 800,
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 5000,
          responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                  }
                }
            ]
        });
        
        $('.packages-row.just-two-package').filter('.slick-initialized').slick('unslick');
    }
  else{
    $('.packages-row').filter('.slick-initialized').slick('unslick');
  }
}

function resizeonloadslidertwopackage() {
    if (window.innerWidth <= 767) { 
        $('.packages-row.just-two-package').slick({
          dots: false,
          arrows:false,
          infinite: true,
          speed: 800,
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                  }
                }
            ]
        });
    }
    else{
      $('.packages-row.just-two-package').filter('.slick-initialized').slick('unslick');
    }
}

$(document).ready(resizeonloadslider);
$(document).ready(resizeonloadslidertwopackage);
window.onresize = resizeonloadslider;
window.onresize = resizeonloadslidertwopackage;


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 1500) {
        $(".chevron-up-icon").addClass("show");
    }
    else{
        $(".chevron-up-icon").removeClass("show");
    }
}); //missing );

$('.chevron-up-icon').on('click',function(){
    var body = $("html, body");
       body.stop().animate({scrollTop:0}, 00, 'swing', function() { 
    });
});

var FuncSliderPackage = function(){
    if (window.innerWidth<=767){
        
        $('.col-second-packages .row-services-packages').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
            arrows: false,
            responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
        
        $('.clients-testimonials').slick("setPosition", 0);
        
    }
    else{
        $('.col-second-packages .row-services-packages').slick('unslick');
        $('.clients-testimonials').slick("setPosition", 0);
    }
};

window.addEventListener("resize", FuncSliderPackage);
window.addEventListener("load", FuncSliderPackage);

$(".row-services-packages ul li").on("mouseover", function () {
    var onhoveringtext = $(this).text();
    $(this).attr('title', onhoveringtext);
});

$('.spl-services .btn-reg').on('click',function(){
   var servicenamespl = $(this).closest('.packages-all').find('h3').text();
   $('.modal-form .servicename').val(servicenamespl);
});

$('.spl-services .btn-reg').on('click',function(){
   var servicenamespl1 = $(this).closest('.packages-all').find('.same-font-sizing').text();
   $('.modal-form .serviceprice').val(servicenamespl1);
});







$('#singupmodal,#videomodal').on('show.bs.modal', function() {
    var $scrollElement = $('<div>').css({
      width: '100px',
      height: '100px',
      overflow: 'scroll',
      visibility: 'hidden'
    }).appendTo('body');
    var scrollbarWidth = $scrollElement[0].offsetWidth - $scrollElement[0].clientWidth;
    $scrollElement.remove();
    $('header').css('padding-right',scrollbarWidth);
});



$('#singupmodal,#videomodal').on('hidden.bs.modal', function() {
    $('header').css('padding-right','0');
});


$('.btn-jit-services').on('click',function () {
    var pricejit = $(this).siblings('.price-jit').find('h2').text();
    var nameofservicejit = $(this).siblings('h4').text();
    $('.form1 .servicename').val(nameofservicejit);
    $('.form1 .serviceprice').val(pricejit);
})

$(document).ready(function () {
    var header = $("#top");
    var lastScrollTop = 0;
    
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > lastScrollTop) {
            header.addClass("fixed-header");
        } else {
            if (scrollTop === 0) {
                header.removeClass("fixed-header");
            } 
        }

        lastScrollTop = scrollTop;
    });
});



