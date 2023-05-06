<?
 
 // Start a session to access session variables
 session_start();
 
 // Check if user is logged in
 if(isset($_SESSION['usern'])) {
   // If logged in, retrieve the username from the session variable
   $username = $_SESSION['usern'];
 
   // Echo out the username in an HTML tag
   echo "<p>Welcome, $username!</p>";
 } else {
   // If not logged in, redirect to the login page
   header('Location: index.html');
   exit;
 }

 

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>
<body>
    <h1>HOME</h1>

    <?php if( isset($user)): ?>
            <p>Hello <?= htmlspecialchars($user["usern"]) ?></p>
            <p><a href="logout.php">Log Out</a></p>
        <?php else: ?> 
            <p><a href="../Signup/index.html">Signup</a> or <a href="index.html">Login</a></p>
    <?php endif; ?> 
    
    
</body>
</html>
