$(document).ready(function(){
  $("form#measurements").submit(function(event) {
    event.preventDefault();
    // debugger;
    var sideOneInput = parseInt($("input#side1").val());
    var sideTwoInput = parseInt($("input#side2").val());
    var sideThreeInput = parseInt($("input#side3").val());

    if (sideOneInput === sideTwoInput && sideOneInput === sideThreeInput) {
      $("#equilateral").show();
    }
  });
});
