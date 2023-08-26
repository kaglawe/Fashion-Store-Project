import React from 'react'
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import shopkeeperServices from '../../services/shopkeeper.services';
import { toast } from "react-toastify"
import Header from '../pages/Header';


const AddNewShopkeeper = () => {


    const [shopName, setShopName] = useState('');
    const [category, setCategory] = useState('');
    const [pincode, setPincode] = useState('');
    const [shopAddress, setShopAddress] = useState('');
    const { shopId } = useParams();

    const navigate = useNavigate();

    const addshopkeeper = (e) => {
        e.preventDefault();
        const shopkeeper = { shopName, category, pincode, shopAddress }
        console.log(shopkeeper)

        if (shopId) {
            // update
            shopkeeperServices.updateshopkeeper(shopkeeper, shopId)
                .then(response => {
                    console.log('shopkeeper data updated successfully', response.data);
                    toast.success('shopkeeper Updated. Auto-Redirecting....',
                        {
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            },
                        }
                    )
                    setTimeout(() => {
                        navigate('/admin/shopkeeper')
                    }, 2500)
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                    toast.error('Something went wrong!',
                        {
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            },
                        }
                    )
                })
        } else {

            var user = JSON.parse(localStorage.getItem("user"))
            var id = user.userId;
            console.log("to add shop", user)
            shopkeeperServices.addShopById(id, shopkeeper)
                .then(respose => {
                    console.log("shopkeeper Registered.", respose.data)
                    toast.success('Your New Shop is Registered ... !',
                        {
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            },
                        }
                    )
                    setTimeout(() => {
                        // navigate('/shops/getshop/{id}')
                    }, 2000)
                })
                .catch(error => {
                    console.log('Something Went Wrong', error);
                    toast.success('Your new Shop is Registered!',
                        {
                            style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                            },
                        }
                    )
                })
        }
    }


    useEffect(() => {
        if (shopId) {
            shopkeeperServices.getshopkeeperDetails(shopId)
                .then(respose => {
                    console.log(respose.data);
                    setShopName(respose.data.shopName);
                    setCategory(respose.data.lastname);
                    setShopAddress(respose.data.address)
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])

    return (
        <div>
            {/* <ShopkeeperNavBar /> */}
            <Header />
            <div className="container h-100">
                <div className="row justify-content-sm-center h-100">
                    <div className="col-xxl-6 col-xl-10 col-lg-10 col-md-7 col-sm-9">
                        <div className="card shadow-lg">
                            <div className="card-body px-5 pt-5">
                                <h1 className="fs-4 card-title fw-bold mb-4">{shopId ? 'Update' : 'Add New'} Shop</h1>
                                <form onSubmit={(e) => addshopkeeper(e)}>

                                    <div className="row g-3">
                                        <div className="col mb-3">
                                            {/* <label className="mb-2 text-muted" htmlFor="firstname">First Name</label> */}
                                            <input id="firstname" type="text" className="form-control" name="shopName" required autoFocus
                                                value={shopName} placeholder="Enter Shop Name"
                                                onChange={(e) => setShopName(e.target.value)}
                                            />
                                        </div>

                                        <div className="col mb-3">
                                            <input id="lastname" type="text" className="form-control" name="pincode" required
                                                value={pincode} placeholder="Enter Pincode" pattern='[0-9]{6}'
                                                onChange={(e) => setPincode(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col mb-3">
                                        <input id="lastname" type="text" className="form-control" name="category" required
                                            value={category} placeholder="Enter categeory"
                                            onChange={(e) => setCategory(e.target.value)}
                                        />
                                    </div>

                                    <div className="row g-3">

                                        <div className="col mb-3">
                                            <textarea id="Address" className="form-control" name="shopAddress" required rows="4" cols="50" maxLength="50"
                                                value={shopAddress} placeholder="Enter Your Shop Address"
                                                onChange={(e) => setShopAddress(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="align-items-center d-flex">
                                        <button type="submit" className="btn btn-primary">
                                            {shopId ? 'Update' : 'Add New'} Shop
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="text-center mt-4 text-muted">
                            Copyright &copy; 2023 &mdash; Local Market
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNewShopkeeper
