$(document).ready(function(){

    //loading-page
    $(window).on('load',function(){

        $('.loading-page').fadeOut(2000)

    })


    //header height
    $(function(){
        $('.header').height($(window).height());

        $(window).resize(function(){

            $('.header').height($(window).height());

        })

    })

    //venobox
    $(document).ready(function(){
        $('.venobox').venobox({
            bgcolor: '',
            overlayColor: 'rgba(6, 12, 34, 0.85)',
            closeBackground: '',
            closeColor: '#fff'
        }); 
    });

    //nav color
    $(window).scroll(function(){

        if($(window).scrollTop() >= 200){
            $('nav').css({
                'background-color' : '#060d22',
                'padding' : '5px 0'
            })
        }
        else{
            $('nav').css({
                'background-color' : 'transparent',
                'padding' : '15px 0'
            })
        }

    })
    if($(window).scrollTop() >= 200){
        $('nav').css({
            'background-color' : '#060d22',
            'padding' : '5px 0'
        })
    }
    else{
        $('nav').css({
            'background-color' : 'transparent',
            'padding' : '15px 0'
        })
    }


    //testimonials

    $('.testimonials .buttons .btn').on('click',function(){

        $(this).addClass('active').siblings().removeClass('active');

        $('#' + $(this).data('click')).siblings().fadeOut(200,function(){

            $('#' + $(this).data('click')).siblings().removeClass('active')
        })

        $('#' + $(this).data('click')).delay(200).fadeIn(200,function(){
            $('#' + $(this).data('click')).addClass('active')
        })

    })

      // Gallery carousel (uses the Owl Carousel library)
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        center:true,
        responsive: { 0: { items: 1 }, 768: { items: 3 }, 992: { items: 4 }, 1200: {items: 5}
        }
    });

    //faq
    $('.faq .question i').on('click',function(){

        $(this).parent().parent().find('p').slideToggle(300);

        if($(this).hasClass('fa-plus-circle')){

            $(this).attr('class','fa fa-minus-circle');
            $(this).css('color','#f8234a');
            $(this).parent().find('h4').css('color','#f8234a');

        }else{
            $(this).attr('class','fa fa-plus-circle');
            $(this).css('color','#000');
            $(this).parent().find('h4').css('color','#000');
        }

    })
   
    //button up
    $(window).scroll(function(){

        if($(this).scrollTop() >= 1000){

            $('.up').fadeIn(1000);
        }
        else{

            $('.up').fadeOut(1000);
        }
    })

    //click on button up
    $('.up').on('click',function(){
        
        $('html, body').animate({
            scrollTop : 0
        },1500);
        
    })

    //smooth scroll (navbar)
    $('nav li a').on('click',function(e){

        e.preventDefault();

        $('html, body').animate({

            scrollTop : $('#' + $(this).data('scroll')).offset().top -130

        },1000)
    })

    //aos
    $(function() {

        AOS.init();

        window.addEventListener('load', AOS.refresh);
    });


});