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

inputBox.addEventListener('input', function() {
  if (inputBox.value !== '') {
    myButton.classList.add('active');
  } else {
    myButton.classList.remove('active');
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const inputBox = document.getElementById('inputBox');
  const myButton = document.getElementById('myButton');
  const searchResults = document.getElementById('hlist');

  myButton.addEventListener('click', function(event) {

    // Retrieve the value from the search input
    const searchText = inputBox.value.trim();

    // Check if the search text is equal to "mohamed"
    if (searchText.toLowerCase() === 'mohamed') {
      searchResults.classList.remove('hidden'); // Show the search results
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

reply1.addEventListener('input', function() {
  if (reply1.value !== '') {
    submit1.classList.add('active');
  } else {
    submit1.classList.remove('active');
  }
});
const question1 = document.getElementById('question1');

submit1.addEventListener('click', function(event) {
  event.preventDefault(); 
  question1.classList.add('hidden');
});


const reply2 = document.getElementById('reply2');
const submit2 = document.getElementById('submit2');

reply2.addEventListener('input', function() {
  if (reply2.value !== '') {
    submit2.classList.add('active');
  } else {
    submit2.classList.remove('active');
  }
});