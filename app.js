const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const htmlBody = document.querySelector("body");
const color = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const number = randomNumberGenerator();

  htmlBody.style.backgroundColor = colors[number];
  color.textContent = colors[number];
});

function randomNumberGenerator() {
  return Math.floor(Math.random() * colors.length);
}
