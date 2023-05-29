function submitCreditCardApplication(event) {
  event.preventDefault();

  // Get form input values
  var fullName = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phoneNumber = document.getElementById('phone').value;
  var annualIncome = document.getElementById('income').value;

  // Perform any additional validation or processing here
  
  // Display the submitted values
  console.log('Credit Card Application Details:');
  console.log('Full Name:', fullName);
  console.log('Email:', email);
  console.log('Phone Number:', phoneNumber);
  console.log('Annual Income:', annualIncome);

  // Reset the form
  document.getElementById('creditCardApplicationForm').reset();
}

document.getElementById('creditCardApplicationForm').addEventListener('submit', submitCreditCardApplication);
