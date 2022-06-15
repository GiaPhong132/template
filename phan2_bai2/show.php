<?php
$con = mysqli_connect("localhost", "root", "", "examples");
$sql = "SELECT * FROM cars";
$res = mysqli_query($con, $sql);

if (!$con) {
	die("Connection failed: " . mysqli_connect_error());
}
$myArray = array();

while ($row = mysqli_fetch_assoc($res)) {
	$myArray[] = $row;
}
$information = json_encode($myArray);
echo $information;