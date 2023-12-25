// Handling form submission to log activity
document.getElementById('activityForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting
  
  // Get form values
  const activityType = document.getElementById('activityType').value;
  const duration = document.getElementById('duration').value;
  const caloriesBurned = document.getElementById('caloriesBurned').value;
  
  // Here, you would typically send this data to a server for storage
  // For simplicity, let's just log it to the console
  console.log(`Activity Type: ${activityType}, Duration: ${duration} minutes, Calories Burned: ${caloriesBurned}`);
  
  // Clear form fields after logging activity
  document.getElementById('activityType').value = '';
  document.getElementById('duration').value = '';
  document.getElementById('caloriesBurned').value = '';
});
