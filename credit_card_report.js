document.getElementById("issueForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  var successMessage = document.createElement("p");
  successMessage.textContent = "The process has been successful.";
  successMessage.style.color = "green";
  
  var form = document.getElementById("issueForm");
  form.appendChild(successMessage);
  form.reset();
});

  