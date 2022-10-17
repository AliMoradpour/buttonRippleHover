$(document).ready(function () {
  $(".btn").on("mouseenter", function (e) {
    var parrentOffset = $(this).offset(),
      relX = e.pageX - parrentOffset.left,
      relY = e.pageY - parrentOffset.top;
    $(this).find("span").css({
      top: relY,
      left: relX,
    });
  });
});
