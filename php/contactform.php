<?php
if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $reason = $_POST['reason'];
  $mailFrom = $_POST['mail'];

  $mailTo = "letitia.tyrrell@hotmail.com";
  $headers = "From: ".$mailFrom;
  $txt = "You have recieved an email from ".$name.".\n\n".$message;

  mail($mailTo, $subject, $txt, $headers);
  header("Location: index.php?mailsent");

}
 ?>
