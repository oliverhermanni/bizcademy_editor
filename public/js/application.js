$(function() {
  $(".custom-checkbox label").click(function() {
    var checkbox = $(this).prev("input");

    if (checkbox.attr("checked") === "checked") {
      checkbox.attr("checked",false);
    } else {
      checkbox.attr("checked",true);
    }
  });
});