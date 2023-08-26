import React, { useState } from 'react';
import { MDBContainer,MDBInput,MDBBtn} from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import shopkeeperServices from '../../services/shopkeeper.services';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function ResetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const user = {email : email,
                password : newPassword
                }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("In Handle submit",event);
    shopkeeperServices.changePassword(user)
    toast.success("password change successfully !!");
    navigate("/login")

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

  };

  return (
    <>
    <Header/>
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' value={email} onChange={(e) =>setEmail(e.target.value)} placeholder='Enter Your Email' id='form1' type='email'/>
      <MDBInput wrapperClass='mb-4' onChange={(e) => setNewPassword(e.target.value)} placeholder='Enter Your New Password' type='password' />
      <MDBInput wrapperClass='mb-4' onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Re-Enter Your New Password' type='password' />

      <MDBBtn className="mb-4" onClick={(e) =>handleSubmit(e)}>Change Password</MDBBtn>

    </MDBContainer>
    </>
    
  );
}

export default ResetPassword;