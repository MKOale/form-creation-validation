document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;

    // Username: must not be empty
    if (username.value.trim() === "") {
      username.style.border = "2px solid red";
      valid = false;
    } else {
      username.style.border = "2px solid green";
    }

    // Email: must be valid format
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
      email.style.border = "2px solid red";
      valid = false;
    } else {
      email.style.border = "2px solid green";
    }

    // Password: at least 6 characters
    if (password.value.length < 6) {
      password.style.border = "2px solid red";
      valid = false;
    } else {
      password.style.border = "2px solid green";
    }<script src="fetch-data.js"></script>

    if (valid) {
      alert("Form is valid and ready to submit!");
      form.submit(); // or simulate submission
    }
  });
});
