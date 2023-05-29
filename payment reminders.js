function setPaymentReminder(event) {
  event.preventDefault();

  var billType = document.getElementById('billType').value;
  var emailAddress = document.getElementById('email').value;
  var frequency = document.getElementById('frequency').value;

  
  console.log('Payment Reminder Details:');
  console.log('Bill Type:', billType);
  console.log('Email Address:', emailAddress);
  console.log('Reminder Frequency:', frequency);

  document.getElementById('reminderForm').reset();
}

document.getElementById('reminderForm').addEventListener('submit', setPaymentReminder);
