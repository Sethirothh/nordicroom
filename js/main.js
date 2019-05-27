//commit

$(".kunstner").click(function(){
  if ($(window).width() < 1200) {
    $(this).toggleClass("k-aktiv");
}
else {
  console.log("Bigger than 1200px");
}
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
  } else {
  $(".udvid").toggleClass("luk");
    $(".gallery").css("height", heightItems);
  }
})
// Inspiration og kode fra: https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
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
// https://kenwheeler.github.io/slick/ - Plugin fra denne hjemmeside.
$(document).ready(function(){
$('.slider').slick({
  lazyLoad: 'ondemand',
  infinite: true,
  dots: true,
  arrows: false
});


});
