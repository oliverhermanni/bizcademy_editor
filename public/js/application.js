$(function() {
  $(".custom-checkbox label").click(function() {
    var checkbox = $(this).prev("input");
    console.log(checkbox);
    if (checkbox.attr("checked") === "checked") {
      checkbox.attr("checked","");
    } else {
      checkbox.attr("checked","checked");
    }
  });
});