// countdown
var countdown = $("#countdown").countdown360({
  radius: 60,
  seconds: 100,
  fontColor: "#000000",
  strokeStyle: "rgb(237, 18, 200)",
  strokeWidth: undefined,
  fillStyle: "rgb(228, 208, 246)",
  autostart: false,
  onComplete: function () {
    console.log("done");
  },
});
countdown.start();

// jqu
$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});
// counter2
$(document).ready(function () {
  $(".counter2").each(function () {
    var $this = $(this),
      countTo = $this.attr("data-count");

    $({ countNum: $this.text() }).animate(
      {
        countNum: countTo,
      },

      {
        duration: 3000,
        easing: "linear",
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        },
      }
    );
  });
});
