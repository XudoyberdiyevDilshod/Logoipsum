// dark mode

var elBody = document.querySelector("body");
var elModebtn = document.querySelector(".btn-mode");

elModebtn.addEventListener("click", function () {
  elBody.classList.toggle("dark");
});

// modal

var openBtn = document.querySelector(".open-btn");
var overlay = document.querySelector(".overlay");
var burgerBtn = document.querySelector(".burger-btn");
var closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", () => {
  overlay.classList.add("overlay-show");
});

function removeClass() {
  overlay.classList.remove("overlay-show");
}

closeBtn.addEventListener("click", removeClass);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (overlay.classList.contains("overlay-show")) {
      removeClass();
    }
  }
});


// 
var overlay_m = document.querySelector(".overlay-m");
var burgerBtn_m = document.querySelector(".burger-btn-m");
var closeBtn = document.querySelector(".close-btn-m");

burgerBtn_m.addEventListener("click", () => {
  overlay_m.classList.add("overlay--show");
});

closeBtn.addEventListener("click", () => {
  overlay_m.classList.remove("overlay--show");
});

var str = "abcd";