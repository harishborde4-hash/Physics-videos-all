const subjects = document.querySelectorAll('.subject');
const backBtn = document.getElementById('backBtn');

// Open YouTube link in a new tab
subjects.forEach(subject => {
  subject.addEventListener('click', () => {
    const url = subject.dataset.url;
    window.open(url, '_blank');
  });
});

// Back button
backBtn.addEventListener('click', () => {
  window.history.back(); // returns to previous portal page
});
