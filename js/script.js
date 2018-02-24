$(document).ready(function () {

    // Add smooth scrolling on all links inside the navbar
    $(".navbar a, footer a, .jumbotron a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1200, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });

        } // End if

    });

    $(window).scroll(function() {
        // checks if window is scrolled more than viewport, adds/removes solid class to navbar and changes links color
        if($(this).scrollTop() > 90) { 
            $('.navbar').addClass('solid');
            $('.navbar a').addClass('gray-text');
        } else {
            $('.navbar').removeClass('solid');
            $('.navbar a').removeClass('gray-text');
        }
      });

    // stop video on modal close
    $('.modal').on('hidden.bs.modal', function () {
        // find iframe of element called event
        var $this = $(this).find('iframe'),
            // store src attribute
            tempSrc = $this.attr('src');
        // clear src
        $this.attr('src', "");
        // restore src
        $this.attr('src', tempSrc);
    });

    // initialize filterizr
    var filterizd = $('.filtr-container').filterizr({
        //options object
    });

    $("div[id^='img']").each(function () {

        var currentModal = $(this);

        //click next
        currentModal.find('.btn-next').click(function () {
            currentModal.modal('hide');
            currentModal.closest("div[id^='img']").nextAll("div[id^='img']").first().modal('show');
        });

        //click prev
        currentModal.find('.btn-prev').click(function () {
            currentModal.modal('hide');
            currentModal.closest("div[id^='img']").prevAll("div[id^='img']").first().modal('show');
        });

    });

    //Simple filter controls
    $('.simplefilter li').click(function() {
        $('.simplefilter li').removeClass('active');
        $(this).addClass('active');
    });

});