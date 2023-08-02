// signin.js
// Function to handle form submission
function signup(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const option = document.querySelector('input[name="option"]:checked').value;

    // Your Firebase registration and authentication code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User registration successful
            const user = userCredential.user;

            // Save additional user information to Firestore or Realtime Database if needed
            // For simplicity, we'll just display a success message here
            document.getElementById("message").textContent = "User registration successful!";
        })
        .catch((error) => {
            // Handle errors during user registration
            const errorMessage = error.message;
            document.getElementById("message").textContent = errorMessage;
        });
}

// Function to handle "Forgot Password" link
function forgotPassword() {
    const email = prompt("Please enter your email:");

    if (email) {
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                // Email sent successfully
                alert("Password reset email sent. Please check your inbox.");
            })
            .catch((error) => {
                // Handle errors while sending reset email
                const errorMessage = error.message;
                alert(errorMessage);
            });
    }
}
