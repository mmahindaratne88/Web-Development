document.addEventListener('DOMContentLoaded', function() {
  // Function to update local date and time
  function updateLocalDateTime() {
    const now = new Date();
    const localDateTime = now.toLocaleString();
    document.getElementById('local-time').textContent = `Current date and time: ${localDateTime}`;
  }

  // Initial call to display the local date and time
  updateLocalDateTime();

  // Update the local date and time every second
  setInterval(updateLocalDateTime, 1000);
});
