const colors = ["green", "red", "rgb(133, 122, 200)", "#fefec0"];
const btn = document.getElementById("btnId");
const color = document.querySelector(".color");

btn.addEventListener('click', myFunction);

function myFunction(){
  //get random number between 0 and 3
  const randomNumber = Math.random() * 4;
  const  randomNumberFloor = Math.floor(randomNumber);
  document.body.style.backgroundColor = colors[randomNumberFloor];
  color.textContent = colors[randomNumberFloor];
  console.log(randomNumberFloor);
}
