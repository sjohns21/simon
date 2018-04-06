$(function(){
  var arr=['a','b','c']
  var index;
  // var int=setInterval(function () {
  console.log('a');
  $("#a").addClass('active');
  var remTarget="#a"
  setTimeout(remClass,1000)
  function remClass(){
    $(remTarget).removeClass("active")
  }
  // $("#b").slideUp(300).delay(500).fadeIn(400);
  // $("#a").animate({"backgroundColor":'green'},1000)
   // $("#c").addClass("active").delay(1000).removeClass("active");
console.log('b');
  // }, 1000);
  // clearInterval(int);
});
