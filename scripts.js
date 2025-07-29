document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#registrationForm");
  const feedbackDiv = document.querySelector("#feedback");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.querySelector("#username").value.trim();
    const email = document.querySelector("#email").value.trim();

    let isValid = true;
    const messages = [];

    if (username === "") {
      isValid = false;
      messages.push("Username is required.");
    }

    if (email === "") {
      isValid = false;
      messages.push("Email is required.");
    }

    feedbackDiv.style.display = "block";

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    }
  });
});
