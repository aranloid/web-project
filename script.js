// Show an alert when the "Learn More" button is clicked
function showAlert() {
  alert("Welcome to our comprehensive website! Explore our features and services.");
}

// Form validation for the contact page
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
    alert("Thank you for contacting us, " + name + "!");
    this.reset();
  } else {
    alert("Please fill out all fields.");
  }
});

// Create falling rain effect
function createRain() {
  const rainContainer = document.createElement("div");
  rainContainer.classList.add("rain");
  document.body.appendChild(rainContainer);

  const rainCount = 100; // Number of raindrops
  for (let i = 0; i < rainCount; i++) {
    const rainDrop = document.createElement("div");
    rainDrop.classList.add("rain-drop");
    rainDrop.style.left = Math.random() * 100 + "vw"; // Random horizontal position
    rainDrop.style.animationDuration = Math.random() * 2 + 2 + "s"; // Random fall speed
    rainDrop.style.animationDelay = Math.random() * 5 + "s"; // Random delay
    rainContainer.appendChild(rainDrop);
  }
}

// Initialize rain effect
createRain();