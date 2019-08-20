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
    var $asideBtn = $('.aside_ac');
    
    $categorySub.slideUp();
    $categorySub.hide();

    $asideBtn.click(function(e){
        e.preventDefault();
        $(this).parent().toggleClass('active');

        if($(this).parent().hasClass('active')){
            $(this).parent().next().slideDown();
            
        }else{
            $(this).parent().next().slideUp();
        }
        
    }); // aside 서브메뉴

    $('.main_search').click(function(e){
        e.preventDefault();
        $('.main_search_form').addClass('on');
    }); // 검색 폼

    var $asideSearch = $('.aside_top_right a');

    $asideSearch.click(function(e){
        e.preventDefault();
        $('.aside_search_form').addClass('on');
    }); // 사이드 검색 폼


    var $upDownBtn = $('.updownBtn');
    var $upBtn = $upDownBtn.find('.upBtn');
    var $downBtn = $upDownBtn.find('.downBtn');

    $upBtn.click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({scrollTop:0}, 400);
    });
    $downBtn.click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({scrollTop:$(document).height()},400);

    }); // 탑 바텀 버튼


    var $imgZoom = $('.zoom');
    var $imgZoomClose = $('.img_lightbox .lightbox_close');


    $imgZoom.click(function(e){
        e.preventDefault();
        var $newImg = $(this).parents('div').siblings('a').find('img').attr('data-lightbox')
        $('#lightbox_img').attr('src', $newImg);
        $('.img_lightbox').addClass('opa');
    });

    $imgZoomClose.click(function(e){
        e.preventDefault();
        $('.img_lightbox').removeClass('opa');
    }); // 상품이미지 확대

});