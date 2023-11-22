const btnStartEl = document.querySelector("#btnStartEl");
const gameCard = document.querySelector("#gameCard");
const btnDiv = document.querySelector("#btnDiv");
//?User-------------------------------------
const userName = document.querySelector("#usersName");
const resultUser = document.querySelector("#resultUser");
const pointUser = document.querySelector("#pointUser");
const userImg = document.querySelector("#userImg");
//?User-------------------------------------
//?-----------------------------------------
//?Comp-------------------------------------
const resultComp = document.querySelector("#resultComp");
const pointComp = document.querySelector("#pointComp");
const compImg = document.querySelector("#compImg");
//?Comp-------------------------------------

const playGame = ["r", "p", "s"];
let playerUser = 0;
let playerComp = 0;
//?-----------------------------------------------
function randomElement() {
  const randomIndex = Math.floor(Math.random() * playGame.length);
  return playGame[randomIndex];
}
function playRules(u, c) {
  userImg.src = `./alerts/images/${u}.png`;
  compImg.src = `./alerts/images/${c}.png`;
  if (u == "r" && c == "s") {
    resultUser.innerHTML = "Win";
    resultComp.innerHTML = "Lose";
    resultUser.style.color = "green";
    resultComp.style.color = "red";
    playerUser += 1;
    pointUser.innerHTML = playerUser;
    pointComp.innerHTML = playerComp;
  } else if (u == "p" && c == "r") {
    console.log("user is WIN");
    playerUser += 1;
    resultUser.innerHTML = "Win";
    resultComp.innerHTML = "Lose";
    resultUser.style.color = "green";
    resultComp.style.color = "red";
    pointUser.innerHTML = playerUser;
    pointComp.innerHTML = playerComp;
  } else if (u == "s" && c == "p") {
    console.log("user is WIN");
    playerUser += 1;
    resultUser.innerHTML = "Win";
    resultComp.innerHTML = "Lose";
    resultUser.style.color = "green";
    resultComp.style.color = "red";
    pointUser.innerHTML = playerUser;
    pointComp.innerHTML = playerComp;
  } else if (u == c) {
    console.log("Draw");
    resultUser.innerHTML = "Draw";
    resultComp.innerHTML = "Draw";
    resultUser.style.color = "black";
    resultComp.style.color = "black";
  } else {
    console.log("Comp is WIN");
    playerComp += 1;
    resultUser.innerText = "Lose";
    resultComp.innerText = "Win";
    resultUser.style.color = "red";
    resultComp.style.color = "green";
    pointUser.innerText = playerUser;
    pointComp.innerText = playerComp;
  }
}
btnStartEl.addEventListener("click", function () {
  let name = prompt("Please the enter name:");
  btnDiv.classList.add("d-none");
  gameCard.classList.remove("d-none");
  alert(
    `Oyuna Xoş geldiniz ${name}. Zehmet olmasa oyuna başlamaq isteyirsizse r,p,s hərflərindən birin seç!`
  );
  userName.innerText = `${name}`;

  window.addEventListener("keypress", function (e) {
    let userChoose = e.key;
    if (playGame.includes(e.key) === false) {
      alert("Zehmet olmasa dogru herf sec --> r,p,s");
    } else {
      let compChoose = randomElement();
      playRules(userChoose, compChoose);
    }
  });
});
