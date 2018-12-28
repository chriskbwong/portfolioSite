$("#fullpage").fullpage({
  sectionsColor: ["#344557", "#395B7A", "#3E729E", "#4389C1", "#48A0E5"],
  anchors: ["home", "bio", "experience", "skills", "projects"],
  fixedElements: "#footer"
});
$(".home .content .sutro-photo")
  .delay(500)
  .animate(
    {
      opacity: "1",
      top: "50%"
    },
    1000
  );
$(".bio .content h2")
  .delay(500)
  .animate(
    {
      opacity: "1",
      top: "50%"
    },
    1000
  );
