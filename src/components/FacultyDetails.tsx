// src/components/FacultyDetails.tsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FacultyDetails.css";

// New component for Personal Details section
const PersonalDetails: React.FC<{
  name: string;
  address: string;
  designation: string;
  email: string;
  mobileNo: number;
  alternateNo: number;
}> = ({ name, address, designation, email, mobileNo, alternateNo }) => (
  <div>
    <h3>Personal Details</h3>
    <div>
      <strong>Name:</strong> {name}
    </div>
    <div>
      <strong>Address:</strong> {address}
    </div>
    <div>
      <strong>Designation:</strong> {designation}
    </div>
    <div>
      <strong>Email:</strong> {email}
    </div>
    <div className="contact-details">
      <div>
        <strong>Mobile No.:</strong> {mobileNo}
      </div>
      <div>
        <strong>Alternate No.:</strong> {alternateNo}
      </div>
    </div>
  </div>
);

// New component for Bank Details section
const BankDetails: React.FC<{
  bankName: string;
  branchName: string;
  accountNo: number;
  ifscCode: string;
}> = ({ bankName, branchName, accountNo, ifscCode }) => (
  <div>
    <h3>Bank Details</h3>
    <div>
      <strong>Bank Name:</strong> {bankName}
    </div>
    <div className="bank-details">
      <div>
        <strong>Branch Name:</strong> {branchName}
      </div>
      <div>
        <strong>Account No.:</strong> {accountNo}
      </div>
    </div>
    <div>
      <strong>IFSC Code:</strong> {ifscCode}
    </div>
  </div>
);

const FacultyDetails: React.FC = () => {
  const [facultyData, setFacultyData] = useState<any>({});

  useEffect(() => {
    const fetchFacultyData = async () => {
      try {
        // Make a GET request to your PHP backend
        const response = await axios.get('http://localhost:3000/php/mapdetails.php');
        withCredentials: true,
        console.log("Response from backend:", response.data);
        // Assuming the backend returns an array with a single faculty object
        const facultyObject = response.data[0];
        setFacultyData(facultyObject); // Fetching the first faculty from the array
      } catch (error) {
        console.error('Error fetching faculty data:', error);
      }
    };

    fetchFacultyData();
  }, []);

  return (
    <div className="faculty-details">
      <h2>Faculty Details</h2>
      <PersonalDetails
        name={facultyData.name}
        address={facultyData.address}
        designation={facultyData.designation}
        email={facultyData.email_id}
        mobileNo={facultyData.mobile_no}
        alternateNo={facultyData.alternate_no}
      />
      <BankDetails
        bankName={facultyData.bank_name}
        branchName={facultyData.branch_name}
        accountNo={facultyData.account_no}
        ifscCode={facultyData.ifsc_code}
      />
      {/* Add an edit button here */}
      <button>Edit Details</button>
    </div>
  );
};

export default FacultyDetails;
