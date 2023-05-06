<?php

session_start();

if (isset($_SESSION["user_id"])){

    $mysqli = require __DIR__ . "/database.php";
    
    $sql = "SELECT * FROM user
            WHERE id = {$_SESSION["user_id"]}";

    $result = $mysqli->query($sql);

    $user = $result->fetch_assoc();

    $nm = "SELECT usern FROM user WHERE id = {$_SESSION["user_id"]}";

    $nam = $mysqli->query($nm);

    //include("../App/index.html");

    //header("Location: ../App/index.html");
    echo "<p>Welcome, $user </p>";

    
} else {
  header('Location: index.html');
}

// Start a session to access session variables
//session_start();

// Check if user is logged in
//if(isset($_SESSION['usern'])) {
  // If logged in, retrieve the username from the session variable
  //$username = $_SESSION['usern'];

  // Echo out the username in an HTML tag
  //echo "<p>Welcome, $username!</p>";
//} else {
  // If not logged in, redirect to the login page
  //header('Location: index.html');
  //exit;
//}

?>
