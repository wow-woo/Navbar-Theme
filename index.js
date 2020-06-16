const themeButton = document.querySelector("#themeButton");
const icons = document.querySelectorAll(".theme-icon");
const text = document.querySelector(".theme-text");
const root = document.documentElement;

let count = 1;

themeButton.addEventListener("click", () => {
  icons.forEach((icon) => {
    //hide all first
    icon.style.display = "none";
  });

  //show next one
  icons[count].style.display = "block";

  //change text
  const label = icons[count].getAttribute("id").toString();
  const head = label.charAt(0).toUpperCase();
  const word = head + label.slice(1, -4);

  text.textContent = word;

  colorChanger(count);

  // count loop
  if (count >= 2) {
    count = 0;
  } else {
    count = count + 1;
  }
});

function colorChanger(count) {
  console.log(count);
  if (count === 0) {
    root.style.setProperty("--bg-primary", "#23232e");
    root.style.setProperty("--bg-secondary", "#141418");
  } else if (count === 1) {
    root.style.setProperty("--bg-primary", "ivory");
    root.style.setProperty("--bg-secondary", "#141418");
  } else if (count === 2) {
    root.style.setProperty("--bg-primary", "#444040");
    root.style.setProperty("--bg-secondary", "#141418");
  } else {
    return;
  }
}
