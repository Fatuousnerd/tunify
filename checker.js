var name = document.getElementById("name");

//Check if the username session variable is set
if ('<?php echo isset($_SESSION["username"]); ?>' === '1') {
    // Display a personalized welcome message
    console.log('Welcome, <?php echo $_SESSION["username"]; ?>!');
}

// Get the username parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

// If the username parameter is set, display a personalized welcome message
if (username) {
  console.log('Welcome, ' + username + '!');
  name.innerHTML = `<p>Welcome, ${username}</p>`;
} else{
    name.innerHTML = `<p>Sign in</p>`;
}