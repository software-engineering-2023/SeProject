function openBankAccount(event) {
    event.preventDefault();
  
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
  
    
    console.log('Open Bank Account Details:');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Phone:', phone);
  
    document.getElementById('bankAccountForm').reset();
  }
  
  document.getElementById('bankAccountForm').addEventListener('submit', openBankAccount);
  
