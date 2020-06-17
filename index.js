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

//nav sign in page
const main = document.querySelector("main");
const mainHome = [];

for (let i = 0; i < main.children.length; i++) {
  mainHome.push(main.children[i].cloneNode(true));
}

const singLi = document.querySelector(".sign-li");
const signForm = document.querySelector(".sign-form");

singLi.addEventListener("click", () => {
  while (main.children.length) {
    let i = 0;
    const target = main.children[i];
    const re = target.remove();
    console.log("re", main.children.length);
    i++;
  }

  signForm.classList.remove("hide");
  main.appendChild(signForm);
});

//validation
const action = document.querySelector(".action");
const icons_i = document.querySelectorAll(".action > i");
const times_i = document.querySelector("#times");
const check_i = document.querySelector("#check");
const arrow_i = document.querySelector("#arrow");
const pw = document.querySelector("#password");
let open = false;

///authenticate User with data from database
let result = "db";

action.addEventListener("click", function validate() {
  icons_i.forEach((icon) => {
    icon.classList.add("hide");
  });

  if (!open) {
    root.style.setProperty("--checking", "260px");
    root.style.setProperty("--opacity", "1");

    if (pw.value === result) {
      check_i.classList.remove("hide");
      root.style.setProperty("--validator", "skyblue");
      action.dataset.content = "Good Password  ";
    } else {
      times_i.classList.remove("hide");
      root.style.setProperty("--validator", "tomato");
      action.dataset.content = "Wrong Password ";

      setTimeout(() => {
        validate();
      }, 600);
    }
  } else {
    pw.value = "";
    arrow_i.classList.remove("hide");

    root.style.setProperty("--checking", 0);
    root.style.setProperty("--opacity", 0);
    root.style.setProperty("--validator", "dodgerblue");
  }
  open = !open;
});

///set password visible or hidden
const scout = document.querySelector(".eye");
const openEye = document.querySelector("#openEye");
const closeEye = document.querySelector("#closeEye");
const eye_i = document.querySelectorAll(".eye > i");

scout.addEventListener("click", () => {
  const type = pw.getAttribute("type");

  eye_i.forEach((eye) => {
    eye.classList.add("hide");
  });

  if (type === "text") {
    pw.setAttribute("type", "password");
    closeEye.classList.remove("hide");
  } else {
    pw.setAttribute("type", "text");
    openEye.classList.remove("hide");
  }
});

//home
const home = document.querySelector(".nav-link");
home.addEventListener("click", () => {
  console.log("first", main.firstElementChild);
  main.firstElementChild.remove();

  mainHome.forEach((node) => {
    main.appendChild(node);
    console.log(node.value);
    console.log(main.children);
  });
});
