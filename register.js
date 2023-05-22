document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");
  form.addEventListener("input", function (event) {
    var target = event.target;
    if (target.matches("input:invalid")) {
      target.classList.add("error");
    } else {
      target.classList.remove("error");
    }
  });
});

function nextStep(currentStepId, nextStepId) {
  var form = currentStep.querySelector("form");
  var currentStep = document.getElementById(currentStepId);
  var nextStep = document.getElementById(nextStepId);
  if (form.checkValidity()) {
    currentStep.classList.remove("visible");
    if (nextStep) {
      nextStep.classList.add("visible");
    }
  }
  else{
    console.log("HELLOOO");
  } 
}
function backStep(currentStepId, nextStepId) {
  var form = currentStep.querySelector("form");
  var currentStep = document.getElementById(currentStepId);
  var nextStep = document.getElementById(nextStepId);
  currentStep.classList.remove("visible");
  if (nextStep) {
    nextStep.classList.add("visible");
  }
}
