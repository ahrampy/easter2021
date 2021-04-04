const order = [
  "one",
  "eleven",
  "four",
  "fifteen",
  "eight",
  "nine",
  "fourteen",
  "twelve",
  "six",
  "seven",
  "sixteen",
  "thirteen",
  "five",
  "two",
  "three",
  "ten",
];

const clicked = [];

function show(box) {
  if (clicked.includes(box.id)) return;
  document.querySelectorAll(".box").forEach((box) => {
    box.classList.add("hidden");
  });
  clicked.push(box.id);
  console.log(clicked, order);
  box.classList.add("found");
  box.classList.remove("hidden");
  const idx = clicked.length - 1;
  if (order[idx] !== clicked[idx]) {
    document.querySelectorAll(".box").forEach((box) => {
      box.classList.add("hidden");
      box.classList.remove("found");
      while (clicked.length) clicked.pop();
    });
  }
}

function init() {
  document
    .querySelectorAll(".box")
    .forEach((box) => box.addEventListener("click", (e) => show(box)));
  document.addEventListener("click", clickEffect);
}

function clickEffect(e) {
  var d = document.createElement("div");
  d.className = "clickEffect";
  d.style.top = e.clientY + "px";
  d.style.left = e.clientX + "px";
  document.body.appendChild(d);
  d.addEventListener(
    "animationend",
    function () {
      d.parentElement.removeChild(d);
    }.bind(this)
  );
}

window.addEventListener("load", init);
