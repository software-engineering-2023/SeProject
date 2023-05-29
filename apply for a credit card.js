function submitCreditCardApplication(event) {
  event.preventDefault();

  var fullName = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phoneNumber = document.getElementById('phone').value;
  var annualIncome = document.getElementById('income').value;
  
  console.log('Credit Card Application Details:');
  console.log('Full Name:', fullName);
  console.log('Email:', email);
  console.log('Phone Number:', phoneNumber);
  console.log('Annual Income:', annualIncome);

  document.getElementById('creditCardApplicationForm').reset();
}

document.getElementById('creditCardApplicationForm').addEventListener('submit', submitCreditCardApplication);
