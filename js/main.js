//commit

$(".kunstner").click(function(){
  $(this).toggleClass("k-aktiv");
})
//event-click for navigation
$("nav div").click(function(){
  $("nav ul").toggleClass("open");
});
$("nav ul li a").click(function(){
  if ($("nav ul").hasClass("open")) {
    $("nav ul").removeClass("open");
  }
})


$(".udvid").click(function(){
  var numItems = $('.gallery div').length - 1;
  var heightItems = numItems * 36.8 + "vh";
  var attr = $(".gallery").attr('style');
  if (typeof attr !== typeof undefined && attr !== false) {
    $(".gallery").removeAttr("style", "height");
    $(".udvid").toggleClass("luk");
    console.log("shiet")
  } else {
  $(".udvid").toggleClass("luk");
    $(".gallery").css("height", heightItems);
  }
})

$(window).scroll(function(){
  stickyScroll()});

  var navbar = $("nav");
  var sticky = navbar.offsetTop;

  function stickyScroll(){
    if (window.pageYOffset >= sticky) {
      $("nav").addClass("sticky")
    } else {
      $("nav").removeClass("sticky");
    }
  };
  window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$(document).ready(function(){
$('.slider').slick({
  lazyLoad: 'ondemand',
  infinite: true,
  dots: true,
  arrows: false
});


});
