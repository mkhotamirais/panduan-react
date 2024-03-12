let rightArrow = document.querySelector("#carousel-1 .right-arrow");
let leftArrow = document.querySelector("#carousel-1 .left-arrow");
let screenStore = document.querySelectorAll("#carousel-1 .carousel-screen");
let circleStore = document.querySelectorAll("#carousel-1 .circle-container .circle");

let numOfScreens = screenStore.length;
let currentScreen = 0;
let inAnim = false;
let animTime = 500;

sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1]);
highlightCircle(circleStore[0]);

rightArrow.addEventListener("click", () => {
  startAnim("right");
});

leftArrow.addEventListener("click", () => {
  startAnim("left");
});

function startAnim(direction) {
  if (!inAnim) {
    inAnim = true;
    if (direction === "right") {
      moveRight();
      highlightCircle(circleStore[currentScreen + 1], "right");
    } else if (direction === "left") {
      moveLeft();
      highlightCircle(circleStore[currentScreen - 1], "left");
    } else {
      inAnim = false;
      return;
    }
  }
}

function moveRight() {
  if (currentScreen < numOfScreens - 1) {
    toLeft(screenStore[currentScreen]);
    comeRight(screenStore[currentScreen + 1]);
    setTimeout(() => {
      inAnim = false;
      currentScreen++;
      sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1]);
    }, animTime);
  } else {
    toLeft(screenStore[currentScreen]);
    comeRight(screenStore[0]);
    setTimeout(() => {
      inAnim = false;
      currentScreen = 0;
      sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1]);
    });
  }
}

function moveLeft() {
  if (currentScreen > 0) {
    toRight(screenStore[currentScreen]);
    comeLeft(screenStore[currentScreen - 1]);
    setTimeout(() => {
      inAnim = false;
      currentScreen--;
      sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1]);
    }, animTime);
  } else {
    toRight(screenStore[currentScreen]);
    comeLeft(screenStore[numOfScreens - 1]);
    setTimeout(() => {
      inAnim = false;
      currentScreen = numOfScreens - 1;
      sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1]);
    });
  }
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

function sortPositioning(mainScreen, leftScreen, rightScreen) {
  if (rightScreen === undefined) rightScreen = screenStore[0];
  if (leftScreen === undefined) leftScreen = screenStore[numOfScreens - 1];
  screenStore.forEach((screen) => {
    if (screen === mainScreen) {
      screen.style.display = "block";
      screen.style.left = "0px";
    } else if (screen === leftScreen) {
      screen.style.display = "block";
      screen.style.left = "-100%";
    } else if (screen === rightScreen) {
      screen.style.display = "block";
      screen.style.left = "100%";
    } else {
      screen.style.display = "none";
    }
  });
}

circleStore.forEach((circle) => {
  circle.addEventListener("click", (e) => {
    if (!inAnim) {
      let circleStoreArray = Array.prototype.slice.call(circleStore);
      let circleIndex = circleStoreArray.indexOf(e.target);
      highlightCircle(e.target);
      if (circleIndex > currentScreen) changeScreenCircleClick(circleIndex, "right");
      else if (circleIndex < currentScreen) changeScreenCircleClick(circleIndex, "left");
    }
  });
});

function changeScreenCircleClick(circleIndex, direction) {
  inAnim = true;
  if (direction === "right") {
    sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[circleIndex]);
    toLeft(screenStore[currentScreen]);
    comeRight(screenStore[circleIndex]);
  } else if (direction === "left") {
    sortPositioning(screenStore[currentScreen], screenStore[circleIndex], screenStore[currentScreen + 1]);
    toRight(screenStore[currentScreen]);
    comeLeft(screenStore[circleIndex]);
  } else {
    inAnim = false;
    return;
  }
  setTimeout(() => {
    inAnim = false;
    currentScreen = circleIndex;
    sortPositioning(screenStore[currentScreen], screenStore[currentScreen - 1], screenStore[currentScreen + 1]);
  }, animTime);
}

function highlightCircle(circleSelect, direction) {
  if (circleSelect === undefined && direction === "right") circleSelect = circleStore[0];
  else if (circleSelect === undefined && direction === "left") circleSelect = circleStore[numOfScreens - 1];
  circleStore.forEach((circle) => {
    if (circle === circleSelect) {
      circle.classList.add("circle-fill");
    } else {
      circle.classList.remove("circle-fill");
    }
  });
}

let carousel = document.getElementById("carousel-1");
let scrollTime = Number(carousel.getAttribute("auto-scroll"));

if (scrollTime) {
  let autoWipe = setInterval(() => {
    startAnim("right");
  }, scrollTime);
  carousel.addEventListener("mouseenter", () => {
    clearInterval(autoWipe);
  });
  carousel.addEventListener("mouseleave", () => {
    autoWipe = setInterval(() => {
      startAnim("right");
    }, scrollTime);
  });
}
