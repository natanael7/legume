$(".button").click(function () {
  $("#myForm").fadeIn();
  $("html body").addClass("locked");
  $("#overlay").fadeIn();
});
$(".button--close").click(function () {
  $("#myForm").fadeOut();
  $("html body").removeClass("locked");
  $("#overlay").fadeOut();
});


