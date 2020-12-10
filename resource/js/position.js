$("[name='checkbox']").click("active", function () {
  if ($(this).hasClass("checkbox")) {
    $(this).removeClass("checkbox").text("");
  } else {
    $(this).addClass("checkbox").text("√");
  }
});
