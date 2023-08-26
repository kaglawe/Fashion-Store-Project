import React, { useState, useEffect } from 'react';
import Signimage from './Signimage';
import Header from './Header';
import shopkeeperServices from '../../services/shopkeeper.services';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [data, setData] = useState({
    email: '',
    password: '',

  })

  const [error, setErrors] = useState({
    errors: {},
    isError: false
  })

  useEffect(() => {
    console.log(data);
  }, [data])

  // handle change
  const handleChange = (event, field) => {
    // console.log(event.target.value);
    setData({ ...data, [field]: event.target.value })
  }

  // function to reset form data 
  const resetData = () => {
    setData({
      email: '',
      password: '',

    })
  }
  const navigate = useNavigate();
  const submitForm = (event) => {
    event.preventDefault()

    //data validation 


    // call server api for
    shopkeeperServices.login(data).then((resp) => {
      console.log(resp);
      console.log("success log", resp.data);
      toast.success("Login successfully !!");
      var role = resp.data.role
      if (role === 'user') {
        console.log("user")
        navigate("/shops")

      }
      else {
        // toast.success("User is login successfully !!");
        console.log("shopkeeper");
        let id = resp.data.userId;
        console.log(id)
        localStorage.setItem("user", JSON.stringify(resp.data));
        navigate("/shops/getshop/{id}")
      }
      setData({
        email: "",
        password: "",
      })
    }).catch((error) => {
      console.log(error)
      toast.error("please register First");
      setErrors({
        errors: error,
        isError: true
      })
    })
  }

  return (
    <>
      <Header />
      <div className="container mt-3">
        <section className='d-flex justify-content-between'>
          <div className="left_data" style={{ width: "100%" }}>
            <h3 className='text-center col-lg-8'>Sign In</h3>

            <form onSubmit={submitForm}>

              {/* Email input  */}
              <div className="form-outline mb-3 col-lg-8">
                <input type="email" className="form-control" placeholder='Enter Email' name='email'
                  value={data.email}
                  onChange={(e) => handleChange(e, 'email')} />

              </div>

              {/* Password input  */}
              <div className="form-outline mb-3 col-lg-8">
                <input type="password" className="form-control" placeholder='Enter password' name='password'
                  value={data.password}
                  onChange={(e) => handleChange(e, 'password')} />

              </div>

              {/* 2 column grid layout for inline styling  */}
              <div className="row mb-4 col-lg-10">
                <div className="col d-flex justify-content-center">
                  {/* Checkbox  */}
                  <div className="form-check" style={{ textAlign: 'left' }}>
                    <a href="/forget"> Forgot password?</a>
                  </div>
                </div>
              </div>

              {/* Submit button  */}
              <button type="submit" className="btn btn-primary btn-block">Sign in</button>

              {/* Register buttons  */}
              <div className="text-center col-lg-8">
                <p>Don't have an account?<a className='md-0' href="/register"> Signup</a></p>

              </div>
            </form>
          </div>
          <Signimage />
        </section>
      </div>
    </>
  )
}

export default Login