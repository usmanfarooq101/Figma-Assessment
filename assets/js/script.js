function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Set default tab to active
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("LeaveManagement").style.display = "block";
});


document.querySelector('.toggle-btn').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('collapsed');
});


// Handle the notification panel toggle
document.getElementById('notification-icon').addEventListener('click', function() {
    const panel = document.getElementById('notification-panel');
    if (panel.classList.contains('hidden')) {
      panel.classList.remove('hidden');
    } else {
      panel.classList.add('hidden');
    }
  });
  
  // Mark all as read button
  document.getElementById('mark-as-read').addEventListener('click', function() {
    alert('All notifications marked as read!');
  });
  
  
