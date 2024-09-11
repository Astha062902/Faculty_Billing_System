<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$db_conn = mysqli_connect("localhost", "root", "", "faculty_billing_system");
if ($db_conn === false) {
    die("ERROR: Could Not Connect. " . mysqli_connect_error());
}

$method = $_SERVER['REQUEST_METHOD'];
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    echo "work3";
    $userpostdata = json_decode(file_get_contents("php://input"));

    if (!$userpostdata) {
        echo json_encode(["error" => "Invalid JSON data."]);
        return;
    }

    $name = $userpostdata->name ?? ''; // Use null coalescing operator to provide default value if not set
    $address = $userpostdata->address ?? '';
    $email = $userpostdata->email ?? '';
    $designation = $userpostdata->designation ?? '';
    $amount = $userpostdata->amount ?? '';
    $telephone = $userpostdata->telephone ?? '';
    $mobile = $userpostdata->mobile ?? '';
    $bank_name = $userpostdata->bank_name ?? '';
    $branch = $userpostdata->branch ?? '';
    $acc_no = $userpostdata->acc_no ?? '';
    $IFSC = $userpostdata->IFSC ?? '';
    $password = $userpostdata->password ?? '';

    $result = mysqli_query($db_conn, "INSERT INTO faculty_details 
            (name, address, email_id, designation,mobile_no, alternate_no, bank_name, branch_name, account_no, ifsc_code, amount, password) 
            VALUES('$name', '$address', '$email', '$designation', '$telephone', '$mobile', '$bank_name', '$branch', '$acc_no', '$IFSC','$amount','$password')");

    if ($result) {
        echo json_encode(["success" => "User Added Successfully"]);
    } else {
        echo json_encode(["error" => "Error: " . mysqli_error($db_conn)]);
    }


    // case "GET": 
    //     echo "work";
    //     $alluser = mysqli_query($db_conn, "SELECT * FROM faculty_details"); 
    //     if (mysqli_num_rows($alluser) > 0) {
    //         while ($row = mysqli_fetch_array($alluser)) {
    //             $json_array["userdata"][] = array(
    //                 "id" => $row['email_id'],
    //                 "name" => $row["name"],
    //                 "address" => $row["address"],
    //                 "email" => $row["email_id"]
    //             );
    //         }
    //         echo json_encode($json_array["userdata"]);
    //     } else {
    //         echo json_encode(["result" => "Please check the Data"]); 
    //     }
    //     break;

}
