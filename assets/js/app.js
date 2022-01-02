$(document).ready(function () {
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });
    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 1000,
            once: true
        });
    }
    // Slider  Show
    let slideIndex = 0;
    function slide() {
        let slideItem = document.getElementsByClassName("slide-item");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slideItem.length; i++) {
            slideItem[i].style.display = "none";
        }
        slideIndex++
        if (slideIndex > slideItem.length) {
            slideIndex = 1
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active-dot", "");
        }
        slideItem[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active-dot";
        setTimeout(slide, 2000)

    }
    // Faq
    var accItem = document.getElementsByClassName('accordionItem');
    var accHD = document.getElementsByClassName('accordionItemHeading');
    for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'accordionItem close';
        }
        if (itemClass == 'accordionItem close') {
            this.parentNode.className = 'accordionItem open';
        }
    }

    $(window).on('load', function () {
        aos_init();
        slide()
    });

});



