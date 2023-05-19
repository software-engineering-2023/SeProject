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
$(document).ready(function() {
  $('#calendar').fullCalendar({
      // Calendar Options
      header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
      },
      defaultView: 'month',
      editable: true,
      eventLimit: true,
      events: [
          // Calendar Events
          {
              title: 'Meeting',
              start: '2023-05-19T10:00:00',
              end: '2023-05-19T11:30:00',
              backgroundColor: '#ff9f89',
              borderColor: '#ff9f89'
          },
          {
              title: 'Conference',
              start: '2023-05-22',
              end: '2023-05-24',
              backgroundColor: '#79c6f0',
              borderColor: '#79c6f0'
          },
          // Add more events here...
      ]
  });
});

