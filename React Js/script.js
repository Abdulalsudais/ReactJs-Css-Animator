const colors = ["blue", "yellow", "#34ed11", "rgba(122, 122, 122, 1)"];

const button = document.querySelector("#button");
const color = document.querySelector(".color");
const main = document.querySelector("main");

button.addEventListener("click", (event) => {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  main.style.backgroundColor = colors[randomNumber];
  color.innerText = colors[randomNumber];
});
const getRandomNumber = () => {
  // return Math.random() * colors.length;
  return Math.floor(Math.random() * colors.length);
};
