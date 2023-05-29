function transferMoney(event) {
    event.preventDefault(); 
    var fromAccount = document.getElementById('fromAccount').value;
    var toAccount = document.getElementById('toAccount').value;
    var amount = document.getElementById('amount').value;
    var currency = document.getElementById('currency').value;
    var remarks = document.getElementById('remarks').value;
  
    console.log('Transfer Money Details:');
    console.log('From Account:', fromAccount);
    console.log('To Account:', toAccount);
    console.log('Amount:', amount, currency);
    console.log('Remarks:', remarks);
  
    document.getElementById('transferForm').reset();
  }
  
  document.getElementById('transferForm').addEventListener('submit', transferMoney);
  
