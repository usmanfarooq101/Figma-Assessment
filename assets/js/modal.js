function setupModal(buttonSelector, modalSelector, messageSelector, actionType) {
    const modal = document.querySelector(modalSelector);
    const closeBtn = modal.querySelector('.close');
    const btnNo = modal.querySelector('.btn-no');
    const btnYes = modal.querySelector('.btn-yes'); // Yes button
    const buttons = document.querySelectorAll(buttonSelector);
    const messageElement = modal.querySelector(messageSelector);

    // Function to open modal with a dynamic message
    function openModal(message) {
        messageElement.textContent = message;
        modal.classList.add('active');
        modal.style.display = 'block';
    }

    // Function to close modal
    function closeModal() {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500); // Timeout for the slide-up transition
    }

    // Function to display snackbar with dynamic messages and progress color
    function showSnackbar(message, progressColor) {
        const snackbar = document.getElementById('snackbar');
        const snackbarBody = snackbar.querySelector('.snackbar-body');
        const snackbarProgress = snackbar.querySelector('.snackbar-progress');

        snackbarBody.textContent = message; // Set snackbar message
        snackbarProgress.style.backgroundColor = progressColor; // Set progress bar color
        snackbar.style.display = 'block';

        // Automatically close the snackbar after 5 seconds
        setTimeout(() => {
            closeSnackbar();
        }, 5000);
    }

    // Event listeners for opening modal when buttons are clicked
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const leaveDetails = btn.closest('tr').querySelector('td:nth-child(2)').textContent;
            const actionMessage = actionType === 'approve' 
                ? `Are you sure you want to approve ${leaveDetails}'s leave?` 
                : `Are you sure you want to reject ${leaveDetails}'s leave?`;
            openModal(actionMessage);

            // Update the "YES" button action
            btnYes.onclick = () => {
                closeModal(); // Close the modal
                const snackbarMessage = actionType === 'approve' 
                    ? `${leaveDetails}'s leave has been approved!` 
                    : `${leaveDetails}'s leave has been rejected!`;
                const progressColor = actionType === 'approve' ? '#FFCC00' : 'red'; // Yellow for approve, Red for reject
                showSnackbar(snackbarMessage, progressColor); // Show snackbar with appropriate message and progress color
            };
        });
    });

    // Event listener for closing modal when close button or "NO" button is clicked
    closeBtn.addEventListener('click', closeModal);
    btnNo.addEventListener('click', closeModal);

    // Close modal if user clicks outside modal content
    window.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };
}

// Setup approve modal
setupModal('.approve', '#confirmationModal', '#confirmationMessage', 'approve');

// Setup reject modal
setupModal('.reject', '#rejectModal', '#rejectionMessage', 'reject');
