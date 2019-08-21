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
    var $imgZoombg = $('.img_lightbox');
    var $imgZoomClose = $imgZoombg.find('.lightbox_close');


    $imgZoom.click(function(e){
        e.preventDefault();
        var $newImg = $(this).parents('div').siblings('a').find('img').attr('data-lightbox');
        $('#lightbox_img').attr('src', $newImg);
        $('.img_lightbox').addClass('opa');
    });

    $imgZoomClose.click(function(e){
        e.preventDefault();
        $('.img_lightbox').removeClass('opa');
    }); 

    $imgZoombg.click(function(){
        $('.img_lightbox').removeClass('opa');
    });// 상품이미지 확대, 닫기


    var $barket = $('.barket');
    var $barketBox = $('.cart_box');
    var $barketBoxName = $barketBox.find('h2');
    var $barketBoxImg = $barketBox.find('img');
    var $barketDescName = $barketBox.find('.cart_desc h3');

    $barket.click(function(e){
        e.preventDefault();
        var $barketBoxNewImg = $(this).parents('div').siblings('a').find('img').attr('data-lightbox');
        $barketBoxImg.attr('src', $barketBoxNewImg);
        var $comwrap = $(this).parents('div.com_wrap');
        var $comwrapName = $comwrap.find('h2');
        var $comwrapNameLoad = $comwrapName.text();
        var $barketCategoryName = $(this).parent('div').attr('data-title');
        var $price = $(this).parent('div').siblings('div').find('span');
        var $dataPrice = $price.attr('data-price');
        var $barketPrice = $('.cart_desc .price').text($dataPrice); // 제품가격을 장바구니박스 가격에 넣어주기
        
        $barketBoxName.text($barketCategoryName); // 상품카테고리 타이틀 넣어주기
        $barketDescName.text('< ' + $comwrapNameLoad + ' >'); // 상품이름 넣어주기

        var $optionBtn = $('.option_count').find('span');
        var $optionInput = $('.option_count').find('input');
        var $targetTotal = $('.cart_desc .price');

        $optionBtn.click(function(){
            var currentCount = parseInt($optionInput.val());

            if($(this).hasClass('plus')){  
                $optionInput.val(++currentCount);
            }else{
                if(currentCount > 1){
                    $optionInput.val(--currentCount);
                }
            }

            var $total = (currentCount * $dataPrice).toLocaleString('en');;
            $targetTotal.text($total);

            console.log($barketPrice);
        });

    });
});