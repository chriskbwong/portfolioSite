$("#fullpage").fullpage({
  sectionsColor: ["#344557", "#395B7A", "#3E729E", "#4389C1"],
  anchors: ["hero", "about-myself", "timeline", "skills"],
  fixedElements: "#footer",
  slidesNavigation: true
});
$(".hero .content .sutro-photo")
  .delay(500)
  .animate(
    {
      opacity: "1",
      top: "50%"
    },
    1000
  );
$(".about-myself .content h2")
  .delay(500)
  .animate(
    {
      opacity: "1",
      top: "50%"
    },
    1000
  );
