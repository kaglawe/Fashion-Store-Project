import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import shopkeeperServices from "../../services/shopkeeper.services";
import Header from "../pages/Header";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Products = (props) => {

    const [shops, setShops] = useState([]);
    const [pincode, setPincode] = useState('');
    
    const navigate = useNavigate();

    const init = () => {

        shopkeeperServices.getAllShopById(pincode)
            .then(response => {
                console.log('Printing Shops data', response.data);
                // setProducts(response.data);
                setShops(response.data);
                console.log(shops);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })

    }
    const addNewShop = () => {
        console.log("you want to add shop")
        var user = JSON.parse(localStorage.getItem("user"))
        var id = user.userId;
        console.log("user id to add shop", id)
        navigate("/shops/addshop")

    }

    useEffect(() => {
        toast.success("please search in search box ");
        init();
    }, []);

    const handleDelete = (shopId) => {
        console.log('Printing id', shopId);
        shopkeeperServices.deleteShopById(shopId)
            .then(response => {
                console.log('employee deleted successfully', response.data);
                init();
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }


    const handleInputChange = (event) => {
        console.log("pincode")
        setPincode(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        init();

        shopkeeperServices.getAllShopById(pincode)
            .then(response => {
                console.log("all shops are search", response.data);
            }).catch(error => {
                console.log("something went wrong", error);
            })
    };

    return (

        <div>
            <Header />
            {/* <ShopkeeperNavBar /> */}
            <div className="container">
                <div className="justify-content-center">
                    <form onSubmit={handleSearch}>
                        <input type="text" placeholder="Enter Pincode" required value={pincode} onChange={handleInputChange} />
                        <button className="btn btn-primary mb-3 mt-1" type="submit">Search</button>
                    </form>
                </div>
                <h3 className='mt-2'>List of Shops</h3>
                <hr />
                <div>

                    {/* 1st  Modal Component */}
                    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalToggleLabel">Choose Shopkeeper</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    {/* 2st  Modal Component */}
                    <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                        <div className="modal-dialog modal-xl">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalToggleLabel2">Add New Product</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <table className="table table-bordered table-striped">
                        <thead className="thead-dark">
                            <tr className="text-center">
                                <th>Shop Name</th>
                                <th>Shop Address</th>
                                <th>Pincode</th>
                                <th>Category</th>
                                <th>Open Shop</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                shops.map(shop => (
                                    <tr>
                                        <td>{shop.shopName}</td>
                                        <td>{shop.shopAddress}</td>
                                        <td>{shop.pincode}</td>
                                        <td>{shop.category}</td>

                                        <td className='text-center'>
                                            <button type="button" className="btn btn btn-success mx-3" onClick={() =>
                                                navigate("/shops/allproducts", { state: { id: shop.shopId } })}>Show Products</button>

                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>

                </div>
                <div className="text-center text-muted" style={{ marginTop: '100px', marginBottom: '35px' }}>
                    Copyright &copy; 2023 &mdash; Local Market
                </div>
            </div>
        </div>

    );
}

export default Products;