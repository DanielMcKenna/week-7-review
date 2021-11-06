const alertUserDetails = (event) => {
  // Select the email and password inputs and get their values
  event.preventDefault();
  alert(
    `Email: ${event.target.email.value}\nPassword: ${event.target.password.value}`
  );
};

// Select form element

const logInForm = document.querySelector("#login-form");

// Add an event listener that will use the 'alertUserDetails' function defined above as the callback

logInForm.addEventListener("submit", alertUserDetails);
