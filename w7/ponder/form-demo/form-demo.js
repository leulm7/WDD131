function validateForm(event) {
  const theForm = event.target;
  const errors = [];
  let isValid = true;

  // For credit card payment, check if the credit card number is exactly "1234123412341234"
  if (theForm.payment.value === "credit") {
    if (theForm.creditcard.value !== "1234123412341234") {
      isValid = false;
      errors.push("Invalid Credit Card Number");
    }
  }

  // Validate that the full name is "Bob"
  if (theForm.fullName.value !== "Bob") {
    isValid = false;
    errors.push("Your name is not Bob");
  }

  if (!isValid) {
    event.preventDefault();
    showErrors(errors);
    return false;
  }
}

function togglePaymentDetails(e) {
  const theForm = document.querySelector("#checkoutForm");

  // Get the credit card container by selecting the parent of the credit card input.
  const creditCardContainer = document.getElementById("creditcard").parentElement;
  // Get the PayPal container by selecting the parent of the PayPal input.
  const paypalContainer = document.getElementById("paypalUser").parentElement;

  // Hide both payment detail containers initially.
  creditCardContainer.classList.add("hide");
  paypalContainer.classList.add("hide");

  // Remove the 'required' attribute from both inputs.
  theForm.creditcard.required = false;
  theForm.paypalUser.required = false;

  // Depending on the chosen payment method, display the corresponding container and set the required attribute.
  if (theForm.payment.value === "credit") {
    creditCardContainer.classList.remove("hide");
    theForm.creditcard.required = true;
  } else if (theForm.payment.value === "paypal") {
    paypalContainer.classList.remove("hide");
    theForm.paypalUser.required = true;
  }
}

function showErrors(errors) {
  const errorEl = document.querySelector(".errors");
  const html = errors.map((error) => `<p>${error}</p>`);
  errorEl.innerHTML = html.join("");
}

// Attach the change event to the payment select element using its id "payment".
document.querySelector("#payment").addEventListener("change", togglePaymentDetails);
// Attach the submit event to the form.
document.querySelector("#checkoutForm").addEventListener("submit", validateForm);
