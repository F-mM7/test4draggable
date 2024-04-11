$(function () {
  $(".piece").draggable({
    scroll: false,
    grid: [width, width],
    containment: "#box",
  });
});

const N = 12;

//append piece
for (let i = 0; i < N; ++i)
  $("<div>", { class: "piece", text: i + 1 }).appendTo("#box");

//sizing
let width = Math.floor(
  Math.min($(window).width(), $(window).height()) / (N + 1)
);
$(".piece").css({ width: width, height: width, "font-size": width * 0.7 });
$("#box").css({ width: width * N, height: width * N });
