function toggleSection(sectionId) {
  var elements = document.getElementsByClassName("sections");

  for (var i = 0; i < elements.length; i++) {
    if (elements[i].id === sectionId) {
      elements[i].classList.remove("hidden");
    } else {
      elements[i].classList.add("hidden");
    }
  }
}
const inputBox = document.getElementById('inputBox');
const myButton = document.getElementById('myButton');

inputBox.addEventListener('input', function () {
  if (inputBox.value !== '') {
    myButton.classList.add('active');
  } else {
    myButton.classList.remove('active');
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const inputBox = document.getElementById('inputBox');
  const myButton = document.getElementById('myButton');
  const searchResults = document.getElementById('hlist');

  myButton.addEventListener('click', function (event) {

    // Retrieve the value from the search input
    const searchText = inputBox.value.trim();
    let substrings = [];
    word = "mohamed";
    for (let i = 0; i < word.length; i++) {
      for (let j = i + 1; j <= word.length; j++) {
        let substring = word.slice(i, j);
        substrings.push(substring);
      }
    }
    // Check if the search text is equal to "mohamed"
    if (substrings.includes(searchText)) {
      searchResults.classList.remove('hidden'); // Show the search results
    }
    else {
      searchResults.classList.add('hidden');
    }
  });
});

function viewd(sectionId) {
  var elements = document.getElementsByClassName("details");

  for (var i = 0; i < elements.length; i++) {
    if (elements[i].id === sectionId) {
      elements[i].classList.remove("hidden");
    } else {
      elements[i].classList.add("hidden");
    }
  }
}

const reply1 = document.getElementById('reply1');
const submit1 = document.getElementById('submit1');

reply1.addEventListener('input', function () {
  if (reply1.value !== '') {
    submit1.classList.add('active');
  } else {
    submit1.classList.remove('active');
  }
});
const question1 = document.getElementById('question1');

submit1.addEventListener('click', function (event) {
  event.preventDefault();
  if (reply1.value !== '') {
    question1.classList.add('hidden');
  }
});


const reply2 = document.getElementById('reply2');
const submit2 = document.getElementById('submit2');

reply2.addEventListener('input', function () {
  if (reply2.value !== '') {
    submit2.classList.add('active');
  } else {
    submit2.classList.remove('active');
  }
});
const question2 = document.getElementById('question1');

submit2.addEventListener('click', function (event) {
  event.preventDefault();
  if (reply2.value !== '') {
    question2.classList.add('hidden');
  }
});
const name1 = document.getElementById('username');
const email1 = document.getElementById('email');
const password1 = document.getElementById('password');
const savechanges = document.getElementById('savechanges');

name1.addEventListener('input', function () {
  if (name1.value !== '' && email1.value !== '' && password1.value !== '') {
    savechanges.classList.add('active');
  } else {
    savechanges.classList.remove('active');
  }
});

email1.addEventListener('input', function () {
  if (name1.value !== '' && email1.value !== '' && password1.value !== '') {
    savechanges.classList.add('active');
  } else {
    savechanges.classList.remove('active');
  }
});

password1.addEventListener('input', function () {
  if (name1.value !== '' && email1.value !== '' && password1.value !== '') {
    savechanges.classList.add('active');
  } else {
    savechanges.classList.remove('active');
  }
});

function increaseNumber(id, maxNumber) {
  var element = document.getElementById(id);
  var currentNumber = parseInt(element.innerText);

  // Increase the number every 100 milliseconds
  if (maxNumber === 89) {
    var interval = setInterval(function () {
      currentNumber++;
      element.innerText = currentNumber + "%";

      if (currentNumber >= maxNumber) {
        clearInterval(interval);
      }
    }, 2);
  }
  else if (maxNumber === 2000 | maxNumber === 2500 | maxNumber === 3000) {
    var interval = setInterval(function () {
      currentNumber++;
      element.innerText = "$" + currentNumber;

      if (currentNumber >= maxNumber) {
        clearInterval(interval);
      }
    }, 2);
  }
  else {
    var interval = setInterval(function () {
      currentNumber++;
      element.innerText = currentNumber;

      if (currentNumber >= maxNumber) {
        clearInterval(interval);
      }
    }, 2);
  }
}

increaseNumber("counter", 265);
increaseNumber("counterr", 120);
increaseNumber("counterrr", 2000);
increaseNumber("counterrrr", 89);
increaseNumber("counter1", 2500);
increaseNumber("counter2", 1000);
increaseNumber("counter3", 3);
increaseNumber("counter4", 3000);


function updateStatus(action) {
  var status = "";

  // Check the action and update the status accordingly
  if (action === "accept" | action === "accept1") {
    status = "Approved";
  } else if (action === "reject" | action === "reject1") {
    status = "Rejected";
  }

  // Get all elements with the status class
  if (action === "accept" || action === "reject") {
    var elements = document.querySelectorAll(".status");
  }
  else {
    var elements = document.querySelectorAll(".status1");
  }

  // Update the status for each element
  elements.forEach(function (element) {
    element.innerHTML = status;
  });

  if (action === "accept" | action === "reject") {
    const acceptr = document.getElementById('buttons2');
    acceptr.style.display='none';
  } else {
    const acceptr = document.getElementById('buttons1');
    acceptr.classList.add('hidden');
  }
}

function logout(){
  window.location.href = "login.html"; 
}

const fileInput = document.getElementById("fileInput");

fileInput.addEventListener("change", function() {
  const files = Array.from(fileInput.files);
  // Do something with the selected files
});
