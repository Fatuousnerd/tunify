<?php

    if(isset($user)){

        die("Welcome");

    } else {

        //die("Sign in first");
        header("Location: ../Signup/index.html");

    }

?>