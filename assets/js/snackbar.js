function showSnackbar(message, progressColor) {
    var snackbar = document.getElementById('snackbar');
    var snackbarBody = snackbar.querySelector('.snackbar-body');
    var snackbarProgress = snackbar.querySelector('.snackbar-progress');

    snackbarBody.textContent = message; // Update snackbar body text
    snackbarProgress.style.backgroundColor = progressColor; // Set progress bar color
    snackbar.style.display = 'block';

    // Automatically close the snackbar after 5 seconds
    setTimeout(function() {
        closeSnackbar();
    }, 5000);
}

function closeSnackbar() {
    var snackbar = document.getElementById('snackbar');
    snackbar.style.display = 'none';
}
