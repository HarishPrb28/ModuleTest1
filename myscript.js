// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

$("#password, #confirmpassword").on("keyup", function () {
  $(".confirm-message")
    .removeClass("success-message")
    .removeClass("error-message");

  let password = $("#password").val();
  let confirm_password = $("#confirmpassword").val();

  if (password === "") {
    $(".confirm-message")
      .text("Password Field cannot be empty")
      .addClass("error-message");
  } else if (confirm_password === "") {
    $(".confirm-message")
      .text("Confirm Password Field cannot be empty")
      .addClass("error-message");
  } else if (confirm_password === password) {
    $(".confirm-message").text("Password Match!").addClass("success-message");
  } else {
    $(".confirm-message")
      .text("Password Doesn't Match!")
      .addClass("error-message");
  }
});
