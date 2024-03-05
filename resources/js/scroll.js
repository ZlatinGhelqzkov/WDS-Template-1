let sections = document.querySelectorAll("section");
let currentSectionIndex = null;

function handleScroll() {
  let scrollPosition = window.scrollY;
  let totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  let scrollPercentage = (scrollPosition / totalHeight) * 100;

  // Find the index of the section closest to the current scroll position
  let visibleSectionIndex = findClosestSectionIndex(scrollPosition);

  // Check if the visible section index is different from the currentSectionIndex
  if (visibleSectionIndex !== currentSectionIndex) {
    // Update the currentSectionIndex
    currentSectionIndex = visibleSectionIndex;

    let car = document.getElementById("car");
    let textBubble = document.getElementById("text-bubble");
    let arrow = document.getElementById("arrow");
    let bubbleContent = document.getElementById("text-bubble");
    let bubbleArrow = document.getElementById("arrow");
    let content = bubbleContent.children[0];

    // Log the message or perform your custom actions
    console.log(visibleSectionIndex);
    switch (visibleSectionIndex) {
      case 0:
        bubbleContent.style.display = "none";
        bubbleArrow.style.display = "none";
        content.textContent = "";
        break;
      case 1:
        content.textContent = "Meet Mike";
        bubbleContent.style.display = "flex";
        bubbleArrow.style.display = "flex";
        break;
      case 2:
        content.textContent = "Driving License";
        break;
      case 3:
        content.textContent = "Skip Classes";
        break;
      case 4:
        content.textContent = "Obtain Online";
        break;
      case 5:
        content.textContent = "Trailer";
        break;
      case 6:
        content.textContent = "Features";
        break;
      case 7:
        content.textContent = "Get Started";
        break;
    }

    // Offsetting the starting positions of the elements.
    let startingOffsetCar = 22;
    let startingOffsetArrow = 45;

    // Position the car based on the current section index and total scrollable height
    let percentagePosition = (visibleSectionIndex / sections.length) * 100;
    let calculatedPositionCar = `calc(${percentagePosition}% + ${startingOffsetCar}px)`;

    if (percentagePosition + startingOffsetCar / window.innerHeight > 100) {
      calculatedPositionCar = `calc(100% - 70px)`;
    }

    // Apply a smooth transition to the car's top position
    car.style.transition = "top 0.5s ease";
    car.style.top = calculatedPositionCar;
    textBubble.style.transition = "top 0.5s ease";
    textBubble.style.top = calculatedPositionCar;

    // Apply a smooth transition to the arrow's top position
    let calculatedPositionArrow = `calc(${percentagePosition}% + ${startingOffsetArrow}px)`;
    if (percentagePosition + startingOffsetArrow / window.innerHeight > 100) {
      calculatedPositionArrow = `calc(100% - 45px)`;
    }
    arrow.style.transition = "top 0.5s ease";
    arrow.style.top = calculatedPositionArrow;
  }
}

function findClosestSectionIndex(scrollPosition) {
  let closestSectionIndex = 0;
  let closestDistance = Math.abs(scrollPosition - sections[0].offsetTop);

  for (let i = 1; i < sections.length; i++) {
    let distance = Math.abs(scrollPosition - sections[i].offsetTop);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestSectionIndex = i;
    }
  }

  return closestSectionIndex;
}

window.addEventListener("scroll", handleScroll);

// Initial check when the page loads
handleScroll();
