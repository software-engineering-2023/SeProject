

function bill(){
  window.location.href = "Bill.html"; 
}

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
let slideIndexx = 0;

function showSlide() {
  const slider = document.querySelector(".slider");
  slider.style.transform = `translateX(-${slideIndex * (50)}%)`;
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = slides.length - 1;
  }
  showSlide();
  if (slideIndexx < slides.length - 1) {
    slideIndexx++;
    updateSlideVisibility();
  }
}

function previousSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = 0;
  }
  showSlide();
  if (slideIndexx > 0) {
    slideIndexx--;
    updateSlideVisibility();
  }
}

const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);


function viewtrans(){
  window.location.href = "BankTransaction.html"; 
}

function logout(){
  window.location.href = "login.html"; 
}

function loan(){
  window.location.href = "LoanHtml.html"; 
}

function report(){
  window.location.href = "Report_Technical_Issues.html"; 
}


// const container = document.querySelector('.transaction-container');
// const transactionWrapper = document.querySelector('.transaction-wrapper');
// const filterSelect = document.getElementById('transaction-type');
// const filterDate = document.getElementById('transaction-date');
// var startDate = document.getElementById("startDate").value;
// var endDate = document.getElementById("endDate").value;

// filterSelect.addEventListener('change', () => {
//   console.log("no it doesnt");
//   filterTransactions();
// });

// filterDate.addEventListener('change', () => {
//   filterTransactions();
// });

// function filterTransactions() {
//   const selectedType = filterSelect.value.toLowerCase(); // Convert the selected type to lowercase
//   const selectedDate = filterDate.value;
//   const transactions = transactionWrapper.querySelectorAll('.transaction');

//   transactions.forEach((transaction) => {
//     const transactionType = transaction.querySelector('.type').textContent.toLowerCase();
//     const transactionDate = transaction.querySelector('.date').textContent;

//     const typeMatch = selectedType === 'all' || transactionType === selectedType; // Compare lowercase types
//     const dateMatch = selectedDate === '' || transactionDate === selectedDate;

//     if (typeMatch && dateMatch) {
//       transaction.style.display = 'flex';
//     } else {
//       transaction.style.display = 'none';
//     }
//   });
// }

// // Filter transactions based on date range
// function filterTransactions() {
//   // Get the selected date values

//   // Convert the date strings to Date objects
//   var start = new Date(startDate);
//   var end = endDate ? new Date(endDate) : new Date();

//   // Filter the transactions based on the date range
//   var filteredTransactions = transactions.filter(function (transaction) {
//     var transactionDate = new Date(transaction.date);
//     return transactionDate >= start && transactionDate <= end;
//   });

//   // Display the filtered transactions
//   displayTransactions(filteredTransactions);
// }

// // Event listener for the filter button
// var filterButton = document.getElementById("filterButton");
// filterButton.addEventListener("click", filterTransactions);
// Filter transactions based on type and date range
// Filter transactions based on type and/or date range
// ...
// const filterButton = document.getElementById('filterButton');
// const startDateInput = document.getElementById('startDate');
// const endDateInput = document.getElementById('endDate');
// const transactionTypeSelect = document.getElementById('transaction-type');
// const transactionLocationSelect = document.getElementById('transaction-location');
// const transactionWrapper = document.querySelector('.transaction-wrapper');

// // Add click event listener to the filter button
// filterButton.addEventListener('click', filterTransactions);

// // Function to filter transactions based on the selected criteria
// function filterTransactions() {
//     const startDate = startDateInput.value;
//     const endDate = endDateInput.value;
//     const transactionType = transactionTypeSelect.value;
//     const transactionLocation = transactionLocationSelect.value;

//     // Convert the selected dates to Date objects
//     const startDateObj = startDate ? new Date(startDate) : null;
//     const endDateObj = endDate ? new Date(endDate) : new Date();

