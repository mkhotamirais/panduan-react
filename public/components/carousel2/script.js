const right = document.querySelector(".btn.right");
const left = document.querySelector(".btn.left");
const screens = document.querySelectorAll(".screen");
const numScreens = screens.length;
const circles = document.querySelectorAll(".circle");
let currentScreen = 0;
let inAnim = false;
let animTime = 500;

sortPosition(screens[currentScreen], screens[currentScreen - 1], screens[currentScreen + 1]);
fillCircle(circles[0]);

right.addEventListener("click", () => {
  moving("right");
});

left.addEventListener("click", () => {
  moving("left");
});

circles.forEach((circle) => {
  circle.addEventListener("click", () => {
    let circlesArr = Array.prototype.slice.call(circles);
    let circleIndex = circlesArr.indexOf(circle);
    fillCircle(circle);
    if (circleIndex > currentScreen) circleClick(circleIndex, "right");
    else if (circleIndex < currentScreen) circleClick(circleIndex, "left");
  });
});

function moving(dir) {
  if (!inAnim) {
    inAnim = true;
    if (dir === "right") {
      moveRight();
      fillCircle(circles[currentScreen + 1], "right");
    } else if (dir === "left") {
      moveLeft();
      fillCircle(circles[currentScreen - 1], "left");
    } else {
      inAnim = false;
      return;
    }
  }
}

function moveRight() {
  if (currentScreen < numScreens - 1) {
    toLeft(screens[currentScreen]);
    comeRight(screens[currentScreen + 1]);
    setTimeout(() => {
      inAnim = false;
      currentScreen++;
      sortPosition(screens[currentScreen], screens[currentScreen - 1], screens[currentScreen + 1]);
    }, animTime);
  } else {
    toLeft(screens[currentScreen]);
    comeRight(screens[0]);
    setTimeout(() => {
      inAnim = false;
      currentScreen = 0;
      sortPosition(screens[currentScreen], screens[currentScreen - 1], screens[currentScreen + 1]);
    });
  }
}

function moveLeft() {
  if (currentScreen > 0) {
    toRight(screens[currentScreen]);
    comeLeft(screens[currentScreen - 1]);
    setTimeout(() => {
      inAnim = false;
      currentScreen--;
      sortPosition(screens[currentScreen], screens[currentScreen - 1], screens[currentScreen + 1]);
    }, animTime);
  } else {
    toRight(screens[currentScreen]);
    comeLeft(screens[numScreens - 1]);
    setTimeout(() => {
      inAnim = false;
      currentScreen = numScreens - 1;
      sortPosition(screens[currentScreen], screens[currentScreen - 1], screens[currentScreen + 1]);
    });
  }
}

function sortPosition(center, left, right) {
  if (right === undefined) right = screens[0];
  if (left === undefined) left = screens[numScreens - 1];
  screens.forEach((screen) => {
    if (screen === center) {
      screen.style.display = "block";
      screen.style.left = "0px";
    } else if (screen === left) {
      screen.style.display = "block";
      screen.style.left = "-100%";
    } else if (screen === right) {
      screen.style.display = "block";
      screen.style.left = "100%";
    } else {
      screen.style.display = "none";
    }
  });
}

function fillCircle(circleSelect, dir) {
  if (circleSelect === undefined && dir === "right") circleSelect = circles[0];
  else if (circleSelect === undefined && dir === "left") circleSelect = circles[numScreens - 1];
  circles.forEach((circle) => {
    if (circle == circleSelect) circle.classList.add("circle-fill");
    else circle.classList.remove("circle-fill");
  });
}

function circleClick(circleIndex, direction) {
  inAnim = true;
  if (direction === "right") {
    sortPosition(screens[currentScreen], screens[currentScreen - 1], screens[circleIndex]);
    toLeft(screens[currentScreen]);
    comeRight(screens[circleIndex]);
  } else if (direction === "left") {
    sortPosition(screens[currentScreen], screens[circleIndex], screens[currentScreen + 1]);
    toRight(screens[currentScreen]);
    comeLeft(screens[circleIndex]);
  } else {
    inAnim = false;
    return;
  }
  setTimeout(() => {
    inAnim = false;
    currentScreen = circleIndex;
    sortPosition(screens[currentScreen], screens[currentScreen - 1], screens[currentScreen + 1]);
  }, animTime);
}

let carousel = document.getElementById("carousel-1");
let scrollTime = Number(carousel.getAttribute("auto-scroll"));

if (scrollTime) {
  let autoWipe = setInterval(() => {
    moving("right");
  }, scrollTime);
  carousel.addEventListener("mouseenter", () => {
    clearInterval(autoWipe);
  });
  carousel.addEventListener("mouseleave", () => {
    autoWipe = setInterval(() => {
      moving("right");
    }, scrollTime);
  });
}

function toLeft(screen) {
  screen.style.animation = "toLeft 0.5s ease-in-out forwards";
  setTimeout(() => {
    screen.style.animation = "";
  }, animTime);
}

function toRight(screen) {
  screen.style.animation = "toRight 0.5s ease-in-out forwards";
  setTimeout(() => {
    screen.style.animation = "";
  }, animTime);
}

function comeRight(screen) {
  screen.style.animation = "comeRight 0.5s ease-in-out forwards";
  setTimeout(() => {
    screen.style.animation = "";
  }, animTime);
}

function comeLeft(screen) {
  screen.style.animation = "comeLeft 0.5s ease-in-out forwards";
  setTimeout(() => {
    screen.style.animation = "";
  }, animTime);
}
