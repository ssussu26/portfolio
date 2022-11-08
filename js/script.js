// dom 로드시 실행
$(document).ready(function () {


    // 모바일 메뉴 관련
    let mbNav = $('.mb-nav');
    let mbBt = $('.mb-bt');
    mbBt.click(function () {
        mbNav.toggleClass('mb-nav-active');
        // 구글 아이콘 폰트일때만 해당합니다.
        // 만약에 mb-nav-active 가 적용이 되었다면
        // mbBt 에 span 글자를 close 로 변경
        // 그렇지 않다면 
        // mbBt 에 span 글자를 menu 로 변경

        if (mbNav.hasClass('mb-nav-active')) {
            mbBt.find('span').text("close");
        } else {
            mbBt.find('span').text("menu");
        }

    });
    // 화면(viewport)의 너비를 체크해서
    // 모바일 메뉴 처리
    $(window).resize(function () {
        // 화면의 너비를 체크한다.
        let winW = $(window).width();
        // 만약에 너비가 620 보다 크다면
        if (winW > 620) {
            mbNav.removeClass('mb-nav-active');
            mbBt.find('span').text("menu");
        }
    });

    // 스킬관련    
    let bar_html = new ProgressBar.Circle(html, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#015c97',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    let bar_css = new ProgressBar.Circle(css, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#015c97',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    let bar_js = new ProgressBar.Circle(js, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#015c97',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    let bar_jquery = new ProgressBar.Circle(jquery, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#015c97',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });

    let bar_figma = new ProgressBar.Circle(figma, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#015c97',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });

    let bar_photoshop = new ProgressBar.Circle(photoshop, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#015c97',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    let bar_illust = new ProgressBar.Circle(illust, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#015c97',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    let bar_git = new ProgressBar.Circle(git, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#015c97',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    let bar_word = new ProgressBar.Circle(word, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#015c97',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });
    let bar_excel = new ProgressBar.Circle(excel, {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 1400,
        color: '#015c97',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: null
    });

    // 스크롤시 메뉴 포커스 이동
    // 메뉴 대상
    let mbGnbATag = $(".mb-gnb a");
    let gnbATag = $(".gnb a");
    // 체크되어질 Div 요소 
    let divTag = [
        $("#wrap"),
        $("#profile"),
        $("#skill"),
        $("#portfolio"),
        $("#life"),
        $("#vision"),
        $("#contact")
    ];
    // 포커스 클래스 명
    let activeColor = "menu-active-color";
    // 포커스 될 번호 
    let activeNum = 0;
    mbGnbATag.eq(activeNum).addClass(activeColor);
    gnbATag.eq(activeNum).addClass(activeColor);

    $.each(divTag, function (index) {
        new Waypoint({
            element: $(this),
            handler: function (direction) {
                if (direction == 'down') {

                    // 일단 다 ~~~ 지우고 보자.
                    mbGnbATag.removeClass(activeColor);
                    gnbATag.removeClass(activeColor);

                    // 모바일 메뉴 포커스
                    mbGnbATag.eq(index).addClass(activeColor);
                    // 메뉴 포커스
                    gnbATag.eq(index).addClass(activeColor);

                } else if (direction == 'up') {
                    // 일단 다 ~~~ 지우고 보자.
                    mbGnbATag.removeClass(activeColor);
                    gnbATag.removeClass(activeColor);

                    // 모바일 메뉴 포커스
                    mbGnbATag.eq(index - 1).addClass(activeColor);
                    // 메뉴 포커스
                    gnbATag.eq(index - 1).addClass(activeColor);

                }
            },
            offset: '50%'
        });
    });

    // waypoint 로 스크롤 진행 후 실행      
    new Waypoint({
        element: $('#skill'),
        handler: function (direction) {
            if (direction == 'down') {
                bar_html.animate(1.0);
                bar_css.animate(1.0);
                bar_js.animate(0.5);
                bar_jquery.animate(0.6);
                bar_figma.animate(0.8);
                bar_photoshop.animate(1.0);
                bar_illust.animate(1.0);
                bar_git.animate(0.7);
                bar_word.animate(1.0);
                bar_excel.animate(0.7);
            } else if (direction == 'up') {
                bar_html.animate(0);
                bar_css.animate(0);
                bar_js.animate(0);
                bar_jquery.animate(0);
                bar_figma.animate(0);
                bar_photoshop.animate(0);
                bar_illust.animate(0);
                bar_git.animate(0);
                bar_word.animate(0);
                bar_excel.animate(0);
            }
        },
        offset: '50%'
    });

    // 고정 메뉴 기능
    new Waypoint({
        element: $('#profile'),
        handler: function (direction) {
            if (direction == 'down') {
                $('.fix-menu').addClass('fix-menu-active')
            } else if (direction == 'up') {
                $('.fix-menu').removeClass('fix-menu-active')
            }
        },
        offset: '0%'
    });

    //nice 스크롤이 최초 화면에 출력이 될때 작동
    $(".ns1").niceScroll();
    $(".ns2").niceScroll();
//반응형일때 
    $(window).resize(function () {
        $(".ns1").getNiceScroll().resize();
        $(".ns2").getNiceScroll().resize();
    })
    // 메뉴 클릭시 부드럽게 목표로 이동
    let mbGnbA = $(".mb-gnb a");
    let gnbA = $(".gnb a");
    $.each(mbGnbA, function () {
        $(this).click(function (event) {
            // a 태그의 기능 중 href 막아야해요.
            event.preventDefault();

            // 가야할 위치를 파악한다.
            // attr 은 attribute(속성을 말함)
            // a href="go"   attr("href")
            // a class="go"   attr("class")
            //< href="#wrap"> attr("href")
            // #아이디
            let target = $(this).attr("href");
            let posY = $(target).offset().top;
            //자연스러운 움직임을 위해서 애니메이션
            //즉시 중지하고 다시 실행한다.
            $('html, body').stop().animate({
                scrollTop: posY
            }, 1000);
        });
    });
    $.each(gnbA, function () {
        $(this).click(function (event) {
            // a 태그의 기능 중 href 막아야해요.
            event.preventDefault();
            // 가야할 위치를 파악한다.
            let target = $(this).attr("href");
            let posY = $(target).offset().top;
            $('html, body').animate({
                scrollTop: posY
            }, 1000);
        });
    });

    // 버튼 눌러서 포트폴리오로 이동하기
    let visualIntroBt = $('.visual-intro-bt');
    visualIntroBt.click(function () {
        let posY = $('#portfolio').offset().top;
        $('html, body').stop().animate({
            scrollTop: posY
        }, 1000);
    });

    // 위로가기 눌러서 최상위로 이동하기
    let goTop = $('.gotop');
    goTop.click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000);
    });

    // AOS 적용
    AOS.init();
});


// 멀티미디어 리소스 다운로드 시 실행
window.onload = function () {


    // 라이프 관련
    let swLifeSlide = new Swiper('.sw-life', {
        loop: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        speed: 800,
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            890: {
                slidesPerView: 2,
            },
            1300: {
                slidesPerView: 3,
            },
        },
    });
    let swLife = $('.sw-life');
    swLife.mouseenter(function () {
        swLifeSlide.autoplay.stop();
    });
    swLife.mouseleave(function () {
        swLifeSlide.autoplay.start();
    });
}