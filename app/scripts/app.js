$(() => {
  // your code goes here
  $('.form').submit(function (e) {
    e.preventDefault();

    var font = $(this).find("[name='font']").val();
    var script = $(this).find("[name='typekit']").val();
    var text = $(this).find("[name='text']").val();
    var weight = $(this).find("[name='weight']").val();
    var style = $(this).find("[name='style']").val();

    if (font.length > 0) {
      // Если все ок, показываем форму
      $('.testzone').show(0, function () {
        $(this).addClass('testzone_active');
        $(this).velocity("scroll", { duration: 1000, offset: -50, easing: "ease-in-out" })
      });

      $(".testzone__textblock").text(text);

      $(".testzone__text").css({
        "font-family" : font,
        "font-weight" : weight,
        "font-style" : style
      });

      $(".scriptplace").html(script);

    } else {
      // Фокус в поле ввода
      $(this).find("[name='font']").focus();
    }

    return false;
  });
});
