console.log('So are the script files!!!');
//$('h4').hide();
/*$(window).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 800) {
        $('h4').fadeIn();
    } else {
        $('h4').fadeOut();
    }

});*/
//$("#hide").hide();
$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $("#hide").fadeIn("slow");
    }
    else {
        $("#hide").fadeOut("fast");
    }
});