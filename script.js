const nav = document.getElementById('nav'),
 i = document.getElementById('i'),
 c1 = document.getElementsByTagName('div')[2],
 c2 = document.getElementsByTagName('div')[3],
 c3 = document.getElementsByTagName('div')[4];

i.addEventListener('click', function () {
 if (nav.className.match(/\bopen\b/)) {
  nav.classList.remove('open');
  c1.classList.remove('close-c1');
  c2.classList.remove('close-c2');
  c3.classList.remove('close-c3');
 } else {
  nav.classList.add('open');
  c1.classList.add('close-c1');
  c2.classList.add('close-c2');
  c3.classList.add('close-c3');
 }
});
nav.addEventListener('click', function () {
 nav.classList.remove('open');
 c1.classList.remove('close-c1');
 c2.classList.remove('close-c2');
 c3.classList.remove('close-c3');
});

// Set the target date to 3 days from now
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 3);

// Update the timer every second
const timer = setInterval(updateTimer, 1000);

function updateTimer() {
 const currentDate = new Date();
 const timeDifference = targetDate - currentDate;

 if (timeDifference <= 0) {
  clearInterval(timer); // Stop the timer when it reaches zero
 } else {
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Display the time in the HTML elements
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
 }
}

// Initial call to set the timer display
updateTimer();