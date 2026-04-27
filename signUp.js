function togglePassword() {
  const passwordInput = document.getElementById("password");
  const eyeIcon = document.getElementById("eyeIcon");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
}

document.getElementById("signUpForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;

  if (name && email) {
    const btn = e.target.querySelector("button");
    btn.innerHTML =
      '<i class="fas fa-spinner fa-spin mr-2"></i> Registering...';
    btn.disabled = true;

    setTimeout(() => {
      alert("রেজিস্ট্রেশন সফল হয়েছে! স্বাগতম, " + name);
      window.location.href = "logIn.html";
      btn.disabled = false;
    }, 1500);
  }
});
