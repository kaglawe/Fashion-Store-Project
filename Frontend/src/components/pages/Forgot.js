import React, { useState } from 'react'
import shopkeeperServices from '../../services/shopkeeper.services';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const Forgot = () => {

    const [username, setUsername] = useState('');
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();

    // this invoked when reset password button clicked
    const resetPassword = (event) => {
        event.preventDefault()
        // console.log(username);
        var email = username;
        const user = { email };
        shopkeeperServices.forgetPassword(user)
            .then(response => {
                console.log("opt sent on your email check email", response)
                if (response.status === 200) {

                    toast.success("OPT is sent on your email please check !!");
                }
                else {
                    toast.error("Please Enter Valid Email")
                }

            }).catch(error => {

                console.log("something went wrong", error);
                toast.error("your Email is not registered Please Enter valid Email");
            })
    };
    // this invoked when verify otp button clicked
    const verifyOTP = (event) => {
        event.preventDefault();

        console.log(otp);
        shopkeeperServices.verifyOTP(otp).then(response => {
            console.log(response)
            if (response.status === 202) {
                toast.success("OTP verification done !!");
                navigate("/forgot/reset");
            }
            else {
                toast.error("Please Enter Correct OTP ..!");
            }
        })

    };



    return (
        <>
            <form>
                <div className='mt-5 row d-flex justify-content-center'>
                    <div className="card col-md-6">
                        <div className="card-header h5 text-white bg-dark collg-6">Forgot Your Password</div>
                        <div className="card-body px-5">
                            <p className="card-text py-2">
                                Enter your email address and we'll send you an email with instructions to reset your password.
                            </p>
                            <div className="form-outline">
                                <input type="email" id="typeEmail" className="form-control my-3" name='username' value={username}
                                    onChange={(e) => setUsername(e.target.value)} placeholder='Enter Registered Email' />

                            </div>
                            <a className="btn btn-dark w-100 col-lg-6" onClick={(e) => resetPassword(e)}>Send OTP</a>
                            {/* This division for verify ONE TIME PASSWORD */}
                            <div className="form-outline">
                                <input type="number" id="otp" className="form-control my-3" name='otp' value={otp}
                                    onChange={(e) => setOtp(e.target.value)} placeholder='Enter OTP here' />

                            </div>
                            <a className="btn btn-dark w-100 col-lg-6" onClick={(e) => verifyOTP(e)}>verify OTP</a>
                            <div className="d-flex justify-content-between mt-4">
                                <a href="/login">Login</a>
                                <a href="/register">Register</a>
                            </div>
                        </div>

                    </div>
                </div>
            </form>





        </>
    )
}

export default Forgot
