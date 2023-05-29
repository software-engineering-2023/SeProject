const form = document.querySelector("form");
form.addEventListener("input", (event) => {
  const input = event.target;
  input.reportValidity();
});
const formInputs = document.querySelectorAll(".formInputs input");

function nextStep(currentStepId, nextStepId) {
  var currentStep = document.getElementById(currentStepId);
  var form = currentStep.querySelector("form");
  var nextStep = document.getElementById(nextStepId);

  if (form.checkValidity()) {
    var nameInput = document.querySelector("#step1 input[type='text']");
    var emailInput = document.querySelector("#step1 input[type='email']");
    var phoneInput = document.querySelector("#step1 input[type='text']");
    var nationalIdInput = document.querySelector("#step1 input[type='text']");

    var nameSpan = document.getElementById("name");
    var emailSpan = document.getElementById("email");
    var phoneSpan = document.getElementById("phone");
    var nationalIdSpan = document.getElementById("nationalId");

    nameSpan.textContent = nameInput.value;
    emailSpan.textContent = emailInput.value;
    phoneSpan.textContent = phoneInput.value;
    nationalIdSpan.textContent = nationalIdInput.value;

    currentStep.classList.remove("visible");
    if (nextStep) {
      nextStep.classList.add("visible");
    }
    if ((currentStepId == "step1") & (nextStepId == "step2")) {
      var icons = document.getElementsByClassName("bi");
      icons[0].classList.remove("active");
      icons[1].classList.add("active");
    }
    if ((currentStepId == "step2") & (nextStepId == "step3")) {
      var icons = document.getElementsByClassName("bi");
      icons[1].classList.remove("active");
      icons[2].classList.add("active");
    }
    if ((currentStepId == "step3") & (nextStepId == "step4")) {
      var icons = document.getElementsByClassName("bi");
      icons[2].classList.remove("active");
      icons[3].classList.add("active");
    }
  } else {
    formInputs.forEach((input) => {
      if (input.checkValidity()) {
        input.classList.remove("invalid");
      } else {
        input.classList.add("invalid");
      }
    });
  }
}
function backStep(currentStepId, nextStepId) {
  var currentStep = document.getElementById(currentStepId);
  var form = currentStep.querySelector("form");
  var nextStep = document.getElementById(nextStepId);
  currentStep.classList.remove("visible");
  if (nextStep) {
    nextStep.classList.add("visible");
  }
  if ((currentStepId == "step2") & (nextStepId == "step1")) {
    var icons = document.getElementsByClassName("bi");
    icons[1].classList.remove("active");
    icons[0].classList.add("active");
  }
  if ((currentStepId == "step3") & (nextStepId == "step2")) {
    var icons = document.getElementsByClassName("bi");
    icons[2].classList.remove("active");
    icons[1].classList.add("active");
  }
  if ((currentStepId == "step4") & (nextStepId == "step3")) {
    var icons = document.getElementsByClassName("bi");
    icons[3].classList.remove("active");
    icons[2].classList.add("active");
  }
}

function validatePasswords(currentStepId, nextStepId) {
  var currentStep = document.getElementById(currentStepId);
  var nextStep = document.getElementById(nextStepId);
  var passwordInput = document.getElementById("password");
  var confirmPasswordInput = document.getElementById("confirmPassword");
  var passwordError = document.getElementById("passwordError");

  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordError.textContent = "Passwords do not match";
    return;
  }

  passwordError.textContent = ""; // Clear error message if passwords match
  if ((currentStepId == "step3") & (nextStepId == "step4")) {
    var icons = document.getElementsByClassName("bi");
    icons[2].classList.remove("active");
    icons[3].classList.add("active");
  }
  currentStep.classList.remove("visible");
  if (nextStep) {
    nextStep.classList.add("visible");
  }
}
function submitForm() {
  var termsCheckbox = document.getElementById("termsCheckbox");
  if (termsCheckbox.checked) {
    alert(
      "Form Submitted Successfully. You will receive a confirmation email or SMS."
    );
    document.querySelector("form").reset();
    window.location.href = "index.html";
  }
}
