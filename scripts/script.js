import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyDrm2QShTbbwiC0gpPDPP2LfdkdwQTZ5MI",
//     authDomain: "remotestorage-b0ea0.firebaseapp.com",
//     databaseURL: "https://remotestorage-b0ea0-default-rtdb.europe-west1.firebasedatabase.app",
//     projectId: "remotestorage-b0ea0",
//     storageBucket: "remotestorage-b0ea0.appspot.com",
//     messagingSenderId: "997644324716",
//     appId: "1:997644324716:web:641faa74f9c4ddd39f2d49"
// };

const firebaseConfig = {
    apiKey: "AIzaSyA25n24LORcavMhr-PRNw835R4SJhensX8",
    authDomain: "joinjw-316a7.firebaseapp.com",
    databaseURL: "https://joinjw-316a7-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "joinjw-316a7",
    storageBucket: "joinjw-316a7.appspot.com",
    messagingSenderId: "159255183922",
    appId: "1:159255183922:web:77b642c0dd49be0633f22b"
  };

let app = initializeApp(firebaseConfig);
let auth = getAuth();
let guestLogin = document.getElementById("guest-login");
let login = document.getElementById("login");
let errorContainer = document.getElementById('error');
let errorInput = document.getElementById('password');

/**
 * Handles the login button click event, signs in the user with email and password,
 * and redirects to the summary page on success. Displays error message on failure.
 * 
 * @param {Event} event - The click event.
 */
login.addEventListener('click', function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            window.location.href = "summary.html";
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            errorContainer.style.display = 'block';
            errorInput.style.borderColor = '#ff8190';
        });
});

/**
 * Handles the guest login button click event, signs in the user anonymously,
 * and redirects to the summary page on success. Displays error message on failure.
 * 
 * @param {Event} event - The click event.
 */
guestLogin.addEventListener('click', function (event) {
    event.preventDefault();

    signInAnonymously(auth)
        .then(() => {
            window.location.href = "summary.html";
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
        });
});

/**
 * Sets the background image of the password input field to a lock icon.
 */
function loadPasswordImage() {
    let passwordImage = document.getElementById('password');
    passwordImage.style.backgroundImage = 'url(./assets/img/lock.png)';
};

window.loadPasswordImage = loadPasswordImage;

/**
 * Sets the background image of the password input field to a visibility icon.
 */
function showPasswordImage() {
    let passwordImage = document.getElementById('password');
    passwordImage.style.backgroundImage = 'url(./assets/img/visibility.png)';
};

window.showPasswordImage = showPasswordImage;

/**
 * Hides the password image by setting a different background image.
 */
function hidePasswordImage() {
    let passwordImage = document.getElementById('password');
    passwordImage.style.backgroundImage = 'url(./assets/img/visibility_off.png)';
};

window.hidePasswordImage = hidePasswordImage;

/**
 * Toggles the password visibility.
 */
function showPassword() {
    let x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
};

window.showPassword = showPassword;

/**
 * Sets the password input type to "password".
 */
function hidePassword() {
    let x = document.getElementById("password");
    x.type = "password";
};

window.hidePassword = hidePassword;

/**
 * Handles the click event on the password input field to toggle visibility
 * when clicking on the background image area.
 * @param {MouseEvent} event - The mouse event.
 */
function handleShowpasswordClick(event) {
    let input = document.getElementById("password");
    let clickX = event.clientX;
    let inputRight = input.getBoundingClientRect().right;

    if (clickX >= inputRight - 30) {
        showPassword();
        hidePasswordImage();
    }
};

window.handleShowpasswordClick = handleShowpasswordClick;

