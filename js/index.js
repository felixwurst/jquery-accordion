
$(document).ready(function () {

    $('.collapse > h2 > span').click(function (e) {
        e.preventDefault();

        // for the case of a click on a collapsed section(+):
        // slide all sections up & give them a plus-sign &
        // slide the clicked section down & give it a minus-sign
        if ($(this).text() == '+') {
            $('.collapse > div').slideUp();
            $('.collapse > h2 > span').text('+');
            $(this).parent().next().slideDown();
            $(this).text('-');
            
        // for the case of a click on an opened section(-):
        // slide the clicked section up & give it a plus-sign
        } else {
            $(this).parent().next().slideUp();
            $(this).text('+');
        }

    });
    
});