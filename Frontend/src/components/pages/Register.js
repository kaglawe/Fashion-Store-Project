import React, { useState } from 'react'
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Signimage from './Signimage';
import Header from './Header';
import { toast } from 'react-toastify';
import shopkeeperServices from '../../services/shopkeeper.services';


const Register = () => {

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: '',
        contactNo: '',


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
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            role: '',
            contactNo: '',
        })
    }

    const submitForm = (event) => {
        event.preventDefault()

        //data validation 

        // call server api for
        shopkeeperServices.register(data).then((resp) => {
            // signUp(data).then((resp) => {
            console.log(resp);
            console.log("success log");
            toast.success("User is registerd successfully !!");
            setData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                role: "",
                contactNo: "",

            })
        }).catch((error) => {
            console.log(error)
            console.log("Error log");
            toast.error("Something went wrong");
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
                        <h3 className='text-center col-lg-8'>Sign Up</h3>

                        <Form onSubmit={submitForm}>

                            <Form.Group className="mb-3 col-lg-8">
                                <Form.Control type="text" name="firstName"
                                    onChange={(e) => handleChange(e, 'firstName')}
                                    value={data.firstName} required
                                    placeholder="Enter Your First Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-8">
                                <Form.Control type="text" name="lastName"
                                    onChange={(e) => handleChange(e, 'lastName')}
                                    value={data.lastName} required
                                    placeholder="Enter Your Last Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                                <Form.Control type="email" name="email"
                                    onChange={(e) => handleChange(e, 'email')}
                                    value={data.email} required
                                    placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
                                <Form.Control type="password" name="password"
                                    onChange={(e) => handleChange(e, 'password')}
                                    value={data.password} required
                                    placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-8">
                                <Form.Control type="text" name="role"
                                    onChange={(e) => handleChange(e, 'role')}
                                    value={data.role}
                                    placeholder="Enter your Role" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-8">
                                <Form.Control type="number" name="contactNo"
                                    onChange={(e) => handleChange(e, 'contactNo')}
                                    value={data.contactNo} pattern="[0-9]{10}"
                                    placeholder="Enter your Mobile Number" />
                            </Form.Group>
                            <Form.Group className='justify-content-center'>
                                <Button variant="primary" className='btn btn-primary me-2' type="submit">
                                    Submit
                                </Button>
                                <Button variant="secondary" className='btn btn-secondary' onClick={resetData} type="reset">
                                    Reset
                                </Button>
                            </Form.Group>

                        </Form>
                        <p className='mt-3'>Already Have an Account  </p>
                        <a href="/login">Sign In</a>

                    </div>
                    <Signimage />
                </section>
            </div>
        </>
    )
}

export default Register
