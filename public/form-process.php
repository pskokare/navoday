<?php

	$errorMSG = "";

	// FIRSTNAME
	if (empty($_POST["fname"])) {
		$errorMSG = "First Name is required. ";
	} else {
		$fname = $_POST["fname"];
	}

	// LASTNAME
	if (empty($_POST["lname"])) {
		$errorMSG = "Last Name is required. ";
	} else {
		$lname = $_POST["lname"];
	}

	// PHONE
	if (empty($_POST["call"])) {
		$errorMSG .= "Phone is required. ";
	} else {
		$call = $_POST["call"];
	}

	// EMAIL
	if (empty($_POST["mail"])) {
		$errorMSG .= "Email is required. ";
	} else {
		$mail = $_POST["mail"];
	}

	// MESSAGE
	if (empty($_POST["msg"])) {
		$errorMSG .= "Message is required. ";
	} else {
		$msg = $_POST["msg"];
	}

	$subject = 'Contact Inquiry from Website';

	//$EmailTo = "info@yourdomain.com"; // Replace with your email.
    $EmailTo = "support@arisetheme.com";
    
	// prepare email body text
	$Body = "";
	$Body .= "fname: ";
	$Body .= $fname;
	$Body .= "\n";
	$Body .= "lname: ";
	$Body .= $lname;
	$Body .= "\n";	
	$Body .= "call: ";
	$Body .= $call;
	$Body .= "\n";
	$Body .= "mail: ";
	$Body .= $mail;
	$Body .= "\n";
	$Body .= "msg: ";
	$Body .= $msg;
	$Body .= "\n";

	// send email
	$success = @mail($EmailTo, $subject, $Body, "From:".$email);

	// redirect to success page
	if ($success && $errorMSG == ""){
	   echo "success";
	}else{
		if($errorMSG == ""){
			echo "Something went wrong :(";
		} else {
			echo $errorMSG;
		}
	}

?>