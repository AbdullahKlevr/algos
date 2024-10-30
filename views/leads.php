<?php

/*$domain = "www.algosecom.com";
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$phone = $_REQUEST['phone'];
$brief = $_REQUEST['brief'];
$news = $_REQUEST['news'];
$route = $_REQUEST['route'];
$brand = $_REQUEST['brand'];
$tag = $_REQUEST['tag'];
$price = $_REQUEST['price'];

$data=array(
    'name'=> $name,
    'email'=>$email,
    'phone'=>$phone,
    'brief'=>$brief,
    'news'=>1,
    'route'=>$route,
    'brand'=>$brand,
    'tag' => $tag,
    'price'=> $price,
    'domain' => $domain
);
if($_REQUEST['phone'] == '5556660606' || $_REQUEST['phone'] == '555-666-0606'){
    exit(header("location:/"));
}
if ($_POST['token'] == $_SESSION['token']) {
$payload=json_encode($data);
$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_URL => "https://crm.klevrmedia.net/api/customer",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 500,
    CURLOPT_FOLLOWLOCATION => false,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_HTTPHEADER => array(
        'Content-Type: application/json',
    ),
));

$response = curl_exec($curl);
$error = curl_error($curl);
// var_dump($response,$error);
// die;

$decodeResponse = json_decode($response);

$msg = $decodeResponse[1];

$_SESSION['thanksMsg'] = $msg;

header("location:/thank-you/?successMsg=$msg");
}
else{
    exit(header("location:/"));
}

*/

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
       
$to = "info@algosecom.com";
$subject = "SIGN UP";

$message = "<h1>Website Sign-up</h1>";
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
$msg = "Message Succesfuly sent";
// More headers
$headers .= 'From: <info@rjbatchelor.com>' . "\r\n";
// $headers .= 'Cc: info@rjbatchelor.com' . "\r\n";
    if(mail($to,$subject,$message,$headers)){
        header("location:/thank-you/?successMsg=$msg");
    }
    else{
    exit(header("location:/"));
}
    
?>