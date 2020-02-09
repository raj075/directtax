<?php

if(isset($_POST['submit'])){
  $fname=$_POST['firstname'];
  $lname=$_POST['lastname'];
  $phone=$_POST['phone'];
  $message=$_POST['subject'];

  $mailTo = "tirtha.raj075@gmail.com";
  $headers = "From: ".$fname;
  $txt="You have received an e-mail from ".$fname.".\n\n"

  mail($mailTo,$subject,$txt,$headers);
  header("Location: index.php?mailsend");
}

 ?>
