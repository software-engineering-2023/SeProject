function closeBankAccount(event) {
  event.preventDefault();

  var accountNumber = document.getElementById('accountNumber').value;
  var reason = document.getElementById('reason').value;

  
  console.log('Close Bank Account Details:');
  console.log('Account Number:', accountNumber);
  console.log('Reason for Closure:', reason);

  document.getElementById('closeAccountForm').reset();
}

document.getElementById('closeAccountForm').addEventListener('submit', closeBankAccount);
