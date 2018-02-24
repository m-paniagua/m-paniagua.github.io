$(document).ready(function () {
    $('#fullpage').fullpage({
        // navigation: true,
        // navigationPosition: 'right',
        // navigationTooltips: ['Home', 'About', 'Projects', 'Gallery', 'Contact']
        // anchors: ['about', 'projects', 'gallery', 'contact']
        scrollingSpeed: 1000,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 2000,
        anchors: ['go-home', 'go-about', 'go-projects', 'go-gallery', 'go-contact'],
        menu: '#nav',
        onLeave: function (index, nextIndex, direction) {
            // make navbar solid color all sections except first
            if (nextIndex > 1) {
                $('.navbar').addClass('solid');
                $('.navbar a').addClass('gray-text');
            } else {
                $('.navbar').removeClass('solid');
                $('.navbar a').removeClass('gray-text');
            }
        }
        // responsiveWidth: 992,
    });

    

    // $('#openbtn').click(function (e) {
    //     e.stopPropagation();
    //     $('#mySidenav').css('width', '350px');
    // });

    // $('#closebtn').click(function (e) {
    //     $('#mySidenav').css('width', '0');
    //     e.stopPropagation();
    // });

    // $('#fullpage').click(function (e) {
    //     $('#mySidenav').css('width', '0');
    // });
});