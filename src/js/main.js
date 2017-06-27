console.log('So are the script files!!!');

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $(".s1").fadeIn();
    } else {
      $(".s1").fadeOut();
    }
    if ($(document).scrollTop() > 100) {
      $(".s2").fadeIn();
    } else {
      $(".s2").fadeOut();
    }
    if ($(document).scrollTop() > 200) {
      $(".s3").fadeIn();
    } else {
      $(".s3").fadeOut();
    }
    if ($(document).scrollTop() > 300) {
      $(".s4").fadeIn();
    } else {
      $(".s4").fadeOut();
    }
    if ($(document).scrollTop() > 400) {
      $(".s5").fadeIn();
    } else {
      $(".s5").fadeOut();
    }
    if ($(document).scrollTop() > 500) {
      $(".s6").fadeIn();
    } else {
      $(".s6").fadeOut();
    }
    if ($(document).scrollTop() > 600) {
      $(".s7").fadeIn();
    } else {
      $(".s7").fadeOut();
    }
  });