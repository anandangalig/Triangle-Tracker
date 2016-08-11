$(document).ready(function(){
  $("form#measurements").submit(function(event) {
    event.preventDefault();
    // debugger;
    var sideOneInput = parseInt($("input#side1").val());
    var sideTwoInput = parseInt($("input#side2").val());
    var sideThreeInput = parseInt($("input#side3").val());
    var scaleneRule =

    if ((sideOneInput + sideTwoInput) < sideThreeInput || (sideOneInput + sideThreeInput) < sideTwoInput || (sideTwoInput + sideThreeInput) < sideOneInput) {
      $(".not").show();
    } else if (sideOneInput === sideTwoInput && sideOneInput === sideThreeInput) {
      $("#equilateral").show();
    } else if (sideOneInput === sideTwoInput || sideOneInput === sideThreeInput || sideTwoInput === sideThreeInput) {
      $("#isosceles").show();
    } else {
      $("#scalene").show();
    }
  });
});
