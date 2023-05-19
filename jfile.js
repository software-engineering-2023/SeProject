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

