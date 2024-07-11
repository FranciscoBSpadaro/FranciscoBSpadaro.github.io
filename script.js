// Get the form element
const form = document.querySelector('form');

// Add an event listener for the form submission
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form data
  const formData = new FormData(event.target);

  // Create an object to store the form data
  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }

  // Send the form data to a server or email service
  sendMessage(data);
});

// Function to send the message
function sendMessage(data) {
  // You can use an AJAX request or a third-party service to send the message
  // For example, you can use an email service like EmailJS or Formspree

  // Here's an example using EmailJS
  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data)
    .then(function(response) {
      console.log('Message sent successfully!', response.status, response.text);
      // You can display a success message to the user
    }, function(error) {
      console.error('Failed to send message:', error);
      // You can display an error message to the user
    });
}
