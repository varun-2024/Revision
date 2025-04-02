let btns = document.querySelectorAll("button");
for (btn of btns) {
  btn.addEventListener("click", (ev) => {
    console.log("Button was clicked");
  });
}
