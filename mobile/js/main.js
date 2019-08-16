$(function(){

    $('.main_banner_slides').bxSlider(); // 배너슬라이드


    // var swiper = new Swiper('.main_nav', {
    //     slidesPerView: 5,
    //     spaceBetween: 30,
    //     pagination: {
    //         el: '.swiper-pagination',
    //         clickable: true,
    //     },
    // });

    $('.aside_toggle').click(function(ev){
        ev.preventDefault();
        $('.aside').addClass('open');
        $('body').addClass('aside_open');
    }); // 사이드 열기


    $('.aside_close').click(function(e){
        e.preventDefault();
        $('.aside').removeClass('open');
        $('body').removeClass('aside_open');
    }); // 사이드 닫기

    $('.aside_menus').tabs(); // aside 탭

    var $categorySub = $('.category_sub');
    var $asdieBtn = $('.aside_ac');
    var $asid_title = $('.aside_menus_title');
    
    $categorySub.slideUp();
    $categorySub.hide();

    $asdieBtn.click(function(e){
        e.preventDefault();
        $(this).parent().toggleClass('active');

        if($(this).parent().hasClass('active')){
            $(this).parent().next('ul').slideDown(500);
            
        }else{
            $(this).parent().next('ul').slideUp(500);
        }
        
    }); // aside 서브메뉴

    $('.main_search').click(function(e){
        e.preventDefault();
        $('.main_search_form').addClass('on');
    });





});