document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('Login');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Retrieve the username and password values from the form
      const username = document.getElementById('login').value;
      const password = document.getElementById('pass').value;
  
      // Here you can perform any validation or further processing of the username and password
      // For example, you can check if they are not empty before proceeding with the login
  
      // Placeholder code to demonstrate form submission
      alert('Username: ' + username + '\nPassword: ' + password);
    });
  });
  