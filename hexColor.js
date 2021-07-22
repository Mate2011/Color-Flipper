var hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById("btnId");
const color = document.querySelector(".color");

btn.addEventListener('click', addRandomColor);

function addRandomColor(){
  var randomNumber = Math.random() * hex.length;
  var randomNumberFloor = Math.floor(randomNumber);
  console.log(randomNumberFloor);

  let hexColor = "#";
  for(let i = 0; i < 6; i++){
    hexColor += hex[randomNumberFloor];
  }

  color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
}
