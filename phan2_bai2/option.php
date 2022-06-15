<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "webb";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
// Insert
if (isset($_POST['insert_row'])) {
    $email = $_POST['email_val'];
    $fname = $_POST['fname_val'];
    $lname = $_POST['lname_val'];
    $age = $_POST['age_val'];

    // Query
    // $completed = true;
    // if (strlen($name) < 5 || strlen($name) > 40) {
    //     echo "Please enter string has length in range [5:40]!";
    //     $completed = false;
    // }
    // if ($year < 1990 || $year > 2015) {
    //     echo "Please enter integer number in range [1990:2015]!";
    //     $completed = false;
    // }
    // if ($completed) {
    $sql =  "INSERT INTO user(email, fname, lname, age) VALUES($email, '$fname','$lname', $age, NOW())";
    mysqli_query($conn, $sql);
    //     if (mysqli_query($conn, $sql)) {
    //         // echo "New record created successfully";
    //         echo "success";
    //     } else {
    //         echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    //     }
    // }
    exit();
}

// Update
if (isset($_POST['edit_row'])) {
    $email = $_POST['email_val'];
    $fname = $_POST['fname_val'];
    $lname = $_POST['lname_val'];
    $age = $_POST['age_val'];
    $createAt = $_POST['createAt_val'];


    // $completed = true;
    // if (strlen($name) < 5 || strlen($name) > 40) {
    //     echo "Please enter string has length in range [5:40]!";
    //     $completed = false;
    // }
    // if ($year < 1990 || $year > 2015) {
    //     echo "Please enter integer number in range [1990:2015]!";
    //     $completed = false;
    // }
    // if ($completed) {
    //     $sql =  "UPDATE `cars` SET `name`='$name', `year` = $year WHERE id = $id";
    //     if (mysqli_query($conn, $sql)) {
    //         // echo "Record updated successfully";
    //         echo "success";
    //     } else {
    //         echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    //     }
    // } else echo "Please come back and re-enter form";
    unset($_POST);
    exit();
}

// Delete
if (isset($_POST['delete_row'])) {
    $email = $_POST['id'];
    $sql =  "DELETE FROM cars WHERE id = $id";
    if (mysqli_query($conn, $sql)) {
        echo "Record deleted successfully";
    } else {
        echo "Error deleting record: " . mysqli_error($conn);
    }
    exit();
}