//     // Loop through each transaction and apply filters
//     const transactions = Array.from(transactionWrapper.getElementsByClassName('transaction'));
//     transactions.forEach(transaction => {
//         const dateStr = transaction.querySelector('.date').textContent;
//         const amount = parseFloat(transaction.querySelector('.amount').textContent);
//         const type = transaction.querySelector('.type').textContent.toLowerCase();
//         const location = transaction.querySelector('.location').textContent.toLowerCase();
//         const transactionDate = new Date(dateStr);

//         // Check if the transaction matches the selected criteria
//         const meetsDateCriteria = (transactionDate >= startDateObj || !startDateObj) && (transactionDate <= endDateObj || !endDateObj|| !transactionDate);
//         const meetsTypeCriteria = transactionType === 'all' || type === transactionType;
//         const meetsLocationCriteria = transactionLocation === 'all' || location === transactionLocation.toLowerCase();

//         // Show/hide the transaction based on the criteria
//         if (meetsDateCriteria && meetsTypeCriteria && meetsLocationCriteria) {
//             transaction.classList.remove('hidden');
//         } else {
//             transaction.classList.add('hidden');
//         }
//     });
// }

// const filterButton1 = document.getElementById('filterButtonn');
// const startDateInput1 = document.getElementById('startDatee');
// const endDateInput1 = document.getElementById('endDatee');
// const transactionTypeSelect1 = document.getElementById('transaction-typee');
// const transactionLocationSelect1 = document.getElementById('transaction-locationn');
// const transactionWrapper1 = document.querySelector('.transaction-wrapperr');

// // Add click event listener to the filter button
// filterButton1.addEventListener('click', filterTransactions1);

// // Function to filter transactions based on the selected criteria
// function filterTransactions1() {
//   console.log("it gets here");
//     const startDate = startDateInput1.value;
//     const endDate = endDateInput1.value;
//     const transactionType = transactionTypeSelect1.value;
//     const transactionLocation = transactionLocationSelect1.value;

//     // Convert the selected dates to Date objects
//     const startDateObj = startDate ? new Date(startDate) : null;
//     const endDateObj = endDate ? new Date(endDate) : new Date();

//     // Loop through each transaction and apply filters
//     const transactions = Array.from(transactionWrapper1.getElementsByClassName('transactionn'));
//     transactions.forEach(transactionn => {
//       console.log("it should get here");
//         const dateStr = transactionn.querySelector('.date').textContent;
//         const amount = parseFloat(transactionn.querySelector('.amount').textContent);
//         const type = transactionn.querySelector('.type').textContent.toLowerCase();
//         const location = transactionn.querySelector('.location').textContent.toLowerCase();
//         const transactionDate = new Date(dateStr);

//         // Check if the transaction matches the selected criteria
//         const meetsDateCriteria = (transactionDate >= startDateObj || !startDateObj) && (transactionDate <= endDateObj || !endDateObj|| !transactionDate);
//         const meetsTypeCriteria = transactionType === 'all' || type === transactionType;
//         const meetsLocationCriteria = transactionLocation === 'all' || location === transactionLocation.toLowerCase();

//         // Show/hide the transaction based on the criteria
//         if (meetsDateCriteria && meetsTypeCriteria && meetsLocationCriteria) {
//             transactionn.style.display='block';
//         } else {
//             transactionn.style.display='none';
//         }
//     });
// }

const arrowLeftt = document.querySelector(".arrow-left");
const arrowRightt = document.querySelector(".arrow-right");


// Function to update the visibility of arrows
function updateSlideVisibility() {
  if (slideIndexx === 0) {
    arrowLeftt.classList.add("hidden");
    arrowRightt.classList.remove("hidden");
  } else if (slideIndexx === slides.length - 1) {
    arrowLeftt.classList.remove("hidden");
    arrowRightt.classList.add("hidden");
  }
  else {
    arrowLeftt.classList.add("hidden");
    arrowRightt.classList.add("hidden");
  }
}

// Initial update of arrow visibility
updateSlideVisibility();

