function setPaymentReminder(event) {
  event.preventDefault();

  var billType = document.getElementById('billType').value;
  var dueDate = document.getElementById('dueDate').value;
  var emailAddress = document.getElementById('email').value;

  
  console.log('Payment Reminder Details:');
  console.log('Bill Type:', billType);
  console.log('Due Date:', dueDate);
  console.log('Email Address:', emailAddress);

  document.getElementById('reminderForm').reset();
}

document.getElementById('reminderForm').addEventListener('submit', setPaymentReminder);
