import React, {useState,MouseEvent} from "react";
import axios from "axios";
import "./signup.css";
import Button from "../components/button";
import { Link } from "react-router-dom";
import { generatePDF } from "./pdf";


const SignUp: React.FC = () => {
  const [reg_value, setreg_value]=useState({name:'',address:'',email:'',designation:'',PAN:'',telephone:'',mobile:'',bank_name:'',branch:'',acc_no:'',IFSC:'',password:''});
  const handleInput=(e:any) => {
    setreg_value({...reg_value,[e.target.name]:e.target.value});
  }
  const handleSubmit=async(e:MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    const regData= {name:reg_value.name,address:reg_value.address, email:reg_value.email};
    const res=await axios.post('http://localhost/php/signup.php',regData);
    console.log("Submitting data:", regData); // Log data being sent
  }
  
  return (
    <div className="signup-container">
      <div className="scrollable-form">
        <form className="signup-form">
          <h2>Sign Up</h2>
          <div className="input-container">
            <label htmlFor="name" className="label-heading">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={reg_value.name}
              placeholder="Enter your name"
              onChange={handleInput}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={reg_value.address}
              placeholder="Enter your address"
              onChange={handleInput}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={reg_value.email}
              placeholder="Enter your email"
              onChange={handleInput}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="Designation">Designation</label>
            <input
              type="text"
              id="designation"
              name="designation"
              value={reg_value.designation}
              placeholder="Enter your designation"
              onChange={handleInput}
              required
            />
          </div>

          <div className="input-container">
            <label htmlFor="PAN No.">PAN No.</label>
            <input
              type="text"
              id="PAN No."
              name="PAN"
              value={reg_value.PAN}
              placeholder="Enter your PAN No."
              onChange={handleInput}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="phone">Phone No.</label>
            <div className="subfields">
              <div className="subfield">
                <label htmlFor="telephone">Telephone No.</label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={reg_value.telephone}
                  placeholder="Enter telephone number"
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="subfield">
                <label htmlFor="mobile">Mobile No.</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={reg_value.mobile}
                  placeholder="Enter mobile number"
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="bank">Bank Details</label>
            <div className="subfields">
              <div className="subfield">
                <label htmlFor="bank name">Bank Name</label>
                <input
                  type="text"
                  id="bank name"
                  name="bank_name"
                  value={reg_value.bank_name}
                  placeholder="Enter bank name"
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="subfield">
                <label htmlFor="branch name">Branch Name</label>
                <input
                  type="text"
                  id="branch name"
                  name="branch"
                  value={reg_value.branch}
                  placeholder="Enter branch name"
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="subfield">
                <label htmlFor="bank acc no.">Bank Account No.</label>
                <input
                  type="text"
                  id="bank acc no."
                  name="acc_no"
                  value={reg_value.acc_no}
                  placeholder="Enter bank account no."
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="subfield">
                <label htmlFor="IFSC Code">IFSC Code</label>
                <input
                  type="text"
                  id="IFSC Code"
                  name="IFSC"
                  value={reg_value.IFSC}
                  placeholder="Enter IFSC Code"
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="set password">Set Password</label>
            <input
              type="text"
              id="set password"
              name="password"
              value={reg_value.password}
              placeholder="Enter your password"
              onChange={handleInput}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="confirm password">Confirm Password</label>
            <input
              type="text"
              id="confirm password"
              name="confirm password"
              placeholder="Confirm your password"
              required
            />
          </div>
          <Button type="button" onClick={handleSubmit}>
                Sign Up
          </Button>
          <Button type="button" onClick={generatePDF}>
                Generate Invoice
          </Button>
        </form>
        <div className="switch-page">
          <p>
            Already have an account? <Link to="/">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
