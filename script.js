const APP = {
  init() {
    APP.InitListeners();
    console.log("init app");
  },

  InitListeners() {
    //DOM Elements
    const emailInput = document.getElementById("email");
    const postcodeInput = document.getElementById("postcode");
    const passwordInput = document.getElementById("password");
    const passwordConfirmInput = document.getElementById("pass-confirm");
    //Event Listeners
    emailInput.addEventListener("click", () => {
      console.log("bruh");
    });
  },
  testEmail(ev) {
    console.log("hello test email");
    let email = ev.target;
  },
  //event listeners
};

document.addEventListener("DOMContentLoaded", APP.init);
