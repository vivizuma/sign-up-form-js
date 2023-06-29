const APP = {
  init() {
    APP.InitListeners();
    console.log("init app");
  },

  InitListeners() {
    //DOM Elements
    const form = document.getElementById("fakeForm");
    const emailInput = document.getElementById("email");
    const postcodeInput = document.getElementById("postcode");
    const passwordInput = document.getElementById("password");
    const passwordConfirmInput = document.getElementById("pass-confirm");
    //Event Listeners
    //after entire value is changed
    emailInput.addEventListener("change", APP.testEmail)
 

    //live while typing
    postcodeInput.addEventListener("input", () => console.log("broseph"));

    //when form is submitted
    form.addEventListener("submit", console.log("checking"));
  },
  testEmail(ev) {
    let email = ev.target;
    console.log(email);
  },
  //Validity Tests
  testPostcode(ev) {},
};

document.addEventListener("DOMContentLoaded", APP.init);
