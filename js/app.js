'use strict';

/*
 * A Design by GraphBerry
 * Author: GraphBerry
 * Author URL: http://graphberry.com
 * License: http://graphberry.com/pages/license
 */



//Calculate full with of jumbotron.
 function homeFullScreen() {

    var homeSection = $('.home');
    var windowHeight =( $(window).outerHeight()/3) * 2;

    if (homeSection.hasClass('home-fullscreen')) {

        $('.home-fullscreen').css('height', windowHeight);
    }
}

 //Load details of single project from portfolio.
 function openProject() {

    var portfolioItem = $('.portfolio-item  a');
    var singleProject = $('#single-project');

    portfolioItem.click(function () {

        var link = $(this).attr('href');
        $('html, body').animate({
            scrollTop: singleProject.offset().top - 30
        }, 500);

        singleProject.empty();

        setTimeout(function () {
            singleProject.load(link, function (response, status) {
                if (status === "error") {
                    alert("An error");
                } else {
                    singleProject.slideDown(500);

                    var closeProject = $('#close-project');
                    closeProject.on('click', function () {
                        singleProject.slideUp(500);
                        setTimeout(function () {

                            singleProject.empty();
                        }, 500);
                    });
                }
            });
        }, 500);
        return false;
    });
}
//Initialization
$(window).load(function () {
    openProject();
    homeFullScreen();

    smoothScroll.init();
});


//What happen on window resize
$(window).resize(function () {
    homeFullScreen();
});
