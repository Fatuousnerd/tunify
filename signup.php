<?php

$password_hash = password_hash($_POST["pass"], PASSWORD_DEFAULT);

$mysqli = require __DIR__ . "/database.php";

$sql = "INSERT INTO users (email, username, password_hash )
        VALUES (?, ?, ?)";

$stmt = $mysqli->stmt_init();

if (! $stmt->prepare($sql)){
    die("SQL Error: " . $mysqli->error);
}

$stmt->bind_param("sss",
                    $_POST["email"],
                    $_POST["username"],
                    $password_hash);

if ( $stmt->execute()){                 
    
    header("Location: success.html");
    exit;

} else {

    if ( $mysqli->errno === 1062){
    
        die("Email already taken!!");

    } else {

        die($mysqli->error . " " . $mysqli->errno);
        
    }
}


