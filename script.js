// resources:
// https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
//
const APP = {
  init() {
    APP.InitListeners();
    console.log("init app");
  },

  InitListeners() {
    //DOM Elements
    const form = document.getElementById("fakeForm");
    const email = document.getElementById("email");
    const postcode = document.getElementById("postcode");
    const password = document.getElementById("password");
    const passwordConfirm = document.getElementById("password-confirm");
    //Event Listeners

    //after entire value is changed
    email.addEventListener("change", APP.testEmail);
    postcode.addEventListener("change", APP.testPostcode);
    password.addEventListener("change", APP.testPassword);
    passwordConfirm.addEventListener("change", APP.testPasswordConfirm);
    // invalid event
    email.addEventListener("invalid", APP.fail);
    postcode.addEventListener("invalid", APP.fail);
    password.addEventListener("invalid", APP.fail);
    passwordConfirm.addEventListener("invalid", APP.fail);
    //valid event
    email.addEventListener("valid", APP.pass);

    //when form is submitted
    form.addEventListener("submit", APP.validateForm);
  },
  testEmail(ev) {
    let email = ev.target;
    email.setCustomValidity("");
    let currently = email.checkValidity();
    console.log("email currently", currently);
    if (!currently) {
      email.setCustomValidity("Please enter a valid email address");
      email.reportValidity();
    }
    if (currently) {
      console.log("valid :>");
    }
  },
  //Validity Tests

  testPostcode(ev) {
    let postcode = ev.target;
    let postcodeInput = postcode.value;
    let postcodeUpper = postcodeInput.toUpperCase();
    postcodeInput = postcodeUpper;
    let postcodeRegex = /^([A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}|GIR ?0A{2})$/i;

    //reset validity message
    postcode.setCustomValidity("");
    let currently = postcode.checkValidity();
    console.log("currently", currently);
    postcode.setCustomValidity("Please enter valid postcode");
    postcode.reportValidity();
  },

  testPassword(ev) {
    let password = ev.target;
    //reset validity msg
    password.setCustomValidity("");
    let currently = password.checkValidity();
    console.log("currently", currently);
    password.setCustomValidity("Password must be between 8-32 characters");
    password.reportValidity();
  },
  testPasswordConfirm(ev) {
    let confirmPass = ev.target;
    let password = document.getElementById("password").value;
    confirmPass.setCustomValidity("");
    let currently = confirmPass.checkValidity();
    if (confirmPass.value !== password) {
      console.log("passwords do not match");
    }
    confirmPass.setCustomValidity("Passwords must match");
    confirmPass.reportValidity();
  },
  validateForm(ev) {
    ev.preventDefault();
    let form = ev.target;
    let email = document.getElementById("email");
    console.log("email valid?:", email.willValidate);
  },
  fail(ev) {
    let field = ev.target;
    //invalid event fired
    console.log("invalid :(((((((((");
  },
  pass(ev) {
    let field = ev.target;
    console.log("valid :))))))))))");
  },
};

document.addEventListener("DOMContentLoaded", APP.init);
