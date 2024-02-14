<?php

if(!isset($_REQUEST['name']) ||
!isset($_REQUEST['email'])||
!isset($_REQUEST['phone']) ||
!isset($_REQUEST['brief'])
)
{
    die("Name,email,phone,brief is required for the request");
}
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$phone = $_REQUEST['phone'];
$brief = $_REQUEST['brief'];
       
$to = "info@kindledigitalpublisher.com";
$subject = "LEAD";

$message = "<h1>Request to start</h1>";
$message.= "<table width='100%' border='1'>";
$message.= "<tbody>";
$message.= "<tr><td colspan='5' align='center' style='font-size: 25px;font-weight: 800;'>User Details</td></tr>";
$message.= "<tr>
            <th>Name</th>
            <th>email</th>
            <th>Phone</th>
            <th>brief</th>
        </tr>";
$message.= "<tr>
            <td>$name</td>
            <td>$email</td>
            <td>$phone</td>
            <td>$brief</td>
        </tr>";
$message.= "</tbody>";
$message.= "</table>";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <info@kindledigitalpublisher.com>' . "\r\n";
$headers .= 'Cc: info@kindledigitalpublisher.com' . "\r\n";

mail($to,$subject,$message,$headers);
    header("location:/thank-you/");
    
?>