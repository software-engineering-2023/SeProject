// Get the resolve/reply form and its elements
const resolveReplyForm = document.getElementById('resolve-reply-form');
const replyTextarea = document.getElementById('reply-textarea');
const submitBtn = document.getElementById('submit-btn');
const cancelBtn = document.getElementById('cancel-btn');

// Get all the resolve and reply buttons
const resolveBtns = document.getElementsByClassName('resolve-btn');
const replyBtns = document.getElementsByClassName('reply-btn');

// Add event listeners to resolve buttons
Array.from(resolveBtns).forEach((resolveBtn) => {
  resolveBtn.addEventListener('click', () => {
    resolveReplyForm.classList.remove('hidden');
  });
});

// Add event listeners to reply buttons
Array.from(replyBtns).forEach((replyBtn) => {
  replyBtn.addEventListener('click', () => {
    resolveReplyForm.classList.remove('hidden');
  });
});

// Add event listener to cancel button
cancelBtn.addEventListener('click', (event) => {
  event.preventDefault();
  resolveReplyForm.classList.add('hidden');
});

// Add event listener to submit button
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const replyText = replyTextarea.value;
  // Process the reply and perform necessary actions (e.g., update database, display success message)
  // ...
  resolveReplyForm.classList.add('hidden');
});
