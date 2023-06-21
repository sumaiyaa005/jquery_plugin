$(document).ready(function () {
  $(".some-list").simpleLoadMore({
    item: "div",
    count: 1,
    easing: "fade",
    easingDuration: 400,
    btnHTML: '<a href="#" class="load-more__btn">Load More</a>',
    // Set button's custom text here. Use placeholders {showing} and {total} for showing items counter.
    // Where {showing} shows the current number of items displaying and {total} shows the total items one instance has.
  });
  // preloader
  $(".js-preloader").preloadinator({
    minTime: 2000,
    scroll: false,
    animation: "fadeOut",
    animationDuration: 400,
  });
});
