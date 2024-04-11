$(function () {
  $(".piece").draggable({
    // revert: true,
    scroll: false,
    grid: [30, 30],
    // snap: true,
    // snapTolerance: 20,
    containment: "#box",
  });
});
