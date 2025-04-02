let btns = document.querySelectorAll("button");
for (btn of btns) {
  btn.addEventListener("click", (ev) => {
    console.log("Button was clicked");
  });
}

let rollbtn = document.querySelector(".rollbtn");
let newRoll = document.querySelector(".newRoll");
if (rollbtn) {
  rollbtn.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log("Random number generated:", randomNumber);
    newRoll.textContent = "New Roll: " + randomNumber;
    if (randomNumber === 6) {
      window.location.reload();
    }
  });
}
