function knowMore() {
  document.getElementById("small").style.display = "block";

  document.getElementById("seeMore").style.display = "none";

  document.getElementById("seeLess").style.display = "block";
}
function knowLess() {
  document.getElementById("small").style.display = "none";

  document.getElementById("seeMore").style.display = "block";
  document.getElementById("seeLess").style.display = "none";
}
function knowMore1() {
  document.getElementById("small1").style.display = "block";

  document.getElementById("seeMore1").style.display = "none";

  document.getElementById("seeLess1").style.display = "block";
}
function knowLess1() {
  document.getElementById("small1").style.display = "none";

  document.getElementById("seeMore1").style.display = "block";
  document.getElementById("seeLess1").style.display = "none";
}
$(document).ready(function () {
  new WOW().init();
});
$("#disableNav").click(function () {
  $("#hide").hide();
});
$("#myModal").on("hidden.bs.modal", function () {
  $("#hide").show();
});
