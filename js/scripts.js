$(document).ready(function(){
  $("form#measurements").submit(function(event) {
    event.preventDefault();
    // debugger;
    var sideOneInput = parseInt($("input#side1").val());
    var sideTwoInput = parseInt($("input#side2").val());
    var sideThreeInput = parseInt($("input#side3").val());

    if ((sideOneInput + sideTwoInput) < sideThreeInput  || (sideOneInput + sideThreeInput) < sideTwoInput || (sideTwoInput + sideThreeInput) < sideOneInput) {
      $("#not").show();
      $("#equilateral").hide();
      $("#scalene").hide();
      $("#isosceles").hide();
    } else if (sideOneInput === sideTwoInput && sideOneInput === sideThreeInput) {
      $("#equilateral").show();
      $("#scalene").hide();
      $("#not").hide();
      $("#isosceles").hide();
    } else if (sideOneInput === sideTwoInput || sideOneInput === sideThreeInput || sideTwoInput === sideThreeInput) {
      $("#isosceles").show();
      $("#equilateral").hide();
      $("#scalene").hide();
      $("#not").hide();
    } else {
      $("#scalene").show();
      $("#equilateral").hide();
      $("#not").hide();
      $("#isosceles").hide();
    }
  });
});
