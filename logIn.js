// ১. পাসওয়ার্ড শো/হাইড করার লজিক
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

// ২. ফর্ম সাবমিট হ্যান্ডলার
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // একটি সিম্পল এনিমেশন বা এলার্ট দেখানোর জন্য
  if (email && password) {
    const btn = e.target.querySelector("button");
    btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Processing...';
    btn.disabled = true;

    setTimeout(() => {
      alert("লগইন সফল হয়েছে! স্বাগতম, " + email);
      btn.innerHTML = 'Login <i class="fas fa-sign-in-alt ml-2"></i>';
      btn.disabled = false;
    }, 1500);
  }
});
