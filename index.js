const alertUserDetails = (event) => {
  // Select the email and password inputs and get their values
  event.preventDefault();

  const email = event.target.email.value;
  const password = event.target.password.value;
  alert(`Email: ${email}\nPassword: ${password}`);
};

// Select form element

const logInForm = document.querySelector("#login-form");

// Add an event listener that will use the 'alertUserDetails' function defined above as the callback

logInForm.addEventListener("submit", alertUserDetails);
