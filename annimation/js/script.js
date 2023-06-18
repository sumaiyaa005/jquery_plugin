wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animated", // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default
});
wow.init();
AOS.init({
  duration: 1000, // values from 0 to 3000, with step 50ms
});
