document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting
    validateForm();
  });
});

function validateForm() {
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  let isValid = true;

  // Username validation: must not be empty
  if (username.value.trim() === "") {
    alert("Username is required.");
    isValid = false;
  }

  // Email validation: must match email pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    alert("Please enter a valid email.");
    isValid = false;
  }

  // Password validation: must be at least 6 characters
  if (password.value.length < 6) {
    alert("Password must be at least 6 characters.");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    document.getElementById("form").submit();
  }
}
