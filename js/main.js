//commit

// $("a").click(function(){
//   return false;
// })
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
  var heightItems = numItems * 31.3 + "vh";
  console.log(heightItems);
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


$(document).ready(function(){
$('.slider').slick({
  lazyLoad: 'ondemand',
  infinite: true,
  dots: true,
  arrows: false
});
});
