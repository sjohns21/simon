$(function(){
  var simonArr=[];
  simon();
  function simon(){
    var target=Math.floor(Math.random()*4);
    if (target==0){
      simonArr.push("a")
    }
    else if (target==1) {
      simonArr.push("b")
    }
    else if (target==2) {
      simonArr.push("c")
    }
    else if (target==3) {
      simonArr.push("d")
    }
    simonDemo();
    player();
    // console.log(simonArr);
  }
  function simonDemo(){
    for (var i = 0; i < simonArr.length; i++) {
      var int = setInterval(function () {
        console.log(i+';'+simonArr[i-1]);
        switch(simonArr[i-1]){
          case "a":
          $("#a").css("backgroundColor","blue")
          console.log('a');
          break;
          case "b":
          $("#b").css("backgroundColor","red")
          break;
          case "c":
          $("#c").css("backgroundColor","green")
          break;
          case "d":
          $("#d").css("backgroundColor","orange")
          break;
        }
      }, 1000)

    };
    //

  }
  function player(){

  }
});
