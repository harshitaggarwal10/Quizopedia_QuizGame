const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});



const signInForm = document.querySelector(".sign-in-form");
    
      signInForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
    
        const username = this.querySelector('input[type="text"]').value;
        const password = this.querySelector('input[type="password"]').value;
    
        if (username.trim() === '' || password.trim() === '') {
          // Show SweetAlert2 alert for empty fields
          Swal.fire({
            title: 'Error!',
            text: 'Please fill in all fields.',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        } else {
          // Show loading screen using SweetAlert2
          Swal.fire({
            title: 'Logging in...',
            html: 'Please wait while we process your request.',
            allowOutsideClick: false,
            onBeforeOpen: () => {
              Swal.showLoading();
            }
          });
    
          // Mock login check, assuming successful login
          // Replace this with your actual login logic, typically an API call or authentication check
          // Here, for demonstration, we'll simulate a successful login after 1 second
          setTimeout(() => {
            // Close loading screen
            Swal.close();
    
            // Show success message
            Swal.fire({
              title: 'Success!',
              text: 'Logged in successfully!',
              icon: 'success',
              confirmButtonText: 'OK',
            }).then((result) => {
              if (result.isConfirmed) {
                // Redirect the user to a specific website
                window.location.href = "quiz.html"; // Replace with your desired website URL
              }
            });
    
            // Clear form fields after successful login
            this.reset(); // Reset the sign-in form
          }, 1000);
        }
      });
    
      const signUpForm = document.querySelector(".sign-up-form");
    
      signUpForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
    
        const username = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const password = this.querySelector('input[type="password"]').value;
    
        if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
          // Show SweetAlert2 alert for empty fields
          Swal.fire({
            title: 'Error!',
            text: 'Please fill in all fields.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        } else {
          // Show loading screen using SweetAlert2
          Swal.fire({
            title: 'Signing up...',
            html: 'Please wait while we process your request.',
            allowOutsideClick: false,
            onBeforeOpen: () => {
              Swal.showLoading();
            }
          });
    
          // Mock signup process, assuming successful signup
          // Replace this with your actual signup logic, typically an API call or database insertion
          // Here, for demonstration, we'll simulate a successful signup after 1 second
          setTimeout(() => {
            // Close loading screen
            Swal.close();
    
            // Show success message
            Swal.fire({
              title: 'Success!',
              text: 'Signed up successfully!',
              icon: 'success',
              confirmButtonText: 'OK'
            }).then((result) => {
              if (result.isConfirmed) {
                // Redirect the user to a specific website
                window.location.href = "quiz.html"; // Replace with your desired website URL
              }
            }).then((result) => {
              if (result.isConfirmed) {
                // Redirect the user to a specific website
                window.location.href = "quiz.html"; // Replace with your desired website URL
              }
            });
    
            // Clear form fields after successful signup
            this.reset(); // Reset the sign-up form
          }, 1000);
        }
      });


      