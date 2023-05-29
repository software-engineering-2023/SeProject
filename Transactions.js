const filterButton = document.getElementById('filterButtonn');
const startDateInput = document.getElementById('startDatee');
const endDateInput = document.getElementById('endDatee');
const transactionTypeSelect = document.getElementById('transaction-typee');
const transactionLocationSelect = document.getElementById('transaction-locationn');
const transactionWrapper = document.querySelector('.transaction-wrapperr');
const messageElement = document.getElementById('message');

// Add click event listener to the filter button
filterButton.addEventListener('click', filterTransactions);

const myButton = document.getElementById('maketrans');
const myDiv = document.getElementById('maketransdivv');

myButton.addEventListener('click', function() {
  myDiv.style.display='block';
  myButton.style.display='none';
});
// Function to filter transactions based on the selected criteria
function filterTransactions() {
    const startDate = startDateInput.value;
    const endDate = endDateInput.value;
    const transactionType = transactionTypeSelect.value;
    const transactionLocation = transactionLocationSelect.value;

    // Check if any criteria are selected
    if (!startDate && !endDate && transactionType === 'all' && transactionLocation === 'all') {
        showMessage('Please choose at least one filter criterion.');
        return;
    }

    // Convert the selected dates to Date objects
    const startDateObj = startDate ? new Date(startDate) : null;
    const endDateObj = endDate ? new Date(endDate) : new Date();

    // Loop through each transaction and apply filters
    const transactions = Array.from(transactionWrapper.getElementsByClassName('transactionn'));
    let anyTransactionDisplayed = false;
    transactions.forEach(transactionn => {
        const dateStr = transactionn.querySelector('.date').textContent;
        const amount = parseFloat(transactionn.querySelector('.amount').textContent);
        const type = transactionn.querySelector('.type').textContent.toLowerCase();
        const location = transactionn.querySelector('.location').textContent.toLowerCase();
        const transactionDate = new Date(dateStr);

        // Check if the transaction matches the selected criteria
        const meetsDateCriteria = (transactionDate >= startDateObj || !startDateObj) && (transactionDate <= endDateObj || !endDateObj || !transactionDate);
        const meetsTypeCriteria = transactionType === 'all' || type === transactionType;
        const meetsLocationCriteria = transactionLocation === 'all' || location === transactionLocation.toLowerCase();

        // Show/hide the transaction based on the criteria
        if (meetsDateCriteria && meetsTypeCriteria && meetsLocationCriteria) {
            transactionn.classList.remove('hidden');
            anyTransactionDisplayed = true;
          } else {
            transactionn.classList.add('hidden');
        }
    });

    // Show message if no transactions match the criteria
    if (!anyTransactionDisplayed) {
        showMessage('No transactions match the selected criteria.');
    } else {
        hideMessage();
    }
}

// Function to display a message
function showMessage(text) {
    messageElement.textContent = text;
    messageElement.classList.remove("hidden");
}

// Function to hide the message
function hideMessage() {
    messageElement.classList.add("hidden");
}

var reportTypeSelect = document.getElementById("report-type");
var accountFields = document.getElementById("account-fields");
var transactionFields = document.getElementById("transaction-fields");
var stolenLostCardFields = document.getElementById("stolen-lost-card-fields");
var customerServiceFields = document.getElementById("customer-service-fields");
var technicalFields = document.getElementById("technical-fields");

reportTypeSelect.addEventListener("change", function() {
  if (reportTypeSelect.value === "account-issue") {
    accountFields.style.display = "block";
    transactionFields.style.display = "none";
    stolenLostCardFields.style.display = "none";
    customerServiceFields.style.display = "none";
    technicalFields.style.display = "none";
    
    // Set account number field as required
    document.getElementById("account-number").setAttribute("required", "");
  } else if (reportTypeSelect.value === "transaction-issue") {
    accountFields.style.display = "none";
    transactionFields.style.display = "block";
    stolenLostCardFields.style.display = "none";
    customerServiceFields.style.display = "none";
    technicalFields.style.display = "none";
    
    // Set transaction number and date fields as required
    document.getElementById("transaction-number").setAttribute("required", "");
    document.getElementById("transaction-date").setAttribute("required", "");
  } else if (reportTypeSelect.value === "stolen-lost-card") {
    accountFields.style.display = "none";
    transactionFields.style.display = "none";
    stolenLostCardFields.style.display = "block";
    customerServiceFields.style.display = "none";
    
    // Set full name and card number fields as required
    document.getElementById("full-name").setAttribute("required", "");
    document.getElementById("card-number").setAttribute("required", "");
  } else if (reportTypeSelect.value === "customer-service-dispute") {
    accountFields.style.display = "none";
    transactionFields.style.display = "none";
    stolenLostCardFields.style.display = "none";
    customerServiceFields.style.display = "block";
    
    // Set employee name and dispute date fields as required
    document.getElementById("employee-name").setAttribute("required", "");
    document.getElementById("dispute-date").setAttribute("required", "");
  } else if (reportTypeSelect.value === "technical-issue") {
    accountFields.style.display = "none";
    transactionFields.style.display = "none";
    stolenLostCardFields.style.display = "none";
    customerServiceFields.style.display = "none";
    
    // No fields to set as required for technical issue
  } else {
    accountFields.style.display = "none";
    transactionFields.style.display = "none";
    stolenLostCardFields.style.display = "none";
    customerServiceFields.style.display = "none";
    
    // Remove required attribute from all fields
    var fields = document.querySelectorAll("#issue-report-form [required]");
    fields.forEach(function(field) {
      field.removeAttribute("required");
    });
  }
});
document.getElementById("issue-report-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Clear the form fields
  reportTypeSelect.value = "";
  document.getElementById("account-number").value = "";
  document.getElementById("transaction-number").value = "";
  document.getElementById("transaction-date").value = "";
  document.getElementById("full-name").value = "";
  document.getElementById("card-number").value = "";
  document.getElementById("employee-name").value = "";
  document.getElementById("dispute-date").value = "";
  document.getElementById("website-issue").checked = false;
  document.getElementById("app-issue").checked = false;
});

// submitButton.addEventListener("click", function() {
//   // Manually trigger form submission
//   document.getElementById("issue-report-form").submit();
// });
const changebalance = document.getElementById('changebal');
const submitButton = document.getElementById('buttomen');
const newtrans = document.getElementById('newtrans');

submitButton.addEventListener('click', function() {
    // Modify the content element
    changebalance.innerHTML = 'Current Balance=2000$';
    newtrans.classList.remove('hidden')
  });

  
function logout(){
    window.location.href = "index.html"; 
  }

  function home(){
    window.location.href = "landing.html"; 
  }