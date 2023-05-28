
function submitIssue(event) {
    event.preventDefault();
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const subject = document.getElementById('subjectInput').value;
    const description = document.getElementById('descriptionTextarea').value;
    
    alert('Issue reported successfully!');
  }
  
  const issueForm = document.getElementById('issueForm');
  issueForm.addEventListener('submit', submitIssue);
  