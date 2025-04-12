const header1 = document.getElementById("section-1-header-id");
const slidBar = document.getElementById("div-boss-3-id");
const b1 = document.getElementById("div-boss-1-id");
const b2 = document.getElementById("div-boss-2-id");
const b4 = document.getElementById("div-boss-4-id");
const bg = document.getElementById("bod");
const unicHeader1 = document.getElementById("uniqe-header-1");
const unicHeader2 = document.getElementById("uniqe-header-2");

header1.addEventListener("click", function () {
  slidBar.style.cssText = " transform: translate(0px)";
  header1.style.cssText = " transform: translate(200px)";
  b1.style.cssText = "filter: blur(10px)";
  b2.style.cssText = "filter: blur(10px)";
  b4.style.cssText = "filter: blur(10px);";
});

unicHeader1.addEventListener("click", function () {
  slidBar.style.cssText = " transform: translate(-200px)";
  header1.style.cssText = " transform: translate(0px)";
  b1.style.cssText = "filter: blur(0px)";
  b2.style.cssText = "filter: blur(0px)";
  b4.style.cssText = "filter: blur(0px);";
});
