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

$("#salad_button").click(function () {
  $("#salad").fadeIn()
  $("html body").addClass("locked");
  $("#overlay").fadeIn();
});
$("#salad_close").click(function () {
  $("#salad").fadeOut();
  $("html body").removeClass("locked");
  $("#overlay").fadeOut();
});

$("#potatoes_button").click(function () {
  $("#potatoes").fadeIn();
  $("html body").addClass("locked");
  $("#overlay").fadeIn();
});
$("#potatoes_close").click(function () {
  $("#potatoes").fadeOut();
  $("html body").removeClass("locked");
  $("#overlay").fadeOut();
});

