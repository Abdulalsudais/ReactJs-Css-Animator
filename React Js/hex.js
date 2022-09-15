const hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  const button = document.querySelector("button");
  const color = document.querySelector(".color");
  const main = document.querySelector("main");

  button.addEventListener("click",(event)=>{
      let hexColor = "#";
      for(let i=0;i<6;i++)
      {
          const randomNumber = getRandomNumber();
          hexColor = hexColor + hex[randomNumber];
          console.log(randomNumber);
          console.log(hex[randomNumber]);
          console.log(hexColor);
      }
      main.style.backgroundColor = hexColor;
      color.innerText = hexColor;
  });

  const getRandomNumber = () => {
      return Math.floor(Math.random() * hex.length);
  }
