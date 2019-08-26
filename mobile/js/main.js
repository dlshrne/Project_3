$(function(){
    if($('.main_banner_slides').length){
        $('.main_banner_slides').bxSlider(); // 배너슬라이드
    };
    
    if($('.main_nav').length){
        var swiper = new Swiper('.main_nav', {
            slidesPerView: 3,
            spaceBetween: 0,
            freeMode: true,
            pagination: {
              clickable: true,
            },
          }); 
    };// 네비게이션 스와이프
   

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

    if($('.aside_menus').length){
        $('.aside_menus').tabs(); // aside 탭
    }
    

    var $categorySub = $('.category_sub');
    var $asideBtn = $('.aside_ac');
    var $asideName = $('.aside_menus_title a:first-child');
    
    $categorySub.slideUp();
    $categorySub.hide();

    $asideBtn.click(function(e){
        e.preventDefault();     
        $(this).parents('li').toggleClass('active');
        
        if($(this).parents('li').hasClass('active')){
            $(this).parent().next().slideDown();
            
        }else{
            $(this).parent().next().slideUp();
        }
        
    });

    $asideName.click(function(e){
        e.preventDefault();
        $(this).parents('li').toggleClass('active');

        if($(this).parents('li').hasClass('active')){
            $(this).parent().next().slideDown();
            
        }else{
            $(this).parent().next().slideUp();
        }
    }); // aside 서브메뉴
    
    // aside 서브메뉴

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
        $('.cart_box').addClass('click');
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
    $('.cart_box_close').click(function(){
        $('.cart_box').removeClass('click');
    }); // 장바구니 팝업


    var $loginBtn = $('.login_btn');
    var $loginInpit = $('.login_password_form input');


    $loginBtn.click(function(){
        $loginInpit.each(function(){
            $value = $(this).val();
            if(!$value){
                $(this).parents('div').addClass('error');
                $(this).parents('div').siblings().addClass('error');
            };

        });
        var $errorCount = $('.error').length;
        if($errorCount > 0){
            $loginBtn.prop('disabled', true);
        }
    });

    $loginInpit.click(function(){
        $(this).attr('placeholder', '');
        $(this).parents('div').removeClass('error');
        $(this).parents('div').siblings().removeClass('error');
        $loginBtn.prop('disabled', false);
    }); // 로그인 오류


    var $pwDelInput = $('.pw_del input');
    
    $pwDelInput.on("propertychange change keyup paste input",function(){
        $('.text_del').addClass('change');
        $('.pw_del_placeholer').addClass('change');
    }); // 텍스트 입력시 텍스트지우기 버튼생성 및 placeholder 지우기
    
    $('.text_del').click(function(){
        $pwDelInput.val('');
        $('.text_del').removeClass('change');
        $('.pw_del_placeholer').removeClass('change');
    }); // 텍스트 지우기 버튼 클릭 시 input 입력 값 초기화 및 placeholer 재생성

    $('#nick_input').keyup(function (e){
        var content = $(this).val();
        $('.nick_counter').html("("+content.length+"/15)");   

        if (content.length > 15){
            $(this).val(content.substring(0, 15));
            $('#counter').html("(0/15)");
        }
     
    }); //닉네임 글자수 실시간 카운팅
    
    var $view1 = $('.view1');
    var $view2 = $('.view2');
    var $view3 = $('.view3');



    $('.product_form li').click(function(e){
        e.preventDefault();
        $(this).siblings().removeClass('focus');
        $(this).addClass('focus');
    })
    
    $view1.click(function(e){
        e.preventDefault();
        $('.product').removeClass('v2');
        $('.product').removeClass('v3');
    });
    $view2.click(function(e){
        e.preventDefault();
        $('.product').removeClass('v3');
        $('.product').addClass('v2');
    });
    $view3.click(function(e){
        e.preventDefault();
        $('.product').removeClass('v2');
        $('.product').addClass('v3');
    });// 리스트 보기방식

    $('.tools_plus').click(function(e){
        e.preventDefault();
        $(this).parent().toggleClass('hi');
    }); // 문의 툴

    var $pickBtn = $('.pick_option').find('span');
    $pickBtn.click(function(){
        var $pickInput = $('.pick_option').find('input');
        var currentCount = parseInt($pickInput.val());

        if($(this).hasClass('plus')){  
            $pickInput.val(++currentCount);

        }else{
            if(currentCount > 1){
                $pickInput.val(--currentCount);
            }
        }
    }); // 제품상세 수량 인풋

    var $pickBar = $('.go_bar');
   
    $(window).scroll(function(){
        if($(window).scrollTop() > 600 ) {
            $pickBar.addClass('go');
        }
        else {
            $pickBar.removeClass('go');
        }
    }); // 픽 바 나타나게 사라지게


    if($('.detail_tabs').length){
        $('.detail_tabs').tabs(); // 상세페이지 하단 탭
    }
    

    var $tabNav = $('.info_title_name li');
    var $navfocus = $('.tabs_focus');

    $tabNav.click(function(){
        leftValue = $(this).position().left;
        $navfocus.stop().animate({left:leftValue});
        $navfocus.fadeIn();
    }); // 탭 포커스
    
    $tabNav.eq(0).trigger('click');
    
    var $imgColorChange = $('.colors').find('button');

    $imgColorChange.click(function(){
        var $ColorChange = $(this).attr('data-detail');
        $(this).parent().siblings('img').attr('src', $ColorChange);
    }); // 색상별로 이미지변경


    $('.go_bar a').click(function(e){
        e.preventDefault();
        $('.order_pop').addClass('pop');
        $('.black_bg').addClass('pop');
    });

    $('.order_pop_x').click(function(e){
        e.preventDefault();
        $('.order_pop').removeClass('pop');
        $('.black_bg').removeClass('pop');
    }); // 주문 팝업

    $(".all_choice").click(function(){
        $("input[name=chk]:checkbox").attr("checked", true);
        
    }) // 상품 전체선택

    var $inbarket = $('.inbarket_name');
    var $inbarketUp = $inbarket.find('a');

    $inbarketUp.click(function(e){
        e.preventDefault();
        $inbarket.parent().toggleClass('inupdown_p');

        if($inbarket.parent().hasClass('inupdown_p')){
            $('.inbarket_products').slideUp(300);
        }else {
            $('.inbarket_products').slideDown(300);
        }
    }); // 장바구니 상품 펼치기 접기

    $('.cart_in').click(function(){
        $('.barket_popup').addClass('ok');
    });
    $('.bar_barket').click(function(){
        $('.barket_popup').addClass('ok');
    });
    $('.noob').click(function(e){
        e.preventDefault();
        $('.barket_popup').removeClass('ok');
    }); // 장바구니 담긴 상품 확인 팝업

    var $listMenuFocus = $('.product_category li');

    $listMenuFocus.click(function(e){
        e.preventDefault();
        $(this).siblings().removeClass('focus');
        $(this).addClass('focus');
    }); // 리스트 페이지 목록 이름 포커스

    $('.page_back').click(function(e){
        e.preventDefault();
        history.go(-1);
        //history.go(1); history.back(); history.forwards(); 
    }); // 페이지 백

});