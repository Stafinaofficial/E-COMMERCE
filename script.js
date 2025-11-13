// Login form validation
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (!email.includes("@")) {
    alert("Please enter a valid email address.");
    return;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }
  alert("Login Successful!");
});

// Registration form validation
document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (username.length < 3) {
    alert("Username must be at least 3 characters long.");
    return;
  }
  if (!email.includes("@")) {
    alert("Invalid email format.");
    return;
  }
  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }
  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  alert("Registration Successful!");
});

